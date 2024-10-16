from flask import Flask, render_template, request, jsonify, url_for,redirect, send_file, make_response, abort
from flask_mail import Mail, Message
import sqlite3
import json
import random
import os
import re
from bs4 import BeautifulSoup
import requests
import os.path
from os import path
from flask_compress import Compress
from flask_caching import Cache
from flask_assets import Environment, Bundle
from assets import bundles
from werkzeug.utils import secure_filename
from collections import defaultdict
from logging import FileHandler, WARNING
import sass

a = os.getcwd()
UPLOAD_FOLDER = os.path.join(a+'/static', 'abudhabi')
#https://docs.google.com/spreadsheets/d/1aEI1CiIKzGpKk3niAQo_FXGcr0D3CLsp2GWylpmHiOk/edit#gid=0

cache = Cache(config={'CACHE_TYPE': 'simple'})

app = Flask(__name__)
assets = Environment(app)
assets.register(bundles)
file_handler = FileHandler('errorlog.txt')
file_handler.setLevel(WARNING)
app.logger.addHandler(file_handler)
Compress(app)
cache.init_app(app)

app.config['MAIL_SERVER'] = 'mail.uhpae.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'welcome2@uhpae.com'
app.config['MAIL_PASSWORD'] = 'ahmedrauf1'
app.config['MAIL_DEFAULT_SENDER'] = 'welcome2@uhpae.com'
app.config['MAIL_MAX_EMAILS'] = None
app.config['MAIL_ASCII_ATTACHMENTS'] = False

mail = Mail(app)


@app.route('/robots.txt')
def robots_txt():
    return render_template("robots.txt")


@app.route('/community/<location>',methods = ['GET','POST'])
def community(location):
    a = location
    f = open('sublocation.json')
    file_data = json.load(f)
    a = str(int(a))
    try:
        locs = file_data[a]
    except:
        locs = {"9998":"None"}
    locs = list(locs.values())
    locations = []
    for i in locs:
        locations.append((i,i))
    return jsonify({'locations':locations})

@app.route('/editor/<var>')
def location(var):
    return render_template('sitemap.html')


@app.route('/editor')
def editor(): 
    '''
    conn = sqlite3.connect('properties.db')
    c = conn.cursor()
    c.execute(""" CREATE VIRTUAL TABLE area USING fts4 (
        location text,
        thumbnail text,
        images text,
        landmark text,
        title text,
        header text,
        description text,
        map text
    )""")
    

    c.execute(""" CREATE VIRTUAL TABLE community USING fts4 (
        location text,
        building text,
        thumbnail text,
        images text,
        floorplans text,
        logo text,
        developer text,
        landmark text,
        title text,
        header text,
        description text,
        map text,
        facts text
            )""")
    conn.commit()
    conn.close()
    '''
    return render_template('editor.html')

@app.route('/add_property', methods=['GET', 'POST'])
def shortenurl():
    if request.method == 'POST':
        developer = request.form['developer']
        
        building = request.form['building']
        if developer!='area':
            sub_community = '/'+building.replace(" ","-")
        else:
            sub_community = ''
        a = request.form['locationtext']
        f = open('location.json')
        file_data = json.load(f)["ABD"]
        loc = file_data[0][a]
        if not os.path.isdir(UPLOAD_FOLDER+'/'+loc.replace(" ","-")):
            os.mkdir(UPLOAD_FOLDER+'/'+loc.replace(" ","-"))
            os.mkdir(UPLOAD_FOLDER+'/'+loc.replace(" ","-")+'/images')
        if developer != "area":
            os.mkdir(UPLOAD_FOLDER+'/'+loc.replace(" ","-")+sub_community)
            os.mkdir(UPLOAD_FOLDER+'/'+loc.replace(" ","-")+sub_community+'/images')
            os.mkdir(UPLOAD_FOLDER+'/'+loc.replace(" ","-")+sub_community+'/floorplans')
            try:
                uploaded_logo = request.files['logo']
                ext = os.path.splitext(secure_filename(uploaded_logo.filename))
                uploaded_logo.save(UPLOAD_FOLDER+'/'+loc.replace(" ","-")+sub_community+"/logo"+ext[1])
                logo = "/static/abudhabi/"+loc.replace(" ","-")+sub_community+"/logo"+ext[1]
            except:
                logo = "none"
        uploaded_file = request.files['thumbnail']
        ext = os.path.splitext(secure_filename(uploaded_file.filename))
        uploaded_file.save(UPLOAD_FOLDER+'/'+loc.replace(" ","-")+sub_community+"/thumbnail"+ext[1])
        thumbnail = "/static/abudhabi/"+loc.replace(" ","-")+sub_community+"/thumbnail"+ext[1]
        files = request.files.getlist("all_files")
        images = []
        for file in files:
            try:
                file.save(UPLOAD_FOLDER+'/'+loc.replace(" ","-")+sub_community+'/images/'+file.filename)
                images.append("/static/abudhabi/"+loc.replace(" ","-")+sub_community+"/images/"+file.filename)
            except:
                pass
        floorplans_ = []
        if developer != "area":
            facts = request.form['facts']
            sub_communities = request.form['sub_communities']
            floorplans = request.files.getlist("floorplans")
            for file in floorplans:
                try:
                    file.save(UPLOAD_FOLDER+'/'+loc.replace(" ","-")+sub_community+'/floorplans/'+file.filename)
                    floorplans_.append("/static/abudhabi/"+loc.replace(" ","-")+sub_community+"/floorplans/"+file.filename)
                except:
                    pass
        area = loc
        
        title = request.form['title']
        landmark = request.form['landmark']
        desc = request.form['description']
        header = request.form['header']
        map_location = request.form['map_location']
        images = ','.join(images)
        floorplans_ = ','.join(floorplans_)
        conn = sqlite3.connect('properties.db')
        c = conn.cursor()
        if developer != "area":
            c.execute("INSERT INTO communities VALUES (:location,:building,:thumbnail,:images,:floorplans,:logo,:developer,:landmark,:title,:header,:description,:map,:facts,:sub_communities)",
                {
                "location" : area,
                "building":building,
                "thumbnail" : thumbnail,
                "images" : images,
                "floorplans":floorplans_,
                "logo":logo,
                "developer":developer,
                "landmark" : landmark,
                "title":title,
                "header":header,
                "description":desc,
                "map":map_location,
                "facts":facts,
                "sub_communities":sub_communities
                }
                )
        else:
            c.execute("INSERT INTO area VALUES (:location,:thumbnail,:images,:landmark,:title,:header,:description,:map)",
                {
                "location" : area,
                "thumbnail" : thumbnail,
                "images" : images,
                "landmark" : landmark,
                "title":title,
                "header":header,
                "description":desc,
                "map":map_location
                }
                )
        conn.commit()
        conn.close()
        
        return render_template('editor.html')

@app.route('/locations', methods=['GET', 'POST'])
def locations():
    conn = sqlite3.connect('properties.db')
    queryRes = []
    we = []
    c = conn.cursor()
    c.row_factory = sqlite3.Row
    c.execute('''SELECT rowid,* FROM area''')
    result = c.fetchall()
    #c.execute('''DELETE FROM area WHERE title = "YAS ISLAND";''' )

    #url = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.4685294850037!2d54.40810161534275!3d24.53846618420674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67d77059d465%3A0xf14feb90c98942eb!2sMamsha%20Al%20Saadiyat!5e0!3m2!1sen!2sae!4v1637757675144!5m2!1sen!2sae" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    #c.execute('''UPDATE community SET map = ? WHERE building = "Mamsha Al Saadiyat"''',['{}'.format(url)])    
    #conn.commit()
    #conn.close()

    c = 0
    for r in result:
        newdict = dict(r)
        newdict["location"] = newdict["location"].replace(" ","-")
        queryRes.append(newdict)
    return jsonify(queryRes[:8])
    

@app.route('/communities/<areaname>')
def newdb(areaname):
    areaname = areaname.replace("-"," ")
    conn = sqlite3.connect('properties.db')
    c = conn.cursor()
    c.execute('''SELECT * FROM area WHERE location == ?''',['{}'.format(areaname)])
    result = c.fetchone()
    images = result[2].split(',')
    c.execute('''SELECT * FROM communities WHERE location == ?''',['{}'.format(areaname)])
    all_community = c.fetchall()
    d = defaultdict(list)
    for i in all_community:
        d[i[13]].append(i)
    return render_template("location.html", result=result, images = images, all_community = all_community, sub_community = d)


