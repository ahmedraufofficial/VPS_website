

import json   
'''
people = {'Al Reef Villas': {'floorplans':['../../static/projects/reefvillas/2bed.jpeg','../../static/projects/reefvillas/3bed.jpeg'],'floorplans_1' : '','floorplan_2': ['../../static/projects/reefvillas/2bed.jpeg','../../static/projects/reefvillas/2bed_ground.jpeg'], 'floorplan_3': ['../../static/projects/reefvillas/3bed.jpeg','../../static/projects/reefvillas/3bed_first.jpeg','../../static/projects/reefvillas/3bed_ground.jpeg'], 'floorplans_4': ''}}

with open('floorplans.json', 'w') as fout:
    json.dump(people , fout)

'''

with open(r"floorplans.json", "r") as read_file:
    data = json.load(read_file)
name = 'Al Reef Downtown'
if name in data:
    print('ok')

