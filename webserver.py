from flask import Flask, render_template, request, jsonify, url_for,redirect, send_file, make_response
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
cache = Cache(config={'CACHE_TYPE': 'simple'})

app = Flask(__name__)
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
@app.route('/sitemap.xml')
def site_map():
    response= make_response(render_template("sitemap.xml"))
    response.headers['Content-Type'] = 'application/xml'
    return response
    
@app.route('/sitemap.html')
def site_map_html():
    return render_template('sitemap.html')
@app.route('/landing')
def landingpage():
    return render_template('landingpage.html')
    
@app.route('/privacy-policy')
def privacypolicy():
    return render_template('privacypolicy.html')
@app.route('/download/<filename>')
def downloadreport (filename):
    file_ = filename
    a = os.getcwd()
    path = a+"/reports/"+file_
    return send_file(path, as_attachment=True)

@app.route('/newsletter')
def newsletter():
    return render_template('newsletter.html')

@app.route('/newsletter/Reports-and-Trends')
def campaign():
    return render_template('campaign.html')

@app.route('/newsletter/Aldar-Hounour-Awards')
def campaign2():
    return render_template('campaign2.html')



@app.route('/abu-dhabi/property-market-insights' , methods=["POST", "GET"])
def reports():
    if request.method == 'POST':
        x = request.form.get("x")
        conn = sqlite3.connect('main.db')
        c =   conn.cursor()
        c.execute('SELECT area FROM properties where type = "{}"'.format(x))
        new_l = []
        result = c.fetchall()
        for i in result:
            new_l.append(i[0])
        most_common_item = max(new_l, key = new_l.count)  
        count = new_l.count(max(new_l))
        return jsonify({ 'count': count, 'most_common_item': most_common_item})


    return render_template('reports.html')

@app.route('/ar/home')
def home_ar():
    return render_template('arabic.html')

@app.route('/hc')
def hc():
    return render_template("Home.html")
@app.route('/')
def home():
    return render_template("hc.html")

@app.route("/hotproperties", methods=["POST", "GET"]) 
def hotproperties():
    conn = sqlite3.connect('main.db')
    queryRes = []
    c = conn.cursor()
    c.row_factory = sqlite3.Row
    c.execute('''SELECT rowid,* FROM properties WHERE title MATCH ?''',['{}'.format('hot')])
    result = c.fetchall()
    for r in result:
        newdict = dict(r)
        newdict['price'] = "{:,}".format(newdict['price'])
        queryRes.append(newdict)
    conn.commit()
    conn.close()
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
    return render_template("team.html", total = '11')

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
    
    conn = sqlite3.connect('main.db')
    c = conn.cursor()
    string = ('SELECT description, image, title, location, beds, baths, size, ref_no, agent, agent_phone, agent_email, images, balcony, basement_parking, wardrobes, central_air_condition, central_heating, community_view, covered_parking, maids_room, satellite_or_cable, gymnasium, shared_pool, furnished, fitted_kitchen, maintainence, washing_room, property, type, price,units,area FROM properties WHERE ref_no=:ref_no')
    c.execute(string,{'ref_no':propertyid})
    result = c.fetchone()
    conn.commit()
    conn.close()
    loc = result[3].split(',')
    loc = loc[0]
    images = result[11]
    images = images.split(',')
    features = []
    temp = []
    for i in range(12,27):
        features.append(result[i])
    features[:] = [x for x in features if x]

    conn = sqlite3.connect('main.db')
    c = conn.cursor()
    string = ('SELECT description FROM dproperties WHERE ref_no=:ref_no')
    c.execute(string,{'ref_no':propertyid})
    desc = c.fetchone()
    p = int(result[29])
    price_range = [(p - (p*0.3)), (p + (p+0.3))]
    a = []
    c.row_factory = sqlite3.Row
    c.execute('SELECT rowid, * FROM properties WHERE beds=? AND units=? AND type=? AND price BETWEEN ? AND ?',(result[4], result[30],result[28], price_range[0], price_range[1]))
    suggest = c.fetchall()
    for r in suggest:
        newdict = dict(r)
        newdict['price'] = "{:,}".format(newdict['price'])
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
    overview = desc[0]
    overview = overview[0:int(r_half)] + "<span id='dots'>...</span><span id='more'>" + overview[int(r_half):int(r_all)] + "</span>"
    overview = overview.replace('<div class = "container">','')
    overview = overview.replace("</div></span>",'</span>')
    overview = overview.replace("h3",'p')
    return render_template("property.html",queryRes = suggestions, result = result, images = images, loc=loc, features = features, desc = overview, temp = temp, schools = schools, hospitals = hospitals, landmarks = landmarks, vt=vt)
    