@app.route('/communities/<areaname>/<buildingname>')
def newdb1(areaname,buildingname):
    if request.method == "GET":
        areaname = areaname.replace("-"," ")
        buildingname = buildingname.replace("-"," ")
        conn = sqlite3.connect('properties.db')
        c = conn.cursor()
        c.execute('''SELECT * FROM communities WHERE building == ? AND location == ?''',['{}'.format(buildingname),'{}'.format(areaname)])
        result = c.fetchone()
        try:
            images = result[3].split(',')
        except:
            images = ""
        #images.reverse()
        thumbnail = result[2].replace("'","\\'")
        all_community = c.fetchone()
        floorplans = []
        for i in reversed(result[4].split(",")):
            name = i.split('/')[-1].split('.')[0].replace("_"," ")
            link = i
            link2 = i.replace("'","\\'")
            floorplans.append((name,link,link2))
        if result[6] == "aldar":
            dev_img = "/static/projects/aldar.png"
        elif result[6] == "none":
            dev_img = "/static/images/standalone2.png"
        elif result[6] == "imkan":
            dev_img = "/static/images/imkan.png"
        elif result[6] == "mag properties":
            dev_img = "/static/images/mag.png"
        elif result[6] == "badie-group":
            dev_img = "/static/images/badie.png"
        elif result[6] == "eni":
            dev_img = "/static/images/ENI.png"
        elif result[6] == "hydra":
            dev_img = "/static/images/hydra.png"
        elif result[6] == "damac":
            dev_img = "/static/images/damac.jpg"
        elif result[6] == "ADCP":
            dev_img = "/static/images/adcp.jpg"
        else: 
            dev_img = "/static/images/standalone2.png"
        conn.close()
        return render_template("sub_location.html", thumbnail = thumbnail ,result=result, images = images, all_community = all_community, dev_img=dev_img, floorplans = floorplans)


@app.route('/crm')
def crm():
    conn = sqlite3.connect('../revamped_crm/test.db')
    c = conn.cursor()
    c.execute('''SELECT * FROM properties''')
    result = c.fetchone()
    conn.close()
    return str(result)


@app.route('/sitemap.xml')
def site_map():
    response= make_response(render_template("sitemap.xml"))
    response.headers['Content-Type'] = 'application/xml'
    return response
    
@app.route('/sitemap.html')
def site_map_html():
    return render_template('sitemap.html')

@app.route('/landing/yas-acres/the-magnolias')
def magnoliaslandingpage():
    return render_template('themagnolias.html')

@app.route('/landing/yas-golf')
def yasgolflandingpage():
    return render_template('yasgolf.html')

@app.route('/landing/lagoons')
def lagoonslandingpage():
    return render_template('lagoons.html')

@app.route('/landing/al-ghadeer/phase-2')
def ghadeerphase2landingpage():
    return render_template('alghadeer.html')

@app.route('/landing/sustainablecity')
def sustainablecitylandingpage():
    return render_template('sustainablecity.html')

@app.route('/landing/manarat-living')
def manaralandingpage():
    return render_template('manarat.html')

@app.route('/landing/yas-island/waters-edge')
def watersedgelandingpage():
    return render_template('watersedge.html')

@app.route('/landing/road-show')
def openhouselandingpage():
    return render_template('open_house.html')

@app.route('/landing/qatar_event')
def qatarlandingpage():
    return render_template('qatar_event.html')

@app.route('/m-aljbour')
def ceo_landing_barcode():
    image_link = '/static/agent-barcodes/jbour.png'
    name = 'Mohammed Al Jbour'
    number = '+971562267626'
    email = 'm.aljbour@uhpae.com'
    return render_template('mgmt_barcode.html', image_link = image_link, name = name, number = number, email = email)

@app.route('/reception')
def reception_landing_barcode():
    image_link = '/static/agent-barcodes/reception.png'
    name = 'Florien Moreno'
    number = '+971549981998'
    email = 'info@uhpae.com'
    return render_template('mgmt_barcode.html', image_link = image_link, name = name, number = number, email = email)

@app.route('/agent/<agent_name>')
def sakher_landing_barcode(agent_name):
    if agent_name == 'sakher-ayman':
        image_link = '/static/agent-barcodes/sakher.png'
        name = 'Sakher Ayman'
        number = '+971525284991'
        email = 'sakher@uhpae.com'
    elif agent_name == 'abdalchoib':
        image_link = '/static/agent-barcodes/abdalchoib.png'
        name = 'Abdal Choib'
        number = '+971506656601'
        email = 'abdalchoib@uhpae.com'
    elif agent_name == 'm-youssef':
        image_link = '/static/agent-barcodes/youssef.png'
        name = 'Mohammed Youssef'
        number = '+971506176109'
        email = 'm.youssef@uhpae.com'
    elif agent_name == 'tareq-abudaqqa':
        image_link = '/static/agent-barcodes/tareq.png'
        name = 'Tareq Abudaqqa'
        number = '+971528712509'
        email = 'tareq@uhpae.com'
    elif agent_name == 'm-adel':
        image_link = '/static/agent-barcodes/adel.png'
        name = 'Mohammed Adel'
        number = '+971505071572'
        email = 'm.adel@uhpae.com'
    elif agent_name == 'm-ali':
        image_link = '/static/agent-barcodes/nawarah.png'
        name = 'Mohammed Nawarah'
        number = '+971585966443'
        email = 'm_ali@uhpae.com'
    elif agent_name == 'hajar':
        image_link = '/static/agent-barcodes/hajar.png'
        name = 'Hajar Alkatti'
        number = '+971507614672'
        email = 'hajar.katti@uhpae.com'
    elif agent_name == 'laith':
        image_link = '/static/agent-barcodes/laith.png'
        name = 'Laith Alloush'
        number = '+971504875677'
        email = 'l.alloush@uhpae.com'
    elif agent_name == 'ramzi':
        image_link = '/static/agent-barcodes/ramzi.png'
        name = 'Ramzi Abu Sada'
        number = '+971563383131'
        email = 'ramzi.a@uhpae.com'
    elif agent_name == 'salwa':
        image_link = '/static/agent-barcodes/salwa.png'
        name = 'Salwa AbdelFattah'
        number = '+971547914951'
        email = 'salwa.a@uhpae.com'
    elif agent_name == 'm-oudeh':
        image_link = '/static/agent-barcodes/oudeh.png'
        name = 'Mohammed Abu Oudeh'
        number = '+971502776862'
        email = 'm.odeh@uhpae.com'
    elif agent_name == 'm-diab':
        image_link = '/static/agent-barcodes/diab.png'
        name = 'Mohammed Diab'
        number = '+971503140708'
        email = 'mhddiab@uhpae.com'
    elif agent_name == 'ahmed-jaber':
        image_link = '/static/agent-barcodes/jaber.png'
        name = 'Ahmed Jaber'
        number = '+971552901938'
        email = 'ahmed.jaber@uhpae.com'
    elif agent_name == 'hamza-sabri':
        image_link = '/static/agent-barcodes/sabri.png'
        name = 'Hamza Sabri'
        number = '+971551159617'
        email = 'hamza_tmimi@uhpae.com'
    elif agent_name == 'naima-rahem':
        image_link = '/static/agent-barcodes/naima.png'
        name = 'Naima Rahem'
        number = '+971566664641'
        email = 'naima.rahem@uhpae.com'
    elif agent_name == 'tmam':
        image_link = '/static/agent-barcodes/tamam.png'
        name = 'Tmam Esmaeel'
        number = '+971545478064'
        email = 'tmamesmael@uhpae.com'
    elif agent_name == 'ruba-dajani':
        image_link = '/static/agent-barcodes/ruba-dajani.png'
        name = 'Ruba Al Dajani'
        number = '+971505837424'
        email = 'ruba.dajani@uhemedia.com'
    elif agent_name == 'islam-roshdy':
        image_link = '/static/agent-barcodes/islam-roshdy.png'
        name = 'Islam Roushdy'
        number = '+971565256226'
        email = 'islam@uhpae.com'
    elif agent_name == 'khloud-barakat':
        image_link = '/static/agent-barcodes/khloud_bar.png'
        name = 'Khloud Barakat'
        number = '+971585396336'
        email = 'khloud@uhpae.com'
    elif agent_name == 'm-essam':
        image_link = '/static/agent-barcodes/m-essam.png'
        name = 'Mohamed Essam'
        number = '+971565112229'
        email = 'mohamed.essam@uhpae.com'
    elif agent_name == 'suha-aljbour':
        image_link = '/static/agent-barcodes/suha-jbour.png'
        name = 'Suha Al Jbour'
        number = '+971585326226'
        email = 'soha.jbour@uhpae.com'
    elif agent_name == 'florien':
        image_link = '/static/agent-barcodes/florien.png'
        name = 'Florien'
        number = '+971549981998'
        email = 'florien@uhpae.com'
    elif agent_name == 'baheej':
        image_link = '/static/agent-barcodes/baheej.png'
        name = 'Baheej'
        number = '+971543086232'
        email = 'accounts@uhpae.com'
    elif agent_name == 'naira-amin':
        image_link = '/static/agent-barcodes/naira-amin.png'
        name = 'Naira Amin'
        number = '+971585916336'
        email = 'naira_amin@uhpae.com'
    elif agent_name == 'reham-habib':
        image_link = '/static/agent-barcodes/reham_habib.png'
        name = 'Reham Habib'
        number = '+971545370339'
        email = 'reham_habib@uhpae.com'
    elif agent_name == 'mahmoud-mustafa':
        image_link = '/static/agent-barcodes/mahmoud_mustafa.png'
        name = 'Mahmoud Mustafa'
        number = '+971554960930'
        email = 'mahmoud_moustafa@uhpae.com'
    elif agent_name == 'meenaallah-sheshtawy':
        image_link = '/static/agent-barcodes/meen-shesh.png'
        name = 'Meenaallah Sheshtawy'
        number = '+971501564358'
        email = 'meena_sheshtawy@uhpae.com'
    elif agent_name == 'lama-al-khattab':
        image_link = '/static/agent-barcodes/lama-khattab.png'
        name = 'Lama Al Khattab'
        number = '+971501723316'
        email = 'lama_khattab@uhpae.com'
    elif agent_name == 'rooh-saeed':
        image_link = '/static/agent-barcodes/rooh_saeed.png'
        name = 'Rooh Saeed'
        number = '+971588336246'
        email = 'samira_saeed@uhpae.com'
    elif agent_name == 'ehab-souliman':
        image_link = '/static/agent-barcodes/ehab-souliman.png'
        name = 'Ehab Souliman'
        number = '+971564900991'
        email = 'ehab_souliman@uhpae.com'
    else:
        return abort(404)
    return render_template('agent_sakher_barcode.html', image_link = image_link, name = name, number = number, email = email)
    
