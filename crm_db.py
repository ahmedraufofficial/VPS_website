import sqlite3
conn = sqlite3.connect('test.db')

connection = conn.cursor()
cursor = connection.execute('select * from properties')
#names = list(map(lambda x: x[0], cursor))
#print(names)

conn2 = sqlite3.connect('main2.db')

c = conn2.cursor()
conn2.commit()
import os
print(os.getcwd())
ref=0
for i in cursor:

    if i[49]== "0":
        c.execute('''SELECT * FROM properties WHERE ref_no == ?''',['{}'.format(i[7])])
        result = c.fetchone()
        if result == None:
            ref+=1
            try:
                ame = {"Maids Room":'',"Built in wardrobes": '',"Carpets": '',"Study":'',"Balcony":'',"Central air conditioning":'',"Heating":'',"Drivers room":'',"Fully fitted kitchen":'',"Gazebo":'',"Private Garden":'',"Private Pool":'',"Private Gym":'',"Private Jacuzzi":'',"Kitchen Appliances":'',"Marble floors":'',"Security":'',"Walk-in Closet":'',"View of Landmark":'',"Pets allowed":'',"Private garage":'',"Sauna":'',"Wood flooring":'',"Steam room":'',"Upgraded interior":'',"Garden view":'',"Maintenance":'',"Within a Compound":'',"Storage room":'',"Terrace":'',"Server room":'',"Pantry":'',"Conference room":''}
                if i[27] !=None:
                    if "Maids Room" in i[27]:
                        ame["maids_room"] = "Maids Room"
                    if "Built in wardrobes" in i[27]:
                        ame["built_in_wardrobes"] = "Built in wardrobes"
                    if "Carpets" in i[27]:
                        ame["carpets"] = "Carpets"
                    if "Study" in i[27]:
                        ame["study"] = "Study"
                    if "Balcony" in i[27]:
                        ame["balcony"] = "Balcony"
                    if "Central air conditioning" in i[27]:
                        ame["central_air_conditioning"] = "Central air conditioning"
                    if "Heating" in i[27]:
                        ame["heating"] = "Heating"
                    if "Drivers room" in i[27]:
                        ame["drivers_room"] = "Drivers room"
                    if "Fully fitted kitchen" in i[27]:
                        ame["fully_fitted_kitchen"] = "Fully fitted kitchen"
                    if "Gazebo" in i[27]:
                        ame["gazebo"] = "Gazebo"
                    if "Private Garden" in i[27]:
                        ame["private_garden"] = "Private Garden"
                    if "Private Pool" in i[27]:
                        ame["private_pool"] = "Private Pool"
                    if "Private Gym" in i[27]:
                        ame["private_gym"] = "Private Gym"
                    if "Private Jacuzzi" in i[27]:
                        ame["private_jacuzzi"] = "Private Jacuzzi"
                    if "Kitchen Appliances" in i[27]:
                        ame["kitchen_appliances"] = "Kitchen Appliances"
                    if "Marble floors" in i[27]:
                        ame["marble_floors"] = "Marble floors"
                    if "Security" in i[27]:
                        ame["security"] = "Security"
                    if "Walk-in Closet" in i[27]:
                        ame["walk_in_closet"] = "Walk-in Closet"
                    if "View of Landmark" in i[27]:
                        ame["view_of_landmark"] = "View of Landmark"
                    if "Pets allowed" in i[27]:
                        ame["pets_allowed"] = "Pets allowed"
                    if "Private garage" in i[27]:
                        ame["private_garage"] = "Private garage"
                    if "Sauna" in i[27]:
                        ame["sauna"] = "Sauna"
                    if "Wood flooring" in i[27]:
                        ame["wood_flooring"] = "Wood flooring"
                    if "Steam room" in i[27]:
                        ame["steam_room"] = "Steam room"
                    if "Upgraded interior" in i[27]:
                        ame["upgraded_interior"] = "Upgraded interior"
                    if "Garden view" in i[27]:
                        ame["garden_view"] = "Garden view"
                    if "Maintenance" in i[27]:
                        ame["maintenance"] = "Maintenance"
                    if "Within a Compound" in i[27]:
                        ame["within_a_compound"] = "Within a Compound"
                    if "Storage room" in i[27]:
                        ame["storage_room"] = "Storage room"
                    if "Terrace" in i[27]:
                        ame["terrace"] = "Terrace"
                    if "Server room" in i[27]:
                        ame["server_room"] = "Server room"
                    if "Pantry" in i[27]:
                        ame["pantry"] = "Pantry"
                    if "Conference room" in i[27]:
                        ame["conference_room"] = "Conference room"
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
                try:
                    all_f = []
                    for j in i[52].split('|'):
                        all_f.append("https://www.crm.uhpae.com"+j) 
                        all_f_2 = "|".join(all_f)
                except:
                    continue
                try:
                    all_m = []
                    for j in i[53].split('|'):
                        all_m.append("https://www.crm.uhpae.com"+j) 
                        all_m_2 = "|".join(all_m)
                except:
                    continue
                try:
                    size = str(int(i[13]))
                except:
                    size = 0
                if i[29].split('|')[1] == "":
                    print("False")
                else:
                    if i[34] != None and i[34] != "":
                        res = i[34].split("=")
                        embeddedUrl = "https://www.youtube.com/embed/"+res[1]
                    else:
                        embeddedUrl = ""
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
                        "size"  :  size,
                        "type"  :  i[4],
                        "units" :  i[3],
                        "description" : "",
                        "image" : all_p,
                        "city": i[2],
                        "state":  i[1],
                        "images": all_p_3,
                        "agent" : all_m_2, #masterplan
                        "agent_email" : embeddedUrl, #youtube video sent as agent email 
                        "agent_phone" : all_f_2, #floorplan
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
                        "tag":i[46]
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
            except:
                pass
        else:
            pass
    else: 
        c.execute("DELETE FROM properties WHERE ref_no == ?",['{}'.format(i[7])])
        conn2.commit()
        c.execute("DELETE FROM dproperties WHERE ref_no == ?",['{}'.format(i[7])])
        conn2.commit()

print(ref)
conn2.close()
conn.close()