@app.route('/developers')
def developer():
    return render_template("developers.html")


@app.route('/search', methods=["POST", "GET"])
def search():
    a = []
    args_rec = ''
    z = 0
    pl = []
    pl1 = []
    tp = 'You'
    if not request.args:
        conn = sqlite3.connect('main.db')
        c =   conn.cursor()
        c.row_factory = sqlite3.Row
        c.execute('SELECT rowid, * FROM properties')
        result = c.fetchall()
        for r in result:
            newdict = dict(r)
            newdict['price'] = "{:,}".format(newdict['price'])
            a.append(newdict)
        conn.close()
        return render_template("search.html", queryRes=a,meta = '', search='Properties in Abu Dhabi ', url = '')   
    
    for i in request.args:
        if i == 'price':
            y = [(0,50000),(50000,100000),(100000,200000),(200000,300000),(300000,400000),(400000,10000000)]
            z = int(request.args.get(i))
            p = y[z]
            if z == 0:
                args_rec += (' price BETWEEN '+str(p[0])+' and '+str(p[1])+' ')
                z = 1
            else:
                args_rec += (' AND price BETWEEN '+str(p[0])+' and '+str(p[1])+' ')
            continue

        if i == 'keyword':
            if z == 0:
                args_rec += (' properties MATCH '+'"'+request.args.get(i)+'"')
                z = 1
            else:
                args_rec += (' AND properties MATCH '+'"'+request.args.get(i)+'"')
            continue
        
        if i == 'units':
            tp = request.args.get(i)
        
        if z == 0:
            args_rec += (i+'='+'"'+request.args.get(i)+'"')
            z = 1
        else:
            args_rec += (' AND '+i+'='+'"'+request.args.get(i)+'"')
        pl.append((i,request.args.get(i)))
        if i == "beds":
            pl1.append(str(request.args.get(i))+ ' Bed')
            continue
        pl1.append(request.args.get(i))
        
    conn = sqlite3.connect('main.db')
    c =   conn.cursor()
    c.row_factory = sqlite3.Row  
    print(args_rec)  
    c.execute('SELECT rowid, * FROM properties WHERE '+ args_rec+';')
    result = c.fetchall()
    for r in result:
        newdict = dict(r)
        newdict['price'] = "{:,}".format(newdict['price'])
        a.append(newdict)
    conn.close()
    a = a[:20]
    return render_template("search.html", queryRes=a,meta = '', search='Properties for '+tp, url = '',pl = pl, args = " | ".join(pl1))