@app.route('/privacy-policy')
def privacypolicy():
    return render_template('privacypolicy.html')

@app.route('/download/<filename>')
def downloadreport (filename):
    file_ = filename
    a = os.getcwd()
    path = a+"/reports/"+file_
    return send_file(path, as_attachment=True)


@app.route('/')
#@cache.cached(timeout=50)
def home():
    search_list = []
    conn = sqlite3.connect('properties.db')
    c = conn.cursor()
    c.execute('''SELECT location FROM area''')
    result = c.fetchall()
    for i in result:
        search_list.append(i[0])
    c.execute('''SELECT location,building FROM communities''')
    all_community = c.fetchall()
    for i in all_community:
        search_list.append(",".join([i[1],i[0]]))
    return render_template("hc.html", search_list = search_list)

@app.route("/hotproperties", methods=["POST", "GET"]) 
def hotproperties():
    conn = sqlite3.connect('main2.db')
    queryRes = []
    we = []
    c = conn.cursor()
    c.row_factory = sqlite3.Row
    c.execute('''SELECT rowid,* FROM properties WHERE state = "Available"''')
    result = c.fetchall()
    c = 0
    for r in result:
        newdict = dict(r)
        newdict['price'] = "{:,}".format(int(newdict['price']))
        if newdict['image'] != "":
            queryRes.append(newdict)
    conn.commit()
    conn.close()
    random.shuffle(we)
    queryRes = we[:10] + queryRes
    random.shuffle(queryRes)
    return jsonify(queryRes)

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/map')
def map():
   
    return render_template('map.html')

@app.route('/register')
def register():
    return render_template("register.html")

@app.route('/sendmail',methods=['POST'])
def sendmail():
    email = request.form.get('email')
    message = request.form.get('message')
    name = request.form.get('name')
    phone = request.form.get('phone')
    strReferrer = request.form.get('strReferrer')
    if email == None:
        email = ""
    if message == None:
        message = ""
    if name == None:
        name = ""
    if phone == None:
        phone = ""
    if strReferrer == None:
        strReferrer = ""
    msg = Message('Hey there', recipients=['welcome2@uhpae.com'])
    msg.html = '<br>' + email + '</br>' + message  + '</br>' + name  + '</br>' + phone + '</br>' + strReferrer
    #mail.send(msg)
    return redirect(request.referrer)

@app.route('/listinginfo',methods=['POST'])
def listinginfo():
    email = request.form.get('email')
    number = request.form.get('number')
    name = request.form.get('name')
    propertytype = request.form.get('type')
    location = request.form.get('location')
    date = request.form.get('meeting_date')
    time = request.form.get('time')
    msg = Message('Hey there', recipients=['welcome@uhpae.com'])
    msg.html = '<b>'+email+'</b>'+'<br><b>'+name+'</b>'+'<br><b>'+number+'</b>'+'<br><b>'+propertytype+'</b>'+'<br><b>'+location+'</b>'+'<br><b>'+date+'</b>''<br>' +time+'</b>'
    mail.send(msg)
    return redirect(request.referrer)

@app.route('/about')
def about():
    return render_template("About.html")

@app.route('/team')
def team():
    return render_template("team.html", total = '12')

@app.route('/careers')
def careers():
    return render_template("careers.html")

@app.route('/services')
def service():
    return render_template("services.html")

@app.route('/media')
def media():
    return render_template("media.html")



@app.route('/listing')
def listing():
    
    return render_template("listing.html")

@app.route('/submitcv')
def submitcv():
    return render_template("submitcv.html")

@app.route('/upload_file', methods=['POST'])
def upload_file():
    email = request.form.get('email')
    message = request.form.get('message')
    name = request.form.get('name')
    phone = request.form.get('phone')
    uploaded_file = request.files['file']
    filetype = uploaded_file.filename
    filetype = filetype.replace(".","/")
    if uploaded_file.filename != '':
       uploaded_file.save(uploaded_file.filename)
    msg = Message('Hey there', recipients=['welcome@uhpae.com'])
    msg.html = '<br>' + email + '</br>' + message  + '</br>' + name  + '</br>' + phone
    with app.open_resource(uploaded_file.filename) as fp:  
        msg.attach(uploaded_file.filename,filetype,fp.read())
    mail.send(msg)
    os.remove(uploaded_file.filename)
    return redirect(url_for('submitcv'))

@app.route('/communities/<area>/<propertyname>/<propertyid>')
def prop(area,propertyname,propertyid):
    conn = sqlite3.connect('main2.db')
    c = conn.cursor()
    string = ('SELECT description, image, title, location, beds, baths, size, ref_no, type, agent_phone, agent_email, images, balcony, basement_parking, wardrobes, central_air_condition, central_heating, community_view, covered_parking, maids_room, satellite_or_cable, gymnasium, shared_pool, furnished, fitted_kitchen, maintainence, washing_room, property, type, price,units,area,agent_email  FROM properties WHERE ref_no=:ref_no')
    c.execute(string,{'ref_no':propertyid})
    result = c.fetchone()
    conn.close()
    if result != None:
        loc = result[3].split(',')
        loc = loc[0]
        images = result[11]
        images = images.split('|')
        floorplan = result[8]
        floorplan = floorplan.split('|')
        masterplan = result[9]
        masterplan = masterplan.split('|')
        features = []
        f1 = (result[12]+result[13]).split(",")
        features = f1
        temp = []
        for i in range(12,27):
            features.append(result[i])
        features[:] = [x for x in features if x]
        conn = sqlite3.connect('main2.db')
        c = conn.cursor()
        string = ('SELECT description FROM dproperties WHERE ref_no=:ref_no')
        c.execute(string,{'ref_no':propertyid})
        desc = c.fetchone()
        p = int(result[29])
        price_range = [(p - (p*0.3)), (p + (p+0.3))]
        a = []
        c.row_factory = sqlite3.Row
        #c.execute('SELECT rowid, * FROM properties WHERE beds=? AND units=? AND type=? AND price BETWEEN ? AND ?',(result[4], result[30],result[28], price_range[0], price_range[1]))
        c.execute('SELECT rowid, * FROM properties WHERE beds=? AND units=? AND type=?',(result[4], result[30],result[28]))
        suggest = c.fetchall()
        for r in suggest:
            newdict = dict(r)
            newdict['price'] = "{:,}".format(int(newdict['price']))
            a.append(newdict)
        suggestions = a
        conn.commit()
        conn.close()

        with open("virtual_tour.json", "r") as x:
            data = json.load(x)
            try:
                vt = data[result[27]]
            except:
                vt = ""
            x.close()

        with open("test.json", "r") as f:
                data = json.load(f)
                temp = ""
                schools = []
                hospitals = []
                landmarks = []
                for item in data:
                    if item['property'] == result[27]:
                        try:
                            temp = item['location']
                            schools = item['schools']
                            hospitals = item['clinic']
                            landmarks = item['shops']
                        except:
                            temp = 'Not Available'
        f.close()
        r_all = len(desc[0])
        r_half = r_all/2
        prace = "{:,}".format(int(result[29]))
        overview = desc[0]
        overview = overview[0:int(r_half)] + "<span id='dots'>...</span><span id='more'>" + overview[int(r_half):int(r_all)] + "</span>"
        overview = overview.replace('<div class = "container" style="font-family: "Century Gothic", sans-serif;">','')
        overview = overview.replace("</div></span>",'</span>')
        overview = overview.replace("h3",'p')
        #features=['Balcony','Maids Room','Built in wardrobes', 'Carpets', 'Study', 'Central air conditioning', 'Heating', 'Fully fitted kitchen','Private Pool','Private Gym','Marble floors','Security','Walk-in Closet','Pets allowed','Private garage','Sauna','Wood flooring','Steam room','Maintenance','Terrace','Basement parking','Covered parking','Shared Gym','Shared swimming pool', 'Near school','Near hospital','Near mosque','Near supermarket','Near metro','Beach access','Public parks','Near restaurants','Near Golf','Near Hotel','Near airport','Spa','Maid Service','Children Play Area']
        return render_template("property.html",queryRes = suggestions, result = result, images = images, loc=loc, features = features, desc = overview, temp = temp, schools = schools, hospitals = hospitals, landmarks = landmarks, vt=vt, floorplan = floorplan, masterplan = masterplan, prace=prace)
    return jsonify({'success':304})   


