from bs4 import BeautifulSoup
import requests
import json
import re
import sqlite3
import os

with open('map_photos.json', 'w') as f:
    data = {}
    data['map_photos'] = []
    json.dump(data, f)


url = "http://xml.propspace.com/feed/xml.php?cl=3386&pid=8245&acc=8807"

response = requests.get(url)

print(response.status_code)
html = response.text
soup = BeautifulSoup(response.content, 'lxml')

conn = sqlite3.connect('backup.db')

c = conn.cursor()

c.execute(""" CREATE VIRTUAL TABLE properties USING fts4 (
        ref_no text,
        title text,
        contract text,
        property text,
        price int,
        location text,
        area text,
        beds text,
        baths text,
        size text,
        type text,
        units text,
        description text,
        image text,
        city text,
        state text,
        images text,
        agent text,
        agent_email text,
        agent_phone text,
        balcony text,
        basement_parking text,
        wardrobes text,
        central_air_condition text,
        central_heating text,
        community_view text,
        covered_parking text,
        maids_room text,
        satellite_or_cable text,
        gymnasium text,
        shared_pool text,
        furnished text,
        fitted_kitchen text,
        maintainence text,
        washing_room text,
        model text,
        tag text
            )""")



for entry in soup.find_all("listing"):
    ref_no = entry.find('unit_reference_no').text
    count = entry.find('count').text     #id
    units = entry.find('ad_type').text  #sale
    if units == "Sale":
        units = "buy"
    if units == "Rent":
        units = "rent"
    type_ = entry.find('unit_type').text #apartment
    size = entry.find('unit_builtup_area').text #size
    beds = entry.find('bedrooms').text
    baths = entry.find('no_of_bathroom').text
    title = entry.find('property_title').text
    if "hot" in title.lower():
        tag = "hot"
    else:
        tag = "basic"
    description = str(entry.find('web_remarks'))
    description = description.replace('<web_remarks>','<div class = "container">')
    description = description.replace('</web_remarks>','</div>')
    description = description.replace('</br>','<br>')
    city = entry.find('emirate').text
    area = entry.find('community').text
    property_name = entry.find('property_name').text
    state = entry.find('off_plan').text
    if state == "0":
        state = "ready"
    else:
        state = "offplan"
    price = int(entry.find('price').text)

    thumbnail = ''
    for image in entry.find('images'):    
        thumbnail = entry.find('image').text
        break
    property_images = []
    for image in entry.find('images'):
        property_images.append(image.text)
    total = 0
    UPLOAD_FOLDER = "backup/"+ref_no
    if not os.path.isdir(UPLOAD_FOLDER):
        os.mkdir(UPLOAD_FOLDER)
        for img in property_images:
            total = total+1
            response = requests.get(img)
            file = open("backup/"+ref_no+"/"+str(total)+".jpeg", "wb")
            file.write(response.content)
            file.close()

    property_images = ",".join(property_images)

    balcony = ''
    basement_parking = ''
    wardrobes = ''
    central_air_condition = ''
    central_heating = ''
    community_view = ''
    covered_parking = ''
    maids_room = ''
    satellite_or_cable = ''
    gymnasium = ''
    shared_pool = ''
    furnished = ''
    fitted_kitchen = ''
    maintainence = ''
    washing_room = ''

    for facility in entry.find('facilities'):
        if facility.text == 'Balcony':
            balcony = facility.text
        if facility.text == 'Basement parking':
            basement_parking = facility.text
        if facility.text == 'Satellite/Cable TV':
            satellite_or_cable = facility.text
        if facility.text == 'Community View':
             community_view = facility.text
        if facility.text == 'Central air conditioning':
            central_air_condition = facility.text
        if facility.text == 'Covered parking':
            covered_parking = facility.text
        if facility.text == 'Gymnasium':
            gymnasium = facility.text
        if facility.text == 'Built in wardrobes':
            wardrobes = facility.text
        if facility.text == 'Central heating':
            central_heating = facility.text
        if facility.text == 'Laundry/washing room':
            washing_room = facility.text
        if facility.text == 'Maid\'s room':
            maids_room = facility.text
        if facility.text == 'Fully fitted kitchen':
            fitted_kitchen = facility.text
        if facility.text == '24 hours Maintenance':
            maintainence = facility.text
        if facility.text == 'Fully furnished':
            furnished = facility.text                                                                                           





    agent = entry.find('listing_agent').text
    agent_email = entry.find('listing_agent_email').text
    agent_phone  = entry.find('listing_agent_phone').text


    
    model  = entry.find('unit_model').text


    with open('map_photos.json','r+') as file:
        columns = json.load(file)
        columns["map_photos"].append({ref_no:property_images})
        file.seek(0)
        json.dump(columns, file,indent=4)
        file.truncate()


                                                                                                                                                                                                                                                                          
    c.execute("INSERT INTO properties VALUES (:ref_no, :title, :contract, :property, :price,:location,:area,:beds,:baths,:size,:type,:units,:description,:image, :city, :state, :images, :agent, :agent_email, :agent_phone, :balcony, :basement_parking,:wardrobes,:central_air_condition,:central_heating ,:community_view,:covered_parking,:maids_room,:satellite_or_cable,:gymnasium ,:shared_pool,:furnished,:fitted_kitchen,:maintainence,:washing_room,:model,:tag)",
            {"ref_no" :ref_no,
            "title" : title,
            "contract" : 'residential',
            "property" : property_name,
            "price" : price,
            "location"  : area + ", " + property_name,
            "area"  :  area,
            "beds"  :  beds,
            "baths" :  baths,
            "size"  :  size,
            "type"  :  type_,
            "units" :  units,
            "description" : description,
            "image" : thumbnail,
            "city": city,
            "state":  state,
            "images": property_images,
            "agent" : agent,
            "agent_email" : agent_email,
            "agent_phone" : agent_phone,
            "balcony" : balcony,
            "basement_parking" : basement_parking,
            "wardrobes" : wardrobes,
            "central_air_condition" :central_air_condition,
            "central_heating": central_heating,
            "community_view":community_view,
            "covered_parking":covered_parking,
            "maids_room": maids_room,
            "satellite_or_cable":satellite_or_cable,
            "gymnasium":gymnasium,
            "shared_pool":shared_pool,
            "furnished":furnished,
            "fitted_kitchen":fitted_kitchen,
            "maintainence":maintainence,
            "washing_room":washing_room,
            "model":model,
            "tag":tag
            }
            )

    print(ref_no+" added")


conn.commit()

conn.close()