@app.route("/livesearch", methods=["POST", "GET"]) 
def livesearch():
    if request.method == "POST":
        srch = []
        a = []
        
        page = range(0,700,20)
        if request.form['page'] != '':  
            ep = page[int(request.form['page'])] 
            sp = page[int(request.form['page'])-1]
        if request.form['units'] != '':
            srch.append(('units',request.form['units']))

        if request.form['propertytype'] != '':
            srch.append(('type',request.form['propertytype']))

        if request.form['pricefrom'] != '':
            srch.append(('price',request.form['pricefrom']))

        if request.form['text'] != '':
            srch.append(('city',request.form['text']))

        if request.form['location'] != '':
            srch.append(('area',request.form['location']))

        if request.form['selectbox'] != '':
            srch.append(('beds',request.form['selectbox']))

        if request.form['contract'] != '':
            srch.append(('contract',request.form['contract']))

   
        args_rec = ''
        z=0
        for i in srch:
            if i[0] == 'price':
                y = [(0,50000),(50000,100000),(100000,200000),(200000,300000),(300000,400000),(400000,10000000)]
                p = y[int(i[1])]
                if z == 0:
                    args_rec += (' price BETWEEN '+str(p[0])+' and '+str(p[1])+' ')
                    z = 1
                else:
                    args_rec += (' AND price BETWEEN '+str(p[0])+' and '+str(p[1])+' ')
                continue
            if z == 0:
                args_rec += (i[0]+'='+'"'+i[1]+'"')
                z = 1
            else:
                args_rec += (' AND '+i[0]+'='+'"'+i[1]+'"')
    
        conn = sqlite3.connect('main.db')
        c =   conn.cursor()
        c.row_factory = sqlite3.Row  
        c.execute('SELECT rowid, * FROM properties WHERE '+ args_rec)
        result = c.fetchall()
        for r in result:
            newdict = dict(r)
            newdict['price'] = "{:,}".format(newdict['price'])
            a.append(newdict)
        a = a[sp:ep]
        conn.close()
        return jsonify(queryres=a)


@app.route('/communities')
def communities():   
    conn = sqlite3.connect('main.db')
    c =   conn.cursor()
    c.execute('SELECT DISTINCT area FROM community')
    result = c.fetchall()
    conn.close()
    x = []
    for i in result:
        x.append(i[0].replace(' ','-'))
    return render_template("communities.html", x = x)

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

@app.route('/communities/<areaname>')
def newdb(areaname):
    areaname = areaname.replace("-"," ")
    conn = sqlite3.connect('main.db')
    c = conn.cursor()
    c.execute('''SELECT * FROM community WHERE area == ?''',['{}'.format(areaname)])
    result = c.fetchall()
    new_result = []
    for item in result:
        new_res = item[0].replace(" ","-")
        new_res1 = item[1].replace(" ","-")
        new_res2 = item[2]
        new_result.append((new_res, new_res1, new_res2, item[0]))   
    conn.close()

    
    conn = sqlite3.connect('main.db')
    c = conn.cursor()
    list_of_rooms = []
    list_of_rooms_rent = []
    c.execute('''SELECT COUNT(*) FROM properties WHERE beds LIKE '%ST' AND area LIKE ? AND units = 'buy' ''',['{}'.format(areaname)])
    st = c.fetchone()[0]
    if st != 0:
        list_of_rooms.append([st,'Studio Apt\'s ', 'ST'])
    c.execute('''SELECT COUNT(*) FROM properties WHERE beds LIKE '%1%' AND area LIKE ? AND units = 'buy' ''',['{}'.format(areaname)])
    one = c.fetchone()[0]
    if one != 0:
        list_of_rooms.append([one,'1 BR Apt\'s ', 1])
    c.execute('''SELECT COUNT(*) FROM properties WHERE beds LIKE '%2%' AND area LIKE ? AND units = 'buy' ''',['{}'.format(areaname)])
    two = c.fetchone()[0]
    if two != 0:
        list_of_rooms.append([two,'2 BR Apt\'s ', 2])
    c.execute('''SELECT COUNT(*) FROM properties WHERE beds LIKE '%3%' AND area LIKE ? AND units = 'buy' ''',['{}'.format(areaname)])
    three = c.fetchone()[0]
    if three != 0:
        list_of_rooms.append((three,'3 BR Apt\'s ', 3))
    c.execute('''SELECT COUNT(*) FROM properties WHERE beds LIKE '%4%' AND area LIKE ? AND units = 'buy' ''',['{}'.format(areaname)])
    four = c.fetchone()[0]
    if four != 0:
        list_of_rooms.append((four,'4 BR Apt\'s ', 4))
    c.execute('''SELECT COUNT(*) FROM properties WHERE beds LIKE '%5%' AND area LIKE ? AND units = 'buy' ''',['{}'.format(areaname)])
    five = c.fetchone()[0]
    if five != 0:
        list_of_rooms.append((five,'5 BR Apt\'s ', 5))
    
    #rent

    c.execute('''SELECT COUNT(*) FROM properties WHERE beds LIKE '%ST' AND area LIKE ? AND units = 'rent' ''',['{}'.format(areaname)])
    st = c.fetchone()[0]
    if st != 0:
        list_of_rooms_rent.append([st,'Studio Apt\'s ', 'ST'])
    c.execute('''SELECT COUNT(*) FROM properties WHERE beds LIKE '%1%' AND area LIKE ? AND units = 'rent' ''',['{}'.format(areaname)])
    one = c.fetchone()[0]
    if one != 0:
        list_of_rooms_rent.append([one,'1 BR Apt\'s ', 1])
    c.execute('''SELECT COUNT(*) FROM properties WHERE beds LIKE '%2%' AND area LIKE ? AND units = 'rent' ''',['{}'.format(areaname)])
    two = c.fetchone()[0]
    if two != 0:
        list_of_rooms_rent.append([two,'2 BR Apt\'s ', 2])
    c.execute('''SELECT COUNT(*) FROM properties WHERE beds LIKE '%3%' AND area LIKE ? AND units = 'rent' ''',['{}'.format(areaname)])
    three = c.fetchone()[0]
    if three != 0:
        list_of_rooms_rent.append((three,'3 BR Apt\'s ', 3))
    c.execute('''SELECT COUNT(*) FROM properties WHERE beds LIKE '%4%' AND area LIKE ? AND units = 'rent' ''',['{}'.format(areaname)])
    four = c.fetchone()[0]
    if four != 0:
        list_of_rooms_rent.append((four,'4 BR Apt\'s ', 4))
    c.execute('''SELECT COUNT(*) FROM properties WHERE beds LIKE '%5%' AND area LIKE ? AND units = 'rent' ''',['{}'.format(areaname)])
    five = c.fetchone()[0]
    if five != 0:
        list_of_rooms_rent.append((five,'5 BR Apt\'s ', 5))

    

    conn.close()

    return render_template("community_page.html", result = new_result, rooms=list_of_rooms, rent_rooms = list_of_rooms_rent, area = areaname )