@app.route('/developers')
def developer():
    return render_template("developers.html")


@app.route('/search', methods=["POST", "GET"])
def search():
    search_list = []
    conn = sqlite3.connect('properties.db')
    c = conn.cursor()
    c.execute('''SELECT location FROM area''')
    result = c.fetchall()
    for i in result:
        search_list.append(i[0])
    c.execute('''SELECT location,building FROM communities''')
    all_community = c.fetchall()
    for i in all_community:
        search_list.append(",".join([i[1],i[0]]))
    args = request.args.to_dict(flat=False)
    if len(args.keys()) == 1 and "keyword" in args.keys(): 
        a = request.args.get("keyword").split(',')
        if a[0] == '':
            conn = sqlite3.connect('properties.db')
            queryRes = []
            c = conn.cursor()
            c.row_factory = sqlite3.Row
            c.execute('''SELECT rowid,* FROM area''')
            result = c.fetchall()
            c = 0
            for r in result:
                newdict = dict(r)
                queryRes.append((r["location"],r["header"],r["description"],r["thumbnail"]))
            return render_template("communities.html", x = queryRes)
        conn = sqlite3.connect('properties.db')
        c = conn.cursor()
        if len(a) == 1:
            c.execute('''SELECT * FROM area WHERE location         print("Wassup")== ?''',['{}'.format(a[0])])
            result = c.fetchone()
            images = result[2].split(',')
            c.execute('''SELECT * FROM communities WHERE location == ?''',['{}'.format(a[0])])
            all_community = c.fetchall()
            d = defaultdict(list)
            for i in all_community:
                d[i[13]].append(i)
            return render_template("location.html", result=result, images = images, all_community = all_community, sub_community = d)
        else:
            c.execute('''SELECT * FROM communities WHERE building == ?''',['{}'.format(a[0])])
            result = c.fetchone()
            images = result[3].replace("%20"," ").split(',')
            #images.reverse()
            thumbnail = result[2].replace("'","\\'")
            all_community = c.fetchone()
            floorplans = []
            for i in reversed(result[4].split(",")):
                name = i.split('/')[-1].split('.')[0].replace("_"," ")
                link = i
                link2 = i.replace("'","\\'")
                floorplans.append((name,link,link2))
                if result[6] == "aldar":
                    dev_img = "/static/projects/aldar.png"
                elif result[6] == "none":
                    dev_img = "/static/images/standalone2.png"
                elif result[6] == "imkan":
                    dev_img = "/static/images/imkan.png"
                elif result[6] == "mag properties":
                    dev_img = "/static/images/mag.png"
                elif result[6] == "badie-group":
                    dev_img = "/static/images/badie.png"
                elif result[6] == "eni":
                    dev_img = "/static/images/ENI.png"
                elif result[6] == "hydra":
                    dev_img = "/static/images/hydra.png"
                elif result[6] == "damac":
                    dev_img = "/static/images/damac.jpg"
                elif result[6] == "ADCP":
                    dev_img = "/static/images/adcp.jpg"
                else: 
                    dev_img = "/static/images/standalone2.png"
            return render_template("sub_location.html", thumbnail = thumbnail ,result=result, images = images, all_community = all_community, dev_img=dev_img, floorplans = floorplans)
    else:
        keywords = ["property","Abu Dhabi"]
        title = "properties "
        description = "All Properties in Abu Dhabi. Search for a wide range of Properties for {} in Abu Dhabi and send enquiries to contact with agent."
        url = "www.uhpae.com/search?"
        args_rec = ''
        first = True
        second = True
        keyword_exists = False
        for key, value in args.items():
            if second == False:
                if value[0] != "0" and value[0]!="": 
                    args_rec += ' AND '
            if first:
                args_rec += ' WHERE '
                first = False    
                second = False
            if key == "keyword":
                if value[0] != "":
                    keyword_exists = True
                    args_rec += 'properties MATCH '+'"'+value[0].split(',')[0]+'"'
                    title += " in "+value[0]
                    keywords.append(value[0].split(',')[0])
                    url += key+"="+value[0].split(',')[0]
                    if len(value[0].split(',')) == 2:
                        keywords.append(value[0].split(',')[1])
            else:
                if key == "units":
                    args_rec += (key+'='+'"'+value[0]+'"')
                    title += " to " + value[0]
                    if keyword_exists:
                        url += "&"
                        url += key+"="+value[0]
                    else:
                        keyword_exists = True
                        url += key+"="+value[0]
                    description = description.format(value[0])
                    keywords.append(value[0])
                if key == "type":
                    args_rec += (key+'='+'"'+value[0]+'"')
                    title = value[0] +" "+ title
                    if keyword_exists:
                        url += "&"
                        url += key+"="+value[0]
                    else:
                        keyword_exists = True
                        url += key+"="+value[0]
                    keywords.append(value[0])
                if key == "beds":
                    if value[0] != "0": 
                        args_rec += (key+'='+'"'+value[0]+'"')
                        title += " for " + value[0] +" bedroom"
                        if keyword_exists:
                            url += "&"
                            url += key+"="+value[0]
                        else:
                            keyword_exists = True
                            url += key+"="+value[0]
                        keywords.append(value[0]+ " bedroom")
                if key == "minprice":
                    if value[0] != "":
                        args_rec += (key[3:]+'>'+'"'+str(value[0])+'"')
                if key == "maxprice":
                    if value[0] != "":
                        args_rec += (key[3:]+'<'+'"'+str(value[0])+'"')
        if "Sale" not in keywords and "Rent" not in keywords:
            keywords.append("Sale")
            keywords.append("Rent")
            description = description.format("Sale or Rent")
        conn = sqlite3.connect('main2.db')
        c = conn.cursor()
        c.row_factory = sqlite3.Row 
        try:
            c.execute('SELECT rowid, * FROM properties'+args_rec+';')
        except:
            c.execute('SELECT rowid, * FROM properties'+ " WHERE "+args_rec[11:]+';')
        result = c.fetchall()
        a=[]
        for r in result:
            newdict = dict(r)
            newdict['price'] = "{:,}".format(int(newdict['price']))
            a.append(newdict)
        conn.close()
        page = 1
        limit = 20
        startIndex = (page - 1) * limit
        endIndex = page * limit
        start_page = "-"
        end_page = "-"
        if startIndex > 0:
            start_page = page - 1    
        if endIndex < len(a):
            end_page = page + 1
        a = a[startIndex:endIndex]
        return render_template("search.html",queryRes=a, start_page = start_page, end_page = end_page, meta = [",".join(keywords),title,description], url = url,pl = [], search_args = args, args = " | ", search_list = search_list)



