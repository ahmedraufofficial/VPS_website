import sqlite3
conn = sqlite3.connect('../revamped_crm/test.db')

connection = conn.cursor()
cursor = connection.execute('select * from properties')
#names = list(map(lambda x: x[0], cursor))
#print(names)

conn2 = sqlite3.connect('main2.db')

c = conn2.cursor()

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

c.execute(""" CREATE VIRTUAL TABLE dproperties USING fts4 (
        ref_no text,
        description texts
            )""")

conn2.commit()

for i in cursor:
    
    ame = {"balcony":'',"basement_parking":'',"wardrobes":'',"central_air_condition":'',"central_heating":'',"community_view":'',"covered_parking":'',"maids_room":'',"satellite_or_cable":'',"gymnasium":'',"shared_pool":'',"furnished":'',"fitted_kitchen":'',"maintainence":'',"washing_room":''}
    if i[27] !=None:
        if "Balcony" in i[27]:
            ame["balcony"] = "Balcony"
        if "Covered Parking" in i[27]:
            ame["basement_parking"] = "Covered Parking"
        if "Built in Wardrobes" in i[27]:
            ame["wardrobes"] = "Built in Wardrobes"
        if "Central A/C & Heating" in i[27]:
            ame["central_air_condition"] = "Central A/C & Heating"
        if "Central A/C & Heating" in i[27]:
            ame["central_heating"] = "Central A/C & Heating"
        if "View of Landmark" in i[27]:
            ame["community_view"] = "Community View"
        if "Covered Parking" in i[27]:
            ame["covered_parking"] = "Covered Parking"
        if "Maids" in i[27]:
            ame["maids_room"] = "Maid's Room"
        if "Concierge Service" in i[27]:
            ame["satellite_or_cable"] = "Concierge Services"
        if "Shared Gym" in i[27]:
            ame["Shared Gym"] = "Shared Gym"
        if "Shared Pool" in i[27]:
            ame["shared_pool"] = "Shared Pool"
        if "Built in Kitchen Appliances" in i[27]:
            ame["fitted_kitchen"] = "Built in Kitchen Appliances"
        if "Concierge Service" in i[27]:
            ame["maintainence"] = "Maintainence"
        if "Maid Service" in i[27]:
            ame["washing_room"] = "Washing Room"

    try:
        all_p = "https://www.crm.uhpae.com"+i[29].split('|')[0]
    except:
        continue
    try:
        all_p_2 = []
        for j in i[29].split('|'):
            all_p_2.append("https://www.crm.uhpae.com"+j) 
        all_p_3 = "|".join(all_p_2)
    except:
        continue
    
    c.execute("INSERT INTO properties VALUES (:ref_no, :title, :contract, :property, :price,:location,:area,:beds,:baths,:size,:type,:units,:description,:image, :city, :state, :images, :agent, :agent_email, :agent_phone, :balcony, :basement_parking,:wardrobes,:central_air_condition,:central_heating ,:community_view,:covered_parking,:maids_room,:satellite_or_cable,:gymnasium ,:shared_pool,:furnished,:fitted_kitchen,:maintainence,:washing_room,:model,:tag)",
            {"ref_no" :i[7],
            "title" : i[8],
            "contract" : 'residential',
            "property" : i[26],
            "price" : i[15],
            "location"  : i[24] + ", " + i[26],
            "area"  :  i[24],
            "beds"  :  i[20],
            "baths" :  i[31],
            "size"  :  str(int(i[13])),
            "type"  :  i[4],
            "units" :  i[3],
            "description" : "",
            "image" : all_p,
            "city": i[2],
            "state":  i[1],
            "images": all_p_3,
            "agent" : i[44],
            "agent_email" : "",
            "agent_phone" : "",
            "balcony" : ame["balcony"],
            "basement_parking" : ame["basement_parking"],
            "wardrobes" : ame["wardrobes"],
            "central_air_condition" : ame["central_air_condition"],
            "central_heating": ame["central_heating"],
            "community_view": ame["community_view"],
            "covered_parking": ame["covered_parking"],
            "maids_room": ame["maids_room"],
            "satellite_or_cable": ame["satellite_or_cable"],
            "gymnasium": ame["gymnasium"],
            "shared_pool": ame["shared_pool"],
            "furnished": i[25],
            "fitted_kitchen": ame["fitted_kitchen"],
            "maintainence": ame["maintainence"],
            "washing_room": ame["washing_room"],
            "model": "Contact to Find",
            "tag":i[49]
            }
            )

    conn2.commit()


    ref_no = i[7]
    description = str(i[9])
    description = description.replace('<web_remarks>','<div class = "container">')
    description = description.replace('</web_remarks>','</div>')
    description = description.replace('</br>','<br>')
                                                                                                                                                                                                                                                                          
    c.execute("INSERT INTO dproperties VALUES (:ref_no,:description)",
            {"ref_no" :ref_no,
            "description" : description
            }
            )




    conn2.commit()


conn2.close()
conn.close()