@app.route('/partners/aldar')
def aldar():
    queryRes = []
    keyword = request.form.get("keyword")
    conn = sqlite3.connect('main.db')
    c = conn.cursor()
    c.row_factory = sqlite3.Row
    c.execute('''SELECT rowid,* FROM properties WHERE description MATCH ?''',['{}'.format('aldar')])
    result = c.fetchall()
    for r in result:
        queryRes.append(dict(r))
    
    conn.commit()

    conn.close()
    return render_template("aldar.html", queryRes= queryRes)

@app.route('/partners/emaar')
def emaar():
    queryRes = []
    keyword = request.form.get("keyword")
    conn = sqlite3.connect('main.db')
    c = conn.cursor()
    c.row_factory = sqlite3.Row
    c.execute('''SELECT rowid,* FROM properties WHERE description MATCH ?''',['{}'.format('emaar')])
    result = c.fetchall()
    for r in result:
        queryRes.append(dict(r))
    
    conn.commit()

    conn.close()
    return render_template("emaar.html", queryRes= queryRes)

@app.route('/partners/bloom')
def bloom():
    queryRes = []
    keyword = request.form.get("keyword")
    conn = sqlite3.connect('main.db')
    c = conn.cursor()
    c.row_factory = sqlite3.Row
    c.execute('''SELECT rowid,* FROM properties WHERE description MATCH ?''',['{}'.format('bloom')])
    result = c.fetchall()
    for r in result:
        queryRes.append(dict(r))
    
    conn.commit()

    conn.close()
    return render_template("bloom.html", queryRes= queryRes)

@app.route('/partners/imkan')
def imkan():
    return render_template("imkan.html")

@app.route('/googlef7ae2afa38ca93ff.html')
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
    c.execute('''SELECT * FROM community where community_name = ? ''',['{}'.format(name)])
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
        c.execute('''SELECT * FROM community where property = ? ''',['{}'.format(project)])
        result = c.fetchone()
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