@app.route("/livesearch", methods=["POST", "GET"]) 
def livesearch():
    if request.method == "POST":
        srch = []
        args = {}
        if 'property' in request.form:
            if request.form['property'] != '':
                conn = sqlite3.connect('main2.db')
                c = conn.cursor()
                c.row_factory = sqlite3.Row  
                c.execute('SELECT rowid, * FROM properties WHERE area MATCH ?',['{}'.format(request.form['property'])])
                props = c.fetchall()
                a=[]
                for r in props:
                    newdict = dict(r)
                    newdict['price'] = "{:,}".format(int(newdict['price']))
                    a.append(newdict)
                conn.close()
                page = int(request.form['page'])
                limit = 20
                startIndex = (page - 1) * limit
                endIndex = page * limit
                start_page = "-"
                end_page = "-"
                if startIndex > 0:
                    start_page = page - 1    
                if endIndex < len(a):
                    end_page = page + 1    
                a = a[startIndex:endIndex]
                return jsonify(queryres=a,end_page=end_page,start_page=start_page)

        if 'buildingname' in request.form:
            if request.form['buildingname'] != '':            
                conn = sqlite3.connect('main2.db')
                c = conn.cursor()
                c.row_factory = sqlite3.Row  
                c.execute("SELECT rowid, * FROM properties WHERE property MATCH ?",["{}".format(request.form["buildingname"].replace("&#39;","'"))])
                props = c.fetchall()
                a=[]
                for r in props:
                    newdict = dict(r)
                    newdict['price'] = "{:,}".format(int(newdict['price']))
                    a.append(newdict)
                conn.close()
                page = int(request.form['page'])
                limit = 20
                startIndex = (page - 1) * limit
                endIndex = page * limit
                start_page = "-"
                end_page = "-"
                if startIndex > 0:
                    start_page = page - 1    
                if endIndex < len(a):
                    end_page = page + 1    
                a = a[startIndex:endIndex]
                return jsonify(queryres=a,end_page=end_page,start_page=start_page)
        

        if request.form['units'] != '':
            args["units"] = [request.form['units']]
        if request.form['keyword'] != '':
            args["keyword"] = [request.form['keyword']]
        if request.form['propertytype'] != '':
            args["type"] = [request.form['propertytype']]
        if request.form['beds'] != '':
            args["beds"] = [request.form['beds']]
        minprice = [request.form['minprice']]
        maxprice = [request.form['maxprice']]
        args_rec = ''
        first = True
        second = True
        for key, value in args.items():
            if second == False:
                args_rec += ' AND '
            if first:
                args_rec += ' WHERE '
                first = False    
                second = False
            if key == "keyword":
                if value[0] != "":
                    args_rec += 'properties MATCH '+'"'+value[0].split(',')[0]+'"'
            else:
                args_rec += (key+'='+'"'+value[0]+'"')

        conn = sqlite3.connect('main2.db')
        c = conn.cursor()
        c.row_factory = sqlite3.Row  
        try:
            c.execute('SELECT rowid, * FROM properties'+ args_rec+';')
        except:
            c.execute('SELECT rowid, * FROM properties'+ " WHERE "+args_rec[11:]+';')
        result = c.fetchall()
        a=[]
        for r in result:
            newdict = dict(r)
            if minprice[0] != '' and maxprice[0] != '':
                if int(newdict['price']) > int(minprice[0]) and int(newdict['price']) < int(maxprice[0]):
                    newdict['price'] = "{:,}".format(int(newdict['price']))
                    a.append(newdict)
            elif maxprice[0] != "" and minprice[0] == '':
                if int(newdict['price']) < int(maxprice[0]):
                    newdict['price'] = "{:,}".format(int(newdict['price']))
                    a.append(newdict)
            elif maxprice[0] == "" and minprice[0] != '':
                if int(newdict['price']) > int(minprice[0]):
                    newdict['price'] = "{:,}".format(int(newdict['price']))
                    a.append(newdict)
            else:
                newdict['price'] = "{:,}".format(int(newdict['price']))
                a.append(newdict)
        conn.close()
        page = int(request.form['page'])
        limit = 20
        startIndex = (page - 1) * limit
        endIndex = page * limit
        start_page = "-"
        end_page = "-"
        if startIndex > 0:
            start_page = page - 1    
        if endIndex < len(a):
            end_page = page + 1    
        a = a[startIndex:endIndex]
        return jsonify(queryres=a,end_page=end_page,start_page=start_page)


@app.route('/communities')
def communities():   
    conn = sqlite3.connect('properties.db')
    queryRes = []
    c = conn.cursor()
    c.row_factory = sqlite3.Row
    c.execute('''SELECT rowid,* FROM area''')
    result = c.fetchall()
    c = 0
    for r in result:
        newdict = dict(r)
        queryRes.append((r["location"],r["header"],r["description"],r["thumbnail"]))
    return render_template("communities.html", x = queryRes)

@app.route('/ar/communities')
def communitiesar():   
    return render_template("communities_ar.html")

@app.route('/services/<servicetype>')
def services(servicetype):
    if servicetype == "property-sales":
        heading = 'Property Sales'
        content = 'The sales team at UHP acts as an advocate for property buyers, by advising property buyers on market conditions, prices, mortgages, legal requirements and related matters as they compare similar properties to determine its competitive market price, and will develop content for sales presentations or other materials to help the client take an informed decision. The team also acts as an intermediary in negotiations between buyers and sellers in coordination with the property listing team. After narrowing the options that suit the client, our sales team accompanies buyers during visits and inspections of property, advising them on the suitability and value of the homes they are visiting. They also evaluate mortgage options to help clients obtain financing at the best prevailing rates and terms in case mortgage is needed. Once the decision is taken, our team will present purchase offers to sellers for consideration, and negotiate prices or other sales terms, prepare documents such as contracts, and purchase agreements.'
        image = 'salesservice.png'
    if servicetype == "property-leasing":
        heading = 'Property Leasing'
        content = 'Our property leasing is the connection with clients on behalf of landloards, they make sure to exceed the clients expectations at all times. They offer multiple options within property owner and property tenant’s criteria to guarantee an effective relationship for both parties. While ensuring that the necessary paperwork is accurate, up to date property details, and client contact details is available and clear to save time while submitting the needed documents, and to guarantee the clients needs are met with zero discrepancy in terms of legal and monetary aspects of the contract.'
        image = 'servicesales.jpg'
    if servicetype == "property-listing":
        heading = 'Property Listing'
        content = 'UHP Listing team is the artery for the sales and leasing teams, as they act as advocates for landlords and property owners by considering a high level of confidentiality, while getting maximum exposure for their property using the most advanced technologies form CRM our free web portals to paid portals.The team is aligned with the overall strategy, so its very important to work cross functionally with other teams such as Sales, Leasing, and Marketing to arrange Photo shooting sessions for the properties, liaise with landlords for viewings, and virtual tours for the property.'
        image = 'listingsales.jpg'
    if servicetype == "property-marketing":
        heading = 'Property Marketing'
        content = 'Because we understand the importance of marketing, we at UHP made sure to have an in-house marketing team to have the advantage of speed and quality. Consisting of Social Media, Digital Marketing, free and paid real estate portals, events such as road shows and open houses, Photography & Videography, Printed materials, E-mail & SMS campaigns, Signage and bill-boards to branding and identity concept creation and execution, we hired an expert in each field to handle the rising demands and changing need of our clients and fluctuated market. By continuously conducting multi-dimension analysis for market variables, the marketing team provides deep market insights to assists the other teams as well as our clients to take informed decisions, and to anticipate the fluctuation in the market in all levels'
        image = 'marketingsales.jpg'
    if servicetype == "property-management":
        heading = 'Property Managemnet'
        content = 'Advertising the property, handle tenant inquiries, screen applicants, select suitable candidates, draw up a lease agreement, conduct a move in inspection, move the tenants into the property and collect rental income. And then coordinate any maintenance issues; supply the owner with financial statements can be overwhelming especially with many different options in market. The need of real estate to be cared for and monitored, with accountability for and attention its useful life and condition considered from operation, control, maintenance, and oversight of real estate and physical property. This can include residential, commercial, and land real estate are also aspects our specialized team is willing to take care of.'
        image = 'leasingsales.jpg'
    if servicetype == "property-advisory":
        heading = 'Facilitation and Advisory'
        content = 'Over years UHP managed to build and sustain strong partnerships with the many financial providers in the UAE, through the wide network we managed to provide customized financial solutions to our clients after analyzing their financial capacity. This allows us to guide clients to the best provider, best rates, and best solution for their specific case.'
        image = 'managementsales.png'
    if servicetype == "property-fitout":
        heading = 'Fit-Out Service'
        content = 'We have gathered a team of creative, technical, and commercial talents to ensure your property wither it’s an office or residential fit outs are delivered on time, within budget, and to your expectations. A dedicated project team will assess your internal or external space and develop a plan that works for your property, our team will manage the cost, and speed of delivery to ensure you receive the most costeffective fit out solution. Our fit out contractors and consultants will provide you with the best fit out proposal including interior and exterior design, walls, plastering, electrical, flooring, decoration, lighting, mechanical installations, furnishings and or any other improvements made to the property'
        image = 'managementsales.png'
    return render_template("servicepage.html", heading = heading, content = content, image = image)

