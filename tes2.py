from flask.globals import request


import requests
response = requests.get("https://photos.propspace.com/watermark?c_id=3386&l_id=1576257630611766&aid=1490271&id=16175441966496009&image=04_04_2021-17_51_10-3386-15d229f8bf9c8019ba5abab60231880f.jpeg")

file = open("backup/sample_image.jpeg", "wb")
file.write(response.content)
file.close()