@app.route('/aldar/projects/<status>')
def aldar(status):
    conn = sqlite3.connect('properties.db')
    c = conn.cursor()
    c.execute('''SELECT * FROM communities WHERE developer == "aldar"''')
    all_community = c.fetchall()
    d = defaultdict(list)
    thumbnail = ""
    for i in all_community:
        if status == "offplan":
            if "Offplan" in i[12]:  
                d[i[13]].append(i)
                thumbnail = i[2]
        if status == "ready":
            if "Ready" in i[12]:  
                d[i[13]].append(i)
                thumbnail = i[2]
    return render_template("aldar.html", all_community = all_community, sub_community = d, status = status, thumbnail=thumbnail)


@app.route('/emaar/projects/<status>')
def emaar(status):
    conn = sqlite3.connect('properties.db')
    c = conn.cursor()
    c.execute('''SELECT * FROM communities WHERE developer == "emaar"''')
    all_community = c.fetchall()
    d = defaultdict(list)
    try:
        thumbnail = all_community[0][2]
    except:
        thumbnail = ""
    for i in all_community:
        if status == "offplan":
            if "Offplan" in i[12]:  
                d[i[13]].append(i)
                thumbnail = i[2]
        if status == "ready":
            if "Ready" in i[12]:  
                d[i[13]].append(i)
                thumbnail = i[2]
    return render_template("emaar.html", all_community = all_community, sub_community = d, status = status, thumbnail=thumbnail)

@app.route('/bloom/projects/<status>')
def bloom(status):
    conn = sqlite3.connect('properties.db')
    c = conn.cursor()
    c.execute('''SELECT * FROM communities WHERE developer == "bloom"''')
    all_community = c.fetchall()
    d = defaultdict(list)
    try:
        thumbnail = all_community[0][2]
    except:
        thumbnail = ""
    for i in all_community:
        if status == "offplan":
            if "Offplan" in i[12]:  
                d[i[13]].append(i)
                thumbnail = i[2]
        if status == "ready":
            if "Ready" in i[12]:  
                d[i[13]].append(i)
                thumbnail = i[2]
    return render_template("bloom.html", all_community = all_community, sub_community = d, status = status, thumbnail=thumbnail)


@app.route('/imkan/projects/<status>')
def imkan(status):
    conn = sqlite3.connect('properties.db')
    c = conn.cursor()
    c.execute('''SELECT * FROM communities WHERE developer == "imkan"''')
    all_community = c.fetchall()
    d = defaultdict(list)
    try:
        thumbnail = all_community[0][2]
    except:
        thumbnail = ""
    for i in all_community:
        if status == "offplan":
            if "Offplan" in i[12]:  
                d[i[13]].append(i)
                thumbnail = i[2]
        if status == "ready":
            if "Ready" in i[12]:  
                d[i[13]].append(i)
                thumbnail = i[2]
    return render_template("imkan.html", all_community = all_community, sub_community = d, status = status, thumbnail=thumbnail)


@app.route('/googleverification/')
def googleverfication():
    return render_template("googlef7ae2afa38ca93ff.html")

def get_community(name, project):
    sale = []
    rent = []
    conn = sqlite3.connect('main.db')
    c = conn.cursor()
    c.row_factory = sqlite3.Row
    c.execute('''SELECT rowid,* FROM properties WHERE property MATCH ? AND units="buy" ''',['{}'.format(project)])
    result = c.fetchall()
    for r in result:
        sale.append(dict(r))
    c.execute('''SELECT rowid,* FROM properties WHERE property MATCH ? AND units="rent" ''',['{}'.format(project)])
    result = c.fetchall()
    for r in result:
        rent.append(dict(r))
    conn.commit()
    conn.close()
    conn = sqlite3.connect('communities.db')
    c = conn.cursor()
    c.execute('''SELECT * FROM communities where community_name = ? ''',['{}'.format(name)])
    result = c.fetchone()
    url = result[12]
    overview = result[1]
    details = [result[2],result[3],result[4]]
    amenities = str(result[5]).split(',')
    floorplans = str(result[6]).split(',')
    floorplans_1 = []
    floorplans_2 = []
    floorplans_3 = []
    floorplans_4 = []
    floorplans_all = str(result[13]).split(',')
    for i in floorplans_all:
        if "1bed" in i:
            floorplans_1.append(i)
        elif "2bed" in i:
            floorplans_2.append(i)
        elif "3bed" in i:
            floorplans_3.append(i)
        elif "4bed" in i:
            floorplans_4.append(i)

    images = []
    for i in range(9):
        images.append(result[7]+str(i+1)+'.jpg')
    schools = str(result[8]).split(',')
    hospitals = str(result[9]).split(',')
    landmarks = str(result[10]).split(',')
    maparea = result[11]
    conn.close()
    commlist = [url,overview,details,amenities,images,schools,hospitals,landmarks,maparea,floorplans,floorplans_1,floorplans_2,floorplans_3,floorplans_4,sale,rent]
    return commlist




@app.route('/communities/<community>/<project>')
def project(community, project):
    print("Wassup")
    suggested_communities = ['Al-Reem-Island', 'Hydra-Village','Al-Reef-Villas', 'Al-Ghadeer', 'Yas-Island','Saadiyat-Island', 'Al-Raha-Gardens', 'Al-Raha-Golf-Gardens', 'Al-Reef', 'Al-Raha-Beach']
    with open("virtual_tour.json", "r") as x:
            data = json.load(x)
            try:
                vt = data[project]
            except:
                vt = ""
            x.close()
    



    if project == "Mamsha-Al-Saadiyat" and community=="Saadiyat-Island":   
        getcomm = get_community('Mamsha-Al-Saadiyat','mamsha')
        return render_template("project.html", url=getcomm[0], overview=getcomm[1],details=getcomm[2], amenities=getcomm[3], images=getcomm[4],schools=getcomm[5],hospitals=getcomm[6],landmarks=getcomm[7],maparea=getcomm[8],floorplans=getcomm[9],floorplans_1 =getcomm[10],floorplans_2 =getcomm[11],floorplans_3 =getcomm[12],floorplans_4=getcomm[13],sale=getcomm[14],rent=getcomm[15], community = "saadiyat",folder = "mamsha",vt = vt)

    if project == "Water'S-Edge" and community=="Yas-Island":
        getcomm = get_community('Water ’s Edge','Water\'S Edge')
        return render_template("project.html", url=getcomm[0], overview=getcomm[1],details=getcomm[2], amenities=getcomm[3], images=getcomm[4],schools=getcomm[5],hospitals=getcomm[6],landmarks=getcomm[7],maparea=getcomm[8],floorplans=getcomm[9],floorplans_1 =getcomm[10],floorplans_2 =getcomm[11],floorplans_3 =getcomm[12],floorplans_4=getcomm[13],sale=getcomm[14],rent=getcomm[15], community="yas",folder = "watersedge",vt = vt)

    if project == "Al-Ghadeer-Community" and community=="Al-Ghadeer":
        getcomm = get_community('Al Ghadeer','ghadeer')
        return render_template("project.html",  url=getcomm[0], overview=getcomm[1],details=getcomm[2], amenities=getcomm[3], images=getcomm[4],schools=getcomm[5],hospitals=getcomm[6],landmarks=getcomm[7],maparea=getcomm[8],floorplans=getcomm[9],floorplans_1 =getcomm[10],floorplans_2 =getcomm[11],floorplans_3 =getcomm[12],floorplans_4=getcomm[13],sale=getcomm[14],rent=getcomm[15], community="ghadeer",folder = "ghadeer",vt = vt)

    if project == "Nudra" and community=="Saadiyat-Island":
        getcomm = get_community('Nudra','nudra')
        return render_template("project.html",  url=getcomm[0], overview=getcomm[1],details=getcomm[2], amenities=getcomm[3], images=getcomm[4],schools=getcomm[5],hospitals=getcomm[6],landmarks=getcomm[7],maparea=getcomm[8],floorplans=getcomm[9],floorplans_1 =getcomm[10],floorplans_2 =getcomm[11],floorplans_3 =getcomm[12],floorplans_4=getcomm[13],sale=getcomm[14],rent=getcomm[15], community = "saadiyat",folder = "nudra",vt = vt)

    else:
        project = project.replace('-', " ")
        sale = []
        rent = []
        conn = sqlite3.connect('main.db')
        c = conn.cursor()
        c.row_factory = sqlite3.Row
        c.execute('''SELECT rowid,* FROM properties WHERE property MATCH ? AND units="buy" ''',['{}'.format(project)])
        result = c.fetchall()
        for r in result:
            sale.append(dict(r))
        c.execute('''SELECT rowid,* FROM properties WHERE property MATCH ? AND units="rent" ''',['{}'.format(project)])
        result = c.fetchall()
        for r in result:
            rent.append(dict(r))
        c.execute('''SELECT * FROM communities where property = ? ''',['{}'.format(project)])
        result = c.fetchone()
        print(result)
        details = ['Abu Dhabi',community,project]
        amenities = []
        
        images = result[3].split(',')
 
        conn.close()
        
        

        with open("test.json", "r") as f:
            data = json.load(f)
            schools = []
            clinic = []
            restaurant = []
            location = ""
            for item in data:
                if item['property'] == project:
                    name = item['property']
                    location = item['location']
                    restaurant = item['restaurant']
                    restaurant = [idx for idx in restaurant if not re.findall("[^\u0000-\u05C0\u2100-\u214F]+", idx)]
                    schools = item['schools']
                    schools = [idx for idx in schools if not re.findall("[^\u0000-\u05C0\u2100-\u214F]+", idx)] 
                    clinic = item['clinic']
                    clinic = [idx for idx in clinic if not re.findall("[^\u0000-\u05C0\u2100-\u214F]+", idx)]
                    f.close()
        
        with open(r"floorplans.json", "r") as read_file:
            data = json.load(read_file)
        
        if community in data:
            floorplans=data[community]['floorplans']
            floorplans_1 =data[community]['floorplans_1']
            floorplans_2 =data[community]['floorplans_2']
            floorplans_3 =data[community]['floorplans_3']
            floorplans_4=data[community]['floorplans_4']
        elif project in data:
            floorplans=data[project]['floorplans']
            floorplans_1 =data[project]['floorplans_1']
            floorplans_2 =data[project]['floorplans_2']
            floorplans_3 =data[project]['floorplans_3']
            floorplans_4=data[project]['floorplans_4']

        else:
            floorplans=""
            floorplans_1 =""
            floorplans_2 =""
            floorplans_3 =""
            floorplans_4=""
        
        overview = result[2]
        r_all = len(result[2])
        r_half = r_all/2
        overview = overview[0:int(r_half)] + "<span id='dots'>...</span><span id='more'>" + overview[int(r_half):int(r_all)] + "</span>"

        try:
            return render_template("project.html",x= suggested_communities,  url=name, overview=overview,details=details, amenities=amenities, images=images,schools=schools,hospitals=clinic,landmarks=restaurant,maparea=location,floorplans=floorplans,floorplans_1 =floorplans_1,floorplans_2 =floorplans_2,floorplans_3 =floorplans_3,floorplans_4=floorplans_4,sale=sale,rent=rent, community = community,folder = project, vt = vt)
        except: 
            try:
                return render_template("project.html",x= suggested_communities,  url=project, overview=overview,details=details, amenities=amenities, images=images,schools=schools,hospitals=clinic,landmarks=restaurant,maparea=location,floorplans=floorplans,floorplans_1 =floorplans_1,floorplans_2 =floorplans_2,floorplans_3 =floorplans_3,floorplans_4=floorplans_4,sale=sale,rent=rent, community = community,folder = project ,vt = vt)  
            except:
                return render_template("404.html")







@app.route('/ar/communities/<community>/<project>')
def project_ar(community, project):
    if project == "Mamsha-Al-Saadiyat" and community=="Saadiyat-Island":
        url = "ممشى السعديات"
        overview = "ممشى السعديات أبوظبي هو مشروع حصري تقدمه شركة الدار العقارية على شاطئ البحر يتألف من شقق فاخرة وبنتهاوس وتاون هاوس مع إطلالات خلابة على البحر. يقع مشروع ممشى السعديات في منطقة السعديات الثقافية، ويتميز بشاطئ رملي أبيض نقي بطول 1.4 كيلومتر وستحتوي على العديد من منافذ البيع بالتجزئة المطاعم والمشروبات. ممشى السعديات هو مشروع جديد تمامًا سيضم 461 عقارًا سكنيًا مع مجموعة متنوعة من المرافق عالية الجودة بما في ذلك صالات الألعاب الرياضية وحمامات السباحة والحدائق ذات المناظر الطبيعية وممشى الشاطئ وملاعب الأطفال ومسارات المشي وركوب الدراجات. يقدم ممشى السعديات مجموعة من الشقق من غرفة نوم واحدة إلى 4 غرف نوم، بالإضافة إلى عدد محدود من وحدات البنتهاوس والتاون هاوس. يقع المشروع في رئيسي على شاطئ البحر في منطقة السعديات الثقافية، على مسافة قريبة من متحف اللوفر أبوظبي ومتحف زايد الوطني وغوغنهايم أبوظبي، وهو أسلوب حياة مستوحى من فن المنطقة الثقافية وسحر ساحل السعديات.تتدفق الإطلالات اللامتناهية على المياه الزرقاء إلى كل منزل على شاطئ البحر من خلال نوافذ ممتدة من الأرض حتى السقف. ضربة فرشاة ذات لون لامع؛ يتماشى مع الهندسة المعمارية الحديثة الأنيقة والرمال البيضاء. ممشى السعديات هو عنوان حصري في قلب المنطقة الثقافية الجديدة في العالم. كنز دفين من الفن والثقافة المحلية والإقليمية والدولية ترحب بهواة الجمع والخبراء والهواة على حد سواء. المنطقة هي موطن لمتحف اللوفر أبو ظبي الذي صممه المهندس المعماري جان نوفيل، وغوغنهايم أبو ظبي بواسطة فرانك جيري ومتحف زايد الوطني للورد نورمان فوستر. متاحف مشهورة عالميًا صممها مهندسون معماريون حائزون على جائزة بريتزكر والذين نجحوا في تحويل الأفق إلى تحفة فنية خاصة بهم. ستستفيد جميع المساكن من حمامات السباحة الخاصة وصالات الألعاب الرياضية الحديثة ومجموعة متنوعة من مرافق المأكولات والمشروبات ومرافق البيع بالتجزئة. على طول الجزء الأمامي من المشروع ، يوجد ممشى مع مسارات للمشي وركوب الدراجات، فضلاً عن الوصول المباشر إلى الشاطئ."
        details = ["1334 - 16630 قدم مربع |","AED 2.3 Million |"," 1-5 غرف نوم"]
        amenities = ['Gym' ,'Walking and cycling paths',  'Swimming pools' ,'Landscape gardens', 'Beach promenade' ,'Children playgrounds' ,'Mosque','Parking' ,'Beach Access','Restaurants' ,'Schools & Universities','Shopping Malls']
        sale = []
        rent = []
        conn = sqlite3.connect('main.db')
        c = conn.cursor()
        c.row_factory = sqlite3.Row
        c.execute('''SELECT rowid,* FROM properties WHERE property MATCH ? AND units="buy" ''',['{}'.format('mamsha')])
        result = c.fetchall()
        for r in result:
            sale.append(dict(r))
        c.execute('''SELECT rowid,* FROM properties WHERE property MATCH ? AND units="rent" ''',['{}'.format('mamsha')])
        result = c.fetchall()
        for r in result:
            rent.append(dict(r))
        conn.commit()
        conn.close()
        path="../../../static/projects/mamsha/"
        images = []
        floorplans_1 = [path+'1bed.jpg', path+'1bed_extra.jpg']
        floorplans_2 = [path+'2bed.jpg']
        floorplans_3 = [path+'3bed.jpg']
        floorplans_4 = [path+'4bed.jpg']
        floorplans = [path+'1bed.jpg', path+'2bed.jpg',path+'3bed.jpg',path+'4bed.jpg']
        for i in range(8):
            images.append(path+str(i+1)+'.jpg')
       
        schools = ['مدرسة كرانلي أبو ظبي',	'Mosaic Nursery', 'Repton School Abu Dhabi'	]
        hospitals = ['Burjeel Day Surgery Center']
        landmarks = ['Saadiyat Public Beach', 'Saadiyat Rotana Resort & Villas' ,'Four Seasons Hotel Abu Dhabi' ,'Saadiyat Public Beach','Buddha-Bar Beach']
        maparea='<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3629.4685290282646!2d54.4081016!3d24.5384662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67d77059d465%3A0xf14feb90c98942eb!2sMamsha-Al-Saadiyat!5e0!3m2!1sen!2sae!4v1610538375149!5m2!1sen!2sae" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        return render_template("project_ar.html", url=url, overview=overview,details=details, amenities=amenities, sale=sale,rent=rent,images=images,schools=schools,landmarks=landmarks,hospitals=hospitals,maparea=maparea, community = "saadiyat",floorplans_2 =floorplans_2,floorplans_1 =floorplans_1,floorplans_3 =floorplans_3,floorplans_4=floorplans_4)

    if project == "Water'S-Edge" and community=="Yas-Island":
        url = "وترز أج"
        overview = "ووترز إدج هو مجتمع سكني جديد ، تم تطويره من قبل الدار العقارية ويقع في قلب جزيرة ياس أبوظبي، بالقرب من المرافق العالمية مثل حلبة مرسى ياس، وعالم فيراري، وياس ووتر وورلد، وياس مول. يقع ووترز إدج في مكان مثالي على قناته الخاصة وعلى كورنيش وشاطئ بطول 800 متر في قلب جزيرة ياس. تتراوح الوحدات بين الاستوديوهات الحديثة إلى الشقق الفسيحة المكونة من ثلاث غرف نوم، ليوفر لك كل منزل أفضل ما في جزيرة ياس بأسعار معقولة، مع إطلالات جميلة على القناة المائية.وستشتمل الوجهة على حدائق ذات مناظر طبيعية وصالات رياضية مجهزة بالكامل وحمامات سباحة ومضمار للركض على القناة. يمكن للمقيمين أيضًا الاستمتاع بممشى على الواجهة البحرية تصطف على جانبيه المقاهي والمطاعم والمتاجر. في ووترز إدج، يتحرك كل شيء وفقًا لسرعتك الخاصة. لذلك بالنسبة لأولئك الذين يستمتعون بالحركة، فإن مسارات الركض وركوب الدراجات والملاعب الرياضية وحمامات السباحة مثالية لتنشيطك. بينما يجلب كورنيش الواجهة البحرية إحساساً مريحًا يتوسط ​​ مجموعة أنيقة من المتاجر والمطاعم. انتقل إلى إيقاعك ؛ بين اندفاع مرسى ياس ونبض الكورنيش. يقع ووترز إدج في مكان مثالي على قناته الخاصة وعلى كورنيش 800 متر في قلب جزيرة ياس."
        details = ["452 – 1,603 قدم مربع|"," AED 526,000 |","  استوديوهات - 3 غرف"]
        amenities = ['Terrace / Balconies',	'Family oriented community','Underground parking' ,'Private Pool','Jogging & cycling tracks','Waterfront boardwalk','Landscapes & gardens',	'Fully equipped gyms','Multi-purpose sport courts','Restaurant','shops','Community center & mosque',' 24h maintenance','24h Security']
        sale = []
        rent = []
        conn = sqlite3.connect('main.db')
        c = conn.cursor()
        c.row_factory = sqlite3.Row
        c.execute('''SELECT rowid,* FROM properties WHERE property MATCH ? AND units="buy" ''',['{}'.format('Water\'S Edge')])
        result = c.fetchall()
        for r in result:
            sale.append(dict(r))
        c.execute('''SELECT rowid,* FROM properties WHERE property MATCH ? AND units="rent" ''',['{}'.format('Water\'S Edge')])
        result = c.fetchall()
        for r in result:
            rent.append(dict(r))
        conn.commit()
        conn.close()
        path="../../../static/projects/watersedge/"
        floorplans_1 = [path+'1bed.jpg']
        floorplans_2 = [path+'2bed.jpg']
        floorplans_3 = [path+'3bed.jpg']
        floorplans = [path+'1bed.jpg', path+'2bed.jpg',path+'3bed.jpg',path+'studio.jpg']
        images = []
        for i in range(10):
            images.append(path+str(i+1)+'.jpg')
        floorplans = [path+'1bed.jpg', path+'2bed.jpg',path+'3bed.jpg',path+'studio.jpg']
        schools = ['Carleigh School','NYU & Sorbonne Universities'	]
        hospitals = ['Burjeel Medical Centre']
        landmarks = ['Yas Mall', 'Ferrari world	' ,'Four Seasons Hotel Abu Dhabi' ,'Warner Bro’s Abu Dhabi','Yas Water world']
        maparea='<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29054.084956272778!2d54.6201699!3d24.4590892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b77ae6474634b16!2sWater&#39;s-Edge!5e0!3m2!1sen!2sae!4v1610545047926!5m2!1sen!2sae" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        return render_template("project_ar.html", url=url, overview=overview,details=details, amenities=amenities, sale=sale,rent=rent,images=images,schools=schools,landmarks=landmarks,hospitals=hospitals,maparea=maparea,floorplans=floorplans, floorplans_2 =floorplans_2,floorplans_1 =floorplans_1,floorplans_3 =floorplans_3, community="yas")

    if project == "Al-Ghadeer-Community" and community=="Al-Ghadeer":
        url = "الغدير"
        overview = 'يتكون المخطط الرئيسي في الغدير من 14408 وحدة، بما في ذلك الفلل والتاون هاوس. ومن المقرر أن يتجاوز إجمالي المساحة الإجمالية السكنية 1.3 مليون متر مربع وسيُستكمل بمساحات مكتبية ومساحات للبيع بالتجزئة والضيافة والتعليم والمرافق المجتمعية. يقع "هارفست" في قلب الغدير، وهو عبارة عن مساحة زراعية متعددة الاستخدامات، بالإضافة إلى "ذا هاب"- منفذ المأكولات والمشروبات و "ذا ستوديو" منطقة تعليمية للتدريب وورش العمل، "ذا شيد" منطقة مخصصة لشراء الأدوات والمستلزمات الزراعية ، و"السوق" منطقة بيع بالتجزئة للمنتجات المزروعة حديثًا، و"ذا فيلد" حيث يمكن للناس استئجار قطع الأراضي وزراعة منتجاتهم الخاصة.يقع مجتمع الغدير في أبو ظبي بالقرب من حدود دبي وعلى بعد دقائق من إكسبو 2020 دبي، وهو مجتمع مستدام يحتضن الطبيعة وأفضل مدينتين. مع بناء 2100 شقة وتاون هاوس وفيلا بالفعل، من المقرر تسليم 14000 شقة أخرى في أبريل 2021.وستكون الوجهة جذابة لأولئك الذين يفضلون المساحات المفتوحة الواسعة والمرافق الترفيهية الفريدة، كما تضم ​​بحيرات ومسارات للجري والدراجات وصالة ألعاب رياضية ومواقع للتخييم والشواء وشبكة من الحدائق والمتنزهات التي يمكن المشي فيها بالكامل مضاءة بأضواء تعمل بالطاقة الشمسية. يشمل مخطط الغدير الجديد أيضًا مدارس وفندقًا ومناطق حدائق عامة وحمامات سباحة مجتمعية ومناطق رياضية متعددة الاستخدامات ومراكز مجتمعية. ستبدأ الأسعار ضمن هذا الإصدار الأول من 290.000 درهم إماراتي للوحدات السكنية، و تاون هاوس من 899.900 درهم إماراتي. من المقرر أن يبدأ بناء هذا المرحلة الأولى في عام 2018 ويكتمل خلال عام 2021.'
        details = ["قدم مربع 398 - 2216 |"," AED 490,000 |","   استوديو - 3 غرف نوم ر"]
        amenities = ['Lakes & Water Features',	'Cycling Track Network','Central Spine Parks' ,'Gym','Landscapes & gardens','Balcony','Restaurant','shops',' 24h maintenance','24h Security']
        sale = []
        rent = []
        conn = sqlite3.connect('main.db')
        c = conn.cursor()
        c.row_factory = sqlite3.Row
        c.execute('''SELECT rowid,* FROM properties WHERE property MATCH ? AND units="buy" ''',['{}'.format('ghadeer')])
        result = c.fetchall()
        for r in result:
            sale.append(dict(r))
        c.execute('''SELECT rowid,* FROM properties WHERE property MATCH ? AND units="rent" ''',['{}'.format('ghadeer')])
        result = c.fetchall()
        for r in result:
            rent.append(dict(r))
        conn.commit()
        conn.close()
        path="../../../static/projects/ghadeer/"
        floorplans = [path+'2bed.jpg',path+'3bed.jpg']
        images = []
        floorplans_2 = [path+'2bed.jpg',path+'2-bed Maison.jpg']
        floorplans_3 = [path+'3bed.jpg',path+'3-bed Maison.jpg',path+'3-bed extra.jpg']
        floorplans = [path+'2bed.jpg',path+'3bed.jpg']
        for i in range(10):
            images.append(path+str(i+1)+'.jpg')
        schools = [	]
        hospitals = ['Al Ghadeer Pharmacy & Specialized Medical Centre']
        landmarks = ['Al Maktoum International Airport', 'Dubai Parks and Resorts' ,'Yas Island' ,'Technology Park','Legoland']
        maparea='<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3620.534769410858!2d55.0249799!3d24.8455788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f092044cc03bd%3A0x5a14553b147635d!2sAl-Ghadeer%20Community!5e0!3m2!1sen!2sae!4v1610546498867!5m2!1sen!2sae" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        return render_template("project_ar.html", url=url, overview=overview,details=details, amenities=amenities, sale=sale,rent=rent,images=images,schools=schools,landmarks=landmarks,hospitals=hospitals,maparea=maparea, community="ghadeer", floorplans=floorplans, floorplans_2 =floorplans_2,floorplans_3 =floorplans_3)


if __name__ == '__main__':
    app.run(debug=True)