TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "adjacentPanoramas": [
   {
    "backwardYaw": 80.01,
    "panorama": {
     "adjacentPanoramas": [
      {
       "backwardYaw": 4.93,
       "panorama": {
        "adjacentPanoramas": [
         {
          "backwardYaw": 72.63,
          "panorama": "this.panorama_6D8556BC_6548_748A_41D0_726EAA78EE98",
          "class": "AdjacentPanorama",
          "yaw": 4.93,
          "distance": 1
         },
         {
          "backwardYaw": 149.17,
          "panorama": {
           "adjacentPanoramas": [
            {
             "backwardYaw": -74.53,
             "panorama": "this.panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772",
             "class": "AdjacentPanorama",
             "yaw": 149.17,
             "distance": 1
            },
            {
             "backwardYaw": -157.09,
             "panorama": {
              "adjacentPanoramas": [
               {
                "backwardYaw": 180.55,
                "panorama": "this.panorama_6D86714C_6548_0D89_41CC_5C97298DA39C",
                "class": "AdjacentPanorama",
                "yaw": -157.09,
                "distance": 1
               },
               {
                "backwardYaw": -158.66,
                "panorama": "this.panorama_6E60B56A_6548_358E_41D8_66EBE7B42117",
                "class": "AdjacentPanorama",
                "yaw": 131.36,
                "distance": 1
               },
               {
                "backwardYaw": 172.85,
                "panorama": "this.panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772",
                "class": "AdjacentPanorama",
                "yaw": -96.63,
                "distance": 1
               }
              ],
              "label": "Living Area",
              "hfovMax": 120,
              "partial": false,
              "class": "Panorama",
              "hfov": 360,
              "vfov": 180,
              "frames": [
               {
                "overlays": [
                 {
                  "image": {
                   "levels": [
                    {
                     "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_tcap0.png",
                     "height": 850,
                     "class": "ImageResourceLevel",
                     "width": 850
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "id": "panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_tcap0",
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "angle": 0,
                  "inertia": false,
                  "hfov": 70.8
                 },
                 {
                  "image": {
                   "levels": [
                    {
                     "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_tcap0.png",
                     "height": 850,
                     "class": "ImageResourceLevel",
                     "width": 850
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "id": "panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_ccap0",
                  "class": "CeilingCapPanoramaOverlay",
                  "rotate": false,
                  "angle": 0,
                  "inertia": false,
                  "hfov": 70.8
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_63C9650E_6831_08AC_41C9_75F99E6551CF",
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_10_0.png",
                       "height": 271,
                       "class": "ImageResourceLevel",
                       "width": 242
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -102.57,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -7.85,
                    "hfov": 11.26
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_10_0_0_map.gif",
                       "height": 135,
                       "class": "ImageResourceLevel",
                       "width": 121
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -7.85,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -102.57,
                    "hfov": 11.26
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": true,
                  "id": "overlay_641056D3_6831_09B4_41D7_C08D2441CA05",
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772, this.camera_785E2DEE_6831_1B6C_41A3_F2847735C0FB); this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_9_0.png",
                       "height": 1111,
                       "class": "ImageResourceLevel",
                       "width": 614
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -96.63,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -15.91,
                    "hfov": 27.7
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_9_0_map.gif",
                       "height": 28,
                       "class": "ImageResourceLevel",
                       "width": 16
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -15.91,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -96.63,
                    "hfov": 27.7
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_6430AD1B_6811_18B4_41D6_31202348433A",
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_8_0.png",
                       "height": 147,
                       "class": "ImageResourceLevel",
                       "width": 122
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -164.8,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -2.82,
                    "hfov": 5.75
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_8_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 61
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -2.82,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -164.8,
                    "hfov": 5.75
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": true,
                  "id": "overlay_644D13E7_6811_0F9C_41D2_B2B04BDE6AC5",
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_6D86714C_6548_0D89_41CC_5C97298DA39C, this.camera_78231DDD_6831_1BAC_41AD_B242324C7F97); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_7_0.png",
                       "height": 1213,
                       "class": "ImageResourceLevel",
                       "width": 604
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -157.09,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -20.5,
                    "hfov": 26.53
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_7_0_map.gif",
                       "height": 32,
                       "class": "ImageResourceLevel",
                       "width": 16
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -20.5,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -157.09,
                    "hfov": 26.53
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_6435140A_6817_0894_41D5_15039BF0409E",
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_6_0.png",
                       "height": 133,
                       "class": "ImageResourceLevel",
                       "width": 107
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -126.69,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -0.52,
                    "hfov": 5.05
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_6_0_0_map.gif",
                       "height": 66,
                       "class": "ImageResourceLevel",
                       "width": 53
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -0.52,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -126.69,
                    "hfov": 5.05
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": true,
                  "id": "overlay_64E1455A_6817_08B4_41CE_906913DF0A55",
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_5_0.png",
                       "height": 466,
                       "class": "ImageResourceLevel",
                       "width": 257
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -126.17,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -3.23,
                    "hfov": 12.06
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_5_0_map.gif",
                       "height": 29,
                       "class": "ImageResourceLevel",
                       "width": 16
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -3.23,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -126.17,
                    "hfov": 12.06
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_6471AF9E_6811_17AC_41D7_2FB228A6C8AD",
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_6E60B56A_6548_358E_41D8_66EBE7B42117, this.camera_785DADE6_6831_1B9C_41D1_6A4CD2E16BB1); this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_4_0.png",
                       "height": 227,
                       "class": "ImageResourceLevel",
                       "width": 208
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 131.36,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -23.16,
                    "hfov": 8.99
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_4_0_0_map.gif",
                       "height": 113,
                       "class": "ImageResourceLevel",
                       "width": 104
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -23.16,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 131.36,
                    "hfov": 8.99
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_64BDE3B2_681F_0FF4_41D0_183468F72586",
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_3_0.png",
                       "height": 122,
                       "class": "ImageResourceLevel",
                       "width": 135
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 138.49,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -2.09,
                    "hfov": 6.32
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_3_0_0_map.gif",
                       "height": 61,
                       "class": "ImageResourceLevel",
                       "width": 67
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -2.09,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 138.49,
                    "hfov": 6.32
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_64883AE2_681F_3994_41B3_70C06A5703D7",
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_2_0.png",
                       "height": 187,
                       "class": "ImageResourceLevel",
                       "width": 216
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 119.61,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -3.27,
                    "hfov": 10.12
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_2_0_0_map.gif",
                       "height": 93,
                       "class": "ImageResourceLevel",
                       "width": 108
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -3.27,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 119.61,
                    "hfov": 10.12
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": true,
                  "id": "overlay_65E443DB_6813_0FB5_41BD_0225A5456D1F",
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_1_0.png",
                       "height": 519,
                       "class": "ImageResourceLevel",
                       "width": 234
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 140.88,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -4.08,
                    "hfov": 10.97
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_1_0_map.gif",
                       "height": 35,
                       "class": "ImageResourceLevel",
                       "width": 16
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -4.08,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 140.88,
                    "hfov": 10.97
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": true,
                  "id": "overlay_64D56EFE_6811_196F_41A4_7AC6F47C7E14",
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_0_0.png",
                       "height": 542,
                       "class": "ImageResourceLevel",
                       "width": 271
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 119.94,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -2.79,
                    "hfov": 12.73
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_0_HS_0_0_map.gif",
                       "height": 32,
                       "class": "ImageResourceLevel",
                       "width": 16
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -2.79,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 119.94,
                    "hfov": 12.73
                   }
                  ]
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_r_hq.jpeg",
                   "height": 2440,
                   "class": "ImageResourceLevel",
                   "width": 2440
                  },
                  {
                   "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_f_hq.jpeg",
                   "height": 2440,
                   "class": "ImageResourceLevel",
                   "width": 2440
                  },
                  {
                   "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_b_hq.jpeg",
                   "height": 2440,
                   "class": "ImageResourceLevel",
                   "width": 2440
                  },
                  {
                   "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_u_hq.jpeg",
                   "height": 2440,
                   "class": "ImageResourceLevel",
                   "width": 2440
                  },
                  {
                   "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_d_hq.jpeg",
                   "height": 2440,
                   "class": "ImageResourceLevel",
                   "width": 2440
                  },
                  {
                   "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_l_hq.jpeg",
                   "height": 2440,
                   "class": "ImageResourceLevel",
                   "width": 2440
                  },
                  {
                   "url": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_t.jpg",
              "hfovMin": 60,
              "pitch": 0,
              "id": "panorama_6E759E6F_6548_F786_41D2_9C84109D05CD"
             },
             "class": "AdjacentPanorama",
             "yaw": 180.55,
             "distance": 1
            },
            {
             "backwardYaw": 113.01,
             "panorama": "this.panorama_6E60B56A_6548_358E_41D8_66EBE7B42117",
             "class": "AdjacentPanorama",
             "yaw": -144.98,
             "distance": 1
            }
           ],
           "label": "Kitchen",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "image": {
                "levels": [
                 {
                  "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_tcap0.png",
                  "height": 850,
                  "class": "ImageResourceLevel",
                  "width": 850
                 }
                ],
                "class": "ImageResource"
               },
               "id": "panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_tcap0",
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "angle": 0,
               "inertia": false,
               "hfov": 70.8
              },
              {
               "image": {
                "levels": [
                 {
                  "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_tcap0.png",
                  "height": 850,
                  "class": "ImageResourceLevel",
                  "width": 850
                 }
                ],
                "class": "ImageResource"
               },
               "id": "panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_ccap0",
               "class": "CeilingCapPanoramaOverlay",
               "rotate": false,
               "angle": 0,
               "inertia": false,
               "hfov": 72
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_64D87E0A_6871_1894_41D3_59E37F45FA3C",
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 5)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_0_HS_5_0.png",
                    "height": 299,
                    "class": "ImageResourceLevel",
                    "width": 336
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 98.15,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -3.05,
                 "hfov": 15.65
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_0_HS_5_0_0_map.gif",
                    "height": 149,
                    "class": "ImageResourceLevel",
                    "width": 168
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -3.05,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 98.15,
                 "hfov": 15.65
                }
               ]
              },
              {
               "rollOverDisplay": true,
               "id": "overlay_65B9C36A_6871_0894_41C1_521BC12F9DE0",
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_0_HS_4_0.png",
                    "height": 783,
                    "class": "ImageResourceLevel",
                    "width": 563
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 101.35,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -4.93,
                 "hfov": 26.19
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_0_HS_4_0_map.gif",
                    "height": 22,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -4.93,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 101.35,
                 "hfov": 26.19
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_65001241_6873_0894_41C8_4FDA84C1DE91",
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_0_HS_3_0.png",
                    "height": 133,
                    "class": "ImageResourceLevel",
                    "width": 172
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 146.69,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -4.03,
                 "hfov": 8
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_0_HS_3_0_0_map.gif",
                    "height": 66,
                    "class": "ImageResourceLevel",
                    "width": 86
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -4.03,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 146.69,
                 "hfov": 8
                }
               ]
              },
              {
               "rollOverDisplay": true,
               "id": "overlay_658EF533_6871_08F4_41AE_484719083D63",
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772, this.camera_792A2D9F_6831_1BAD_41C3_5FCEFDF32AB9); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_0_HS_2_0.png",
                    "height": 613,
                    "class": "ImageResourceLevel",
                    "width": 388
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 149.17,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -5.6,
                 "hfov": 18
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_0_HS_2_0_map.gif",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -5.6,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 149.17,
                 "hfov": 18
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_656C328E_687F_09AC_41D4_D6F25D9B0220",
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_0_HS_1_0.png",
                    "height": 115,
                    "class": "ImageResourceLevel",
                    "width": 112
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 177.98,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -5.24,
                 "hfov": 5.23
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_0_HS_1_0_0_map.gif",
                    "height": 57,
                    "class": "ImageResourceLevel",
                    "width": 56
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -5.24,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 177.98,
                 "hfov": 5.23
                }
               ]
              },
              {
               "rollOverDisplay": true,
               "id": "overlay_65E91616_6871_08BC_41D6_30E4148827AB",
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_6E759E6F_6548_F786_41D2_9C84109D05CD, this.camera_79255DA7_6831_1B9C_41AE_F619016A320A); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_0_HS_0_0.png",
                    "height": 542,
                    "class": "ImageResourceLevel",
                    "width": 288
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 180.55,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -4.46,
                 "hfov": 13.42
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_0_HS_0_0_map.gif",
                    "height": 30,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -4.46,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 180.55,
                 "hfov": 13.42
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_65502486_6877_099C_41B9_1BA6F6F17010",
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_6E60B56A_6548_358E_41D8_66EBE7B42117, this.camera_79205DB0_6831_1BF4_41D2_163723807212); this.mainPlayList.set('selectedIndex', 0)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_0_HS_6_0.png",
                    "height": 156,
                    "class": "ImageResourceLevel",
                    "width": 194
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -144.98,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -16.31,
                 "hfov": 8.72
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_0_HS_6_0_0_map.gif",
                    "height": 78,
                    "class": "ImageResourceLevel",
                    "width": 97
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -16.31,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -144.98,
                 "hfov": 8.72
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_r_hq.jpeg",
                "height": 2456,
                "class": "ImageResourceLevel",
                "width": 2456
               },
               {
                "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_f_hq.jpeg",
                "height": 2456,
                "class": "ImageResourceLevel",
                "width": 2456
               },
               {
                "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_b_hq.jpeg",
                "height": 2456,
                "class": "ImageResourceLevel",
                "width": 2456
               },
               {
                "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_u_hq.jpeg",
                "height": 2456,
                "class": "ImageResourceLevel",
                "width": 2456
               },
               {
                "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_d_hq.jpeg",
                "height": 2456,
                "class": "ImageResourceLevel",
                "width": 2456
               },
               {
                "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_l_hq.jpeg",
                "height": 2456,
                "class": "ImageResourceLevel",
                "width": 2456
               },
               {
                "url": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_t.jpg",
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_6D86714C_6548_0D89_41CC_5C97298DA39C"
          },
          "class": "AdjacentPanorama",
          "yaw": -74.53,
          "distance": 1
         },
         {
          "backwardYaw": -96.63,
          "panorama": "this.panorama_6E759E6F_6548_F786_41D2_9C84109D05CD",
          "class": "AdjacentPanorama",
          "yaw": 172.85,
          "distance": 1
         },
         {
          "backwardYaw": 59.7,
          "panorama": {
           "adjacentPanoramas": [
            {
             "backwardYaw": -67.65,
             "panorama": {
              "adjacentPanoramas": [
               {
                "backwardYaw": -79.45,
                "panorama": "this.panorama_6D83627E_6548_0F86_41B9_9154570C04E5",
                "class": "AdjacentPanorama",
                "yaw": -67.65,
                "distance": 1
               }
              ],
              "label": "Masters Bathroom",
              "hfovMax": 120,
              "partial": false,
              "class": "Panorama",
              "hfov": 360,
              "vfov": 180,
              "frames": [
               {
                "overlays": [
                 {
                  "image": {
                   "levels": [
                    {
                     "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_tcap0.png",
                     "height": 850,
                     "class": "ImageResourceLevel",
                     "width": 850
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "id": "panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_tcap0",
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "angle": 0,
                  "inertia": false,
                  "hfov": 72
                 },
                 {
                  "image": {
                   "levels": [
                    {
                     "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_tcap0.png",
                     "height": 850,
                     "class": "ImageResourceLevel",
                     "width": 850
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "id": "panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_ccap0",
                  "class": "CeilingCapPanoramaOverlay",
                  "rotate": false,
                  "angle": 0,
                  "inertia": false,
                  "hfov": 72
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_67D96F4D_6813_18AC_41D4_340D4D58652A",
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_6D83627E_6548_0F86_41B9_9154570C04E5, this.camera_784AEE2C_6831_18EC_41CB_DC9718E61E2F); this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_0_HS_1_0.png",
                       "height": 442,
                       "class": "ImageResourceLevel",
                       "width": 497
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -67.65,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -43.34,
                    "hfov": 16.81
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_0_HS_1_0_0_map.gif",
                       "height": 178,
                       "class": "ImageResourceLevel",
                       "width": 200
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -43.34,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -67.65,
                    "hfov": 16.81
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_67B4D326_6811_089C_41B3_AF26320819FB",
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_0_HS_0_0.png",
                       "height": 163,
                       "class": "ImageResourceLevel",
                       "width": 187
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -78.58,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -19.87,
                    "hfov": 8.19
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_0_HS_0_0_0_map.gif",
                       "height": 81,
                       "class": "ImageResourceLevel",
                       "width": 93
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -19.87,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -78.58,
                    "hfov": 8.19
                   }
                  ]
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_r_hq.jpeg",
                   "height": 2464,
                   "class": "ImageResourceLevel",
                   "width": 2464
                  },
                  {
                   "url": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_f_hq.jpeg",
                   "height": 2464,
                   "class": "ImageResourceLevel",
                   "width": 2464
                  },
                  {
                   "url": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_b_hq.jpeg",
                   "height": 2464,
                   "class": "ImageResourceLevel",
                   "width": 2464
                  },
                  {
                   "url": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_u_hq.jpeg",
                   "height": 2464,
                   "class": "ImageResourceLevel",
                   "width": 2464
                  },
                  {
                   "url": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_d_hq.jpeg",
                   "height": 2464,
                   "class": "ImageResourceLevel",
                   "width": 2464
                  },
                  {
                   "url": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_l_hq.jpeg",
                   "height": 2464,
                   "class": "ImageResourceLevel",
                   "width": 2464
                  },
                  {
                   "url": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_t.jpg",
              "hfovMin": 60,
              "pitch": 0,
              "id": "panorama_6D9C995A_6548_1D8E_41D7_6230013A698E"
             },
             "class": "AdjacentPanorama",
             "yaw": -79.45,
             "distance": 1
            },
            {
             "backwardYaw": 80.72,
             "panorama": "this.panorama_6D8556BC_6548_748A_41D0_726EAA78EE98",
             "class": "AdjacentPanorama",
             "yaw": 57.15,
             "distance": 1
            },
            {
             "backwardYaw": -151.55,
             "panorama": "this.panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772",
             "class": "AdjacentPanorama",
             "yaw": 59.7,
             "distance": 1
            },
            {
             "backwardYaw": -20.21,
             "panorama": "this.panorama_6E60B56A_6548_358E_41D8_66EBE7B42117",
             "class": "AdjacentPanorama",
             "yaw": 56.55,
             "distance": 1
            }
           ],
           "label": "Masters Bedroom",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "image": {
                "levels": [
                 {
                  "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_tcap0.png",
                  "height": 850,
                  "class": "ImageResourceLevel",
                  "width": 850
                 }
                ],
                "class": "ImageResource"
               },
               "id": "panorama_6D83627E_6548_0F86_41B9_9154570C04E5_tcap0",
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "angle": 0,
               "inertia": false,
               "hfov": 73.2
              },
              {
               "image": {
                "levels": [
                 {
                  "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_tcap0.png",
                  "height": 850,
                  "class": "ImageResourceLevel",
                  "width": 850
                 }
                ],
                "class": "ImageResource"
               },
               "id": "panorama_6D83627E_6548_0F86_41B9_9154570C04E5_ccap0",
               "class": "CeilingCapPanoramaOverlay",
               "rotate": false,
               "angle": 0,
               "inertia": false,
               "hfov": 73.2
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_67E82B2A_6812_F894_41C8_6023D4F7378D",
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 7)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_0_HS_1_0.png",
                    "height": 623,
                    "class": "ImageResourceLevel",
                    "width": 480
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -81.22,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -3.46,
                 "hfov": 22.19
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_0_HS_1_0_0_map.gif",
                    "height": 200,
                    "class": "ImageResourceLevel",
                    "width": 154
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -3.46,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -81.22,
                 "hfov": 22.19
                }
               ]
              },
              {
               "rollOverDisplay": true,
               "id": "overlay_7831564A_6811_0894_41CA_1BBC7121C508",
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_6D9C995A_6548_1D8E_41D7_6230013A698E, this.camera_786E5E6A_6831_1894_41A0_8A81EDD01DD7); this.mainPlayList.set('selectedIndex', 7)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_0_HS_0_0.png",
                    "height": 1361,
                    "class": "ImageResourceLevel",
                    "width": 491
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -79.45,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -10.41,
                 "hfov": 22.36
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_0_HS_0_0_map.gif",
                    "height": 44,
                    "class": "ImageResourceLevel",
                    "width": 15
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -10.41,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -79.45,
                 "hfov": 22.36
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_67E41461_6813_0894_41D7_FD684DA3623F",
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_6E60B56A_6548_358E_41D8_66EBE7B42117, this.camera_78637E83_6831_1994_4194_79E6AABDED72); this.mainPlayList.set('selectedIndex', 0)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_0_HS_5_0.png",
                    "height": 246,
                    "class": "ImageResourceLevel",
                    "width": 346
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 56.55,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -26.62,
                 "hfov": 14.34
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_0_HS_5_0_0_map.gif",
                    "height": 123,
                    "class": "ImageResourceLevel",
                    "width": 173
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -26.62,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 56.55,
                 "hfov": 14.34
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_67F71461_6811_0894_41BB_1B089248AEF9",
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772, this.camera_7867DE7B_6831_1975_41D9_3B1069A9E099); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_0_HS_4_0.png",
                    "height": 107,
                    "class": "ImageResourceLevel",
                    "width": 96
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 59.7,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -10.16,
                 "hfov": 4.41
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_0_HS_4_0_0_map.gif",
                    "height": 53,
                    "class": "ImageResourceLevel",
                    "width": 48
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -10.16,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 59.7,
                 "hfov": 4.41
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_67DEC5B6_681F_0BFC_41AE_846ADB95FC2B",
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 5)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_0_HS_3_0.png",
                    "height": 96,
                    "class": "ImageResourceLevel",
                    "width": 94
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 56.17,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -1.33,
                 "hfov": 4.37
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_0_HS_3_0_0_map.gif",
                    "height": 48,
                    "class": "ImageResourceLevel",
                    "width": 47
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -1.33,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 56.17,
                 "hfov": 4.37
                }
               ]
              },
              {
               "rollOverDisplay": true,
               "id": "overlay_7825DAF5_681F_197C_41D3_3B166E113AE6",
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_6D8556BC_6548_748A_41D0_726EAA78EE98, this.camera_786BFE73_6831_1974_41C2_D2C52EEB49A9); this.mainPlayList.set('selectedIndex', 5)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_0_HS_2_0.png",
                    "height": 144,
                    "class": "ImageResourceLevel",
                    "width": 173
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 57.15,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 0.92,
                 "hfov": 8.03
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_0_HS_2_0_map.gif",
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 19
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 0.92,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 57.15,
                 "hfov": 8.03
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_r_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_f_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_b_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_u_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_d_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_l_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_6D83627E_6548_0F86_41B9_9154570C04E5_t.jpg",
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_6D83627E_6548_0F86_41B9_9154570C04E5"
          },
          "class": "AdjacentPanorama",
          "yaw": -151.55,
          "distance": 1
         },
         {
          "backwardYaw": 164.11,
          "panorama": "this.panorama_6E60B56A_6548_358E_41D8_66EBE7B42117",
          "class": "AdjacentPanorama",
          "yaw": -152.16,
          "distance": 1
         }
        ],
        "label": "Dining",
        "hfovMax": 120,
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "frames": [
         {
          "overlays": [
           {
            "image": {
             "levels": [
              {
               "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_tcap0.png",
               "height": 850,
               "class": "ImageResourceLevel",
               "width": 850
              }
             ],
             "class": "ImageResource"
            },
            "id": "panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_tcap0",
            "class": "TripodCapPanoramaOverlay",
            "rotate": false,
            "angle": 0,
            "inertia": false,
            "hfov": 69.6
           },
           {
            "image": {
             "levels": [
              {
               "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_tcap0.png",
               "height": 850,
               "class": "ImageResourceLevel",
               "width": 850
              }
             ],
             "class": "ImageResource"
            },
            "id": "panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_ccap0",
            "class": "CeilingCapPanoramaOverlay",
            "rotate": false,
            "angle": 0,
            "inertia": false,
            "hfov": 70.8
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_656416B6_6871_09FC_41D5_D4C030990913",
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_1_0.png",
                 "height": 173,
                 "class": "ImageResourceLevel",
                 "width": 224
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 166.42,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -12.79,
              "hfov": 10.26
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_1_0_0_map.gif",
                 "height": 86,
                 "class": "ImageResourceLevel",
                 "width": 112
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -12.79,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 166.42,
              "hfov": 10.26
             }
            ]
           },
           {
            "rollOverDisplay": true,
            "id": "overlay_6621693E_686F_78EC_41C4_276104B58799",
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_6E759E6F_6548_F786_41D2_9C84109D05CD, this.camera_787D0E46_6831_189C_41B8_7FC571AE8B1B); this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_0_0.png",
                 "height": 676,
                 "class": "ImageResourceLevel",
                 "width": 538
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 172.85,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -8.41,
              "hfov": 24.98
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_0_0_map.gif",
                 "height": 20,
                 "class": "ImageResourceLevel",
                 "width": 16
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -8.41,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 172.85,
              "hfov": 24.98
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_65F13726_6813_089C_4194_879097AA54C1",
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_6E60B56A_6548_358E_41D8_66EBE7B42117, this.camera_78750E59_6831_18B4_416C_DE1F846CAEE4); this.mainPlayList.set('selectedIndex', 0)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_2_0.png",
                 "height": 126,
                 "class": "ImageResourceLevel",
                 "width": 145
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -152.16,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -17.08,
              "hfov": 6.51
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_2_0_0_map.gif",
                 "height": 63,
                 "class": "ImageResourceLevel",
                 "width": 72
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -17.08,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -152.16,
              "hfov": 6.51
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_65FD442E_6817_08EC_419F_5ADD4E56A2A3",
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 6)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_8_0.png",
                 "height": 65,
                 "class": "ImageResourceLevel",
                 "width": 74
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -151.91,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -11.22,
              "hfov": 3.45
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_8_0_0_map.gif",
                 "height": 32,
                 "class": "ImageResourceLevel",
                 "width": 37
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -11.22,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -151.91,
              "hfov": 3.45
             }
            ]
           },
           {
            "rollOverDisplay": true,
            "id": "overlay_66163646_6811_089C_41D0_0C6F882E3A1C",
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_6D83627E_6548_0F86_41B9_9154570C04E5, this.camera_78793E4F_6831_18AC_41D6_0834C448BF6D); this.mainPlayList.set('selectedIndex', 6)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_7_0.png",
                 "height": 206,
                 "class": "ImageResourceLevel",
                 "width": 155
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -151.55,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -5.15,
              "hfov": 7.26
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_7_0_map.gif",
                 "height": 21,
                 "class": "ImageResourceLevel",
                 "width": 16
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -5.15,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -151.55,
              "hfov": 7.26
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_6606EDE6_6811_1B9C_41D3_E6D0A523E90F",
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 5)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_6_0.png",
                 "height": 371,
                 "class": "ImageResourceLevel",
                 "width": 366
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 1.39,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -3.22,
              "hfov": 17.15
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_6_0_0_map.gif",
                 "height": 185,
                 "class": "ImageResourceLevel",
                 "width": 183
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -3.22,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 1.39,
              "hfov": 17.15
             }
            ]
           },
           {
            "rollOverDisplay": true,
            "id": "overlay_6696E425_6811_089C_41A9_C4B9D8802474",
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_6D8556BC_6548_748A_41D0_726EAA78EE98, this.camera_78456E35_6831_18FC_41D1_911149C37C91); this.mainPlayList.set('selectedIndex', 5)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_5_0.png",
                 "height": 1007,
                 "class": "ImageResourceLevel",
                 "width": 656
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 4.93,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -7.52,
              "hfov": 30.56
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_5_0_map.gif",
                 "height": 24,
                 "class": "ImageResourceLevel",
                 "width": 16
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -7.52,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 4.93,
              "hfov": 30.56
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_66707316_6813_08BC_41C6_952882242DD3",
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_4_0.png",
                 "height": 206,
                 "class": "ImageResourceLevel",
                 "width": 193
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -80.78,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -9.01,
              "hfov": 8.98
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_4_0_0_map.gif",
                 "height": 103,
                 "class": "ImageResourceLevel",
                 "width": 96
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -9.01,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -80.78,
              "hfov": 8.98
             }
            ]
           },
           {
            "rollOverDisplay": true,
            "id": "overlay_669F4851_6813_38B4_41D8_78BD6B5A8D72",
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_6D86714C_6548_0D89_41CC_5C97298DA39C, this.camera_7841BE3D_6831_18EC_41D7_4BDC36D6C997); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_3_0.png",
                 "height": 1153,
                 "class": "ImageResourceLevel",
                 "width": 597
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -74.53,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -20.54,
              "hfov": 26.26
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_0_HS_3_0_map.gif",
                 "height": 30,
                 "class": "ImageResourceLevel",
                 "width": 16
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -20.54,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -74.53,
              "hfov": 26.26
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_r_hq.jpeg",
             "height": 2440,
             "class": "ImageResourceLevel",
             "width": 2440
            },
            {
             "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_f_hq.jpeg",
             "height": 2440,
             "class": "ImageResourceLevel",
             "width": 2440
            },
            {
             "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_b_hq.jpeg",
             "height": 2440,
             "class": "ImageResourceLevel",
             "width": 2440
            },
            {
             "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_u_hq.jpeg",
             "height": 2440,
             "class": "ImageResourceLevel",
             "width": 2440
            },
            {
             "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_d_hq.jpeg",
             "height": 2440,
             "class": "ImageResourceLevel",
             "width": 2440
            },
            {
             "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_l_hq.jpeg",
             "height": 2440,
             "class": "ImageResourceLevel",
             "width": 2440
            },
            {
             "url": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_t.jpg",
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772"
       },
       "class": "AdjacentPanorama",
       "yaw": 72.63,
       "distance": 1
      },
      {
       "backwardYaw": 57.15,
       "panorama": "this.panorama_6D83627E_6548_0F86_41B9_9154570C04E5",
       "class": "AdjacentPanorama",
       "yaw": 80.72,
       "distance": 1
      },
      {
       "backwardYaw": 135.97,
       "panorama": "this.panorama_6E60B56A_6548_358E_41D8_66EBE7B42117",
       "class": "AdjacentPanorama",
       "yaw": 80.01,
       "distance": 1
      }
     ],
     "label": "Balcony",
     "hfovMax": 120,
     "partial": false,
     "class": "Panorama",
     "hfov": 360,
     "vfov": 180,
     "frames": [
      {
       "overlays": [
        {
         "image": {
          "levels": [
           {
            "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_tcap0.png",
            "height": 850,
            "class": "ImageResourceLevel",
            "width": 850
           }
          ],
          "class": "ImageResource"
         },
         "id": "panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_tcap0",
         "class": "TripodCapPanoramaOverlay",
         "rotate": false,
         "angle": 0,
         "inertia": false,
         "hfov": 69.6
        },
        {
         "image": {
          "levels": [
           {
            "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_tcap0.png",
            "height": 850,
            "class": "ImageResourceLevel",
            "width": 850
           }
          ],
          "class": "ImageResource"
         },
         "id": "panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_ccap0",
         "class": "CeilingCapPanoramaOverlay",
         "rotate": false,
         "angle": 0,
         "inertia": false,
         "hfov": 70.8
        },
        {
         "id": "overlay_6E137B0D_6538_1D8A_41C4_E55A921C41CE",
         "class": "LensFlarePanoramaOverlay",
         "bleachingDistance": 0.4,
         "pitch": 50.86,
         "bleaching": 0.7,
         "yaw": -104.72
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_668E2E9A_6811_39B4_4194_9EDE2949C019",
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772, this.camera_792DCD83_6831_1B94_41A9_88240CC7855A); this.mainPlayList.set('selectedIndex', 4)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_0_HS_3_0.png",
              "height": 243,
              "class": "ImageResourceLevel",
              "width": 276
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 72.63,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -25.89,
           "hfov": 11.65
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_0_HS_3_0_0_map.gif",
              "height": 121,
              "class": "ImageResourceLevel",
              "width": 138
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -25.89,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 72.63,
           "hfov": 11.65
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_674EED49_682E_F894_41D2_E89DBF6A2444",
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_6E60B56A_6548_358E_41D8_66EBE7B42117, this.camera_7928BD96_6831_1BBC_41D6_67835C5904E9); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_0_HS_2_0.png",
              "height": 91,
              "class": "ImageResourceLevel",
              "width": 89
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 80.01,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -10.81,
           "hfov": 4.12
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_0_HS_2_0_0_map.gif",
              "height": 45,
              "class": "ImageResourceLevel",
              "width": 44
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -10.81,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 80.01,
           "hfov": 4.12
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_6745649A_6833_09B4_41C1_782C98675B57",
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 6)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_0_HS_1_0.png",
              "height": 35,
              "class": "ImageResourceLevel",
              "width": 50
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 81.62,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -7.68,
           "hfov": 2.34
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_0_HS_1_0_0_map.gif",
              "height": 17,
              "class": "ImageResourceLevel",
              "width": 25
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -7.68,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 81.62,
           "hfov": 2.34
          }
         ]
        },
        {
         "rollOverDisplay": true,
         "id": "overlay_679DDC72_6831_1974_41D5_A1CBD3B9870B",
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_6D83627E_6548_0F86_41B9_9154570C04E5, this.camera_792E6D8C_6831_1BAC_41D3_B6BBA6C03B38); this.mainPlayList.set('selectedIndex', 6)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_0_HS_0_0.png",
              "height": 127,
              "class": "ImageResourceLevel",
              "width": 112
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 80.72,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -3.87,
           "hfov": 5.28
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_0_HS_0_0_map.gif",
              "height": 18,
              "class": "ImageResourceLevel",
              "width": 16
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -3.87,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 80.72,
           "hfov": 5.28
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_r_hq.jpeg",
          "height": 2440,
          "class": "ImageResourceLevel",
          "width": 2440
         },
         {
          "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_f_hq.jpeg",
          "height": 2440,
          "class": "ImageResourceLevel",
          "width": 2440
         },
         {
          "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_b_hq.jpeg",
          "height": 2440,
          "class": "ImageResourceLevel",
          "width": 2440
         },
         {
          "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_u_hq.jpeg",
          "height": 2440,
          "class": "ImageResourceLevel",
          "width": 2440
         },
         {
          "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_d_hq.jpeg",
          "height": 2440,
          "class": "ImageResourceLevel",
          "width": 2440
         },
         {
          "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_l_hq.jpeg",
          "height": 2440,
          "class": "ImageResourceLevel",
          "width": 2440
         },
         {
          "url": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_t.jpg",
     "hfovMin": 60,
     "pitch": 0,
     "id": "panorama_6D8556BC_6548_748A_41D0_726EAA78EE98"
    },
    "class": "AdjacentPanorama",
    "yaw": 135.97,
    "distance": 1
   },
   {
    "backwardYaw": -144.98,
    "panorama": "this.panorama_6D86714C_6548_0D89_41CC_5C97298DA39C",
    "class": "AdjacentPanorama",
    "yaw": 113.01,
    "distance": 1
   },
   {
    "backwardYaw": 131.36,
    "panorama": "this.panorama_6E759E6F_6548_F786_41D2_9C84109D05CD",
    "class": "AdjacentPanorama",
    "yaw": -158.66,
    "distance": 1
   },
   {
    "backwardYaw": -152.16,
    "panorama": "this.panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772",
    "class": "AdjacentPanorama",
    "yaw": 164.11,
    "distance": 1
   },
   {
    "backwardYaw": 48.13,
    "panorama": {
     "adjacentPanoramas": [
      {
       "backwardYaw": 37.89,
       "panorama": "this.panorama_6E60B56A_6548_358E_41D8_66EBE7B42117",
       "class": "AdjacentPanorama",
       "yaw": 48.13,
       "distance": 1
      }
     ],
     "label": "Powder Room",
     "hfovMax": 120,
     "partial": false,
     "class": "Panorama",
     "hfov": 360,
     "vfov": 180,
     "frames": [
      {
       "overlays": [
        {
         "image": {
          "levels": [
           {
            "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_tcap0.png",
            "height": 850,
            "class": "ImageResourceLevel",
            "width": 850
           }
          ],
          "class": "ImageResource"
         },
         "id": "panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_tcap0",
         "class": "TripodCapPanoramaOverlay",
         "rotate": false,
         "angle": 0,
         "inertia": false,
         "hfov": 73.2
        },
        {
         "image": {
          "levels": [
           {
            "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_tcap0.png",
            "height": 850,
            "class": "ImageResourceLevel",
            "width": 850
           }
          ],
          "class": "ImageResource"
         },
         "id": "panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_ccap0",
         "class": "CeilingCapPanoramaOverlay",
         "rotate": false,
         "angle": 0,
         "inertia": false,
         "hfov": 73.2
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_63621AFA_6812_F974_41A9_0600761DDCE7",
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_0_HS_1_0.png",
              "height": 332,
              "class": "ImageResourceLevel",
              "width": 345
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 43.51,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -30.86,
           "hfov": 13.76
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_0_HS_1_0_0_map.gif",
              "height": 166,
              "class": "ImageResourceLevel",
              "width": 172
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -30.86,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 43.51,
           "hfov": 13.76
          }
         ]
        },
        {
         "rollOverDisplay": true,
         "id": "overlay_643A53F2_6811_0F74_41BA_CD84F2B458EB",
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_6E60B56A_6548_358E_41D8_66EBE7B42117, this.camera_7872AE62_6831_1894_41B9_3125E1BAF358); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_0_HS_0_0.png",
              "height": 1162,
              "class": "ImageResourceLevel",
              "width": 523
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 48.13,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -21.26,
           "hfov": 22.6
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_0_HS_0_0_map.gif",
              "height": 35,
              "class": "ImageResourceLevel",
              "width": 16
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -21.26,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 48.13,
           "hfov": 22.6
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_r_hq.jpeg",
          "height": 2472,
          "class": "ImageResourceLevel",
          "width": 2472
         },
         {
          "url": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_f_hq.jpeg",
          "height": 2472,
          "class": "ImageResourceLevel",
          "width": 2472
         },
         {
          "url": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_b_hq.jpeg",
          "height": 2472,
          "class": "ImageResourceLevel",
          "width": 2472
         },
         {
          "url": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_u_hq.jpeg",
          "height": 2472,
          "class": "ImageResourceLevel",
          "width": 2472
         },
         {
          "url": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_d_hq.jpeg",
          "height": 2472,
          "class": "ImageResourceLevel",
          "width": 2472
         },
         {
          "url": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_l_hq.jpeg",
          "height": 2472,
          "class": "ImageResourceLevel",
          "width": 2472
         },
         {
          "url": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_t.jpg",
     "hfovMin": 60,
     "pitch": 0,
     "id": "panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF"
    },
    "class": "AdjacentPanorama",
    "yaw": 37.89,
    "distance": 1
   },
   {
    "backwardYaw": 56.55,
    "panorama": "this.panorama_6D83627E_6548_0F86_41B9_9154570C04E5",
    "class": "AdjacentPanorama",
    "yaw": -20.21,
    "distance": 1
   }
  ],
  "label": "Main Area",
  "hfovMax": 120,
  "partial": false,
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "overlays": [
     {
      "image": {
       "levels": [
        {
         "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_tcap0.png",
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850
        }
       ],
       "class": "ImageResource"
      },
      "id": "panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_tcap0",
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "angle": 0,
      "inertia": false,
      "hfov": 69.6
     },
     {
      "image": {
       "levels": [
        {
         "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_tcap0.png",
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850
        }
       ],
       "class": "ImageResource"
      },
      "id": "panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_ccap0",
      "class": "CeilingCapPanoramaOverlay",
      "rotate": false,
      "angle": 0,
      "inertia": false,
      "hfov": 70.8
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_6F5223A6_67F2_A048_41C2_A9FF6BACE307",
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_9_0.png",
           "height": 324,
           "class": "ImageResourceLevel",
           "width": 310
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -27.73,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -29.15,
        "hfov": 12.68
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_9_0_0_map.gif",
           "height": 162,
           "class": "ImageResourceLevel",
           "width": 155
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -29.15,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -27.73,
        "hfov": 12.68
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_6EEFAF03_67FD_E048_41C2_5E75599E1E1E",
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_8_0.png",
           "height": 270,
           "class": "ImageResourceLevel",
           "width": 270
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 30.6,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -2.69,
        "hfov": 12.63
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_8_0_0_map.gif",
           "height": 135,
           "class": "ImageResourceLevel",
           "width": 135
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.69,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 30.6,
        "hfov": 12.63
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_6ECBB707_67F5_6048_41B1_948A3F40B3E1",
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_7_0.png",
           "height": 255,
           "class": "ImageResourceLevel",
           "width": 205
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -173.68,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -18.45,
        "hfov": 9.11
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_7_0_0_map.gif",
           "height": 127,
           "class": "ImageResourceLevel",
           "width": 102
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.45,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -173.68,
        "hfov": 9.11
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "id": "overlay_6E3D3C8E_67F6_A058_41D7_3FAC7F6E7FAE",
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_6E759E6F_6548_F786_41D2_9C84109D05CD, this.camera_78553E09_6831_1894_41B4_A6EFBBBB1405); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_6_0.png",
           "height": 1117,
           "class": "ImageResourceLevel",
           "width": 1208
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -158.66,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -23.75,
        "hfov": 51.79
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_6_0_map.gif",
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 17
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -23.75,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -158.66,
        "hfov": 51.79
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "id": "overlay_6F113771_67F3_1774_41B7_D25F8B2D5F3F",
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF, this.camera_78530E1B_6831_18B4_41D4_4FCD38881889); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_5_0.png",
           "height": 1555,
           "class": "ImageResourceLevel",
           "width": 1106
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 37.89,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -21.83,
        "hfov": 48.08
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_5_0_map.gif",
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -21.83,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 37.89,
        "hfov": 48.08
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "id": "overlay_6E8044A3_67F7_0995_41C2_5C091708F471",
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_6D83627E_6548_0F86_41B9_9154570C04E5, this.camera_784FCE23_6831_1894_41AA_84084B7802F6); this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_4_0.png",
           "height": 1144,
           "class": "ImageResourceLevel",
           "width": 815
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -20.21,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -21.83,
        "hfov": 35.41
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_4_0_map.gif",
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -21.83,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -20.21,
        "hfov": 35.41
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_6EB783DA_67F3_0FB4_418F_DD266DAED5CB",
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_6D86714C_6548_0D89_41CC_5C97298DA39C, this.camera_785BFDFF_6831_1B6C_41CC_78397B6A8982); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_3_0.png",
           "height": 174,
           "class": "ImageResourceLevel",
           "width": 188
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 113.01,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -3.5,
        "hfov": 8.83
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_3_0_0_map.gif",
           "height": 87,
           "class": "ImageResourceLevel",
           "width": 94
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.5,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 113.01,
        "hfov": 8.83
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "id": "overlay_6E3B176B_67F7_0894_41D9_0124C8CB6B88",
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_2_0.png",
           "height": 972,
           "class": "ImageResourceLevel",
           "width": 572
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 118.61,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -12.73,
        "hfov": 26.12
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_2_0_map.gif",
           "height": 27,
           "class": "ImageResourceLevel",
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.73,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 118.61,
        "hfov": 26.12
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "id": "overlay_6E2F76F3_67F3_0974_41C7_CEDF787CD5E8",
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_1_0.png",
           "height": 480,
           "class": "ImageResourceLevel",
           "width": 350
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 166.19,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -4.5,
        "hfov": 16.37
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_1_0_map.gif",
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.5,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 166.19,
        "hfov": 16.37
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_6E5DB29A_67EF_09B4_41BF_5BEA57FC4FC1",
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772, this.camera_7851CE12_6831_18B4_4188_7C09502B4F21); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_0_0.png",
           "height": 125,
           "class": "ImageResourceLevel",
           "width": 140
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 164.11,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -2.86,
        "hfov": 6.56
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_0_0_0_map.gif",
           "height": 62,
           "class": "ImageResourceLevel",
           "width": 70
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.86,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 164.11,
        "hfov": 6.56
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_63B189EE_6817_3B6C_41AB_AC5879909534",
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_11_0.png",
           "height": 106,
           "class": "ImageResourceLevel",
           "width": 106
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 135.84,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -1.81,
        "hfov": 4.97
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_11_0_0_map.gif",
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 53
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.81,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 135.84,
        "hfov": 4.97
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "id": "overlay_645686B6_6817_09FC_41CC_787A24B4054E",
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_6D8556BC_6548_748A_41D0_726EAA78EE98, this.camera_78581DF7_6831_1B7C_41D1_D5F57C33B76D); this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_10_0.png",
           "height": 539,
           "class": "ImageResourceLevel",
           "width": 239
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 135.97,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -7.44,
        "hfov": 11.1
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_0_HS_10_0_map.gif",
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 15
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.44,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 135.97,
        "hfov": 11.1
       }
      ]
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_r_hq.jpeg",
       "height": 2448,
       "class": "ImageResourceLevel",
       "width": 2448
      },
      {
       "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_f_hq.jpeg",
       "height": 2448,
       "class": "ImageResourceLevel",
       "width": 2448
      },
      {
       "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_b_hq.jpeg",
       "height": 2448,
       "class": "ImageResourceLevel",
       "width": 2448
      },
      {
       "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_u_hq.jpeg",
       "height": 2448,
       "class": "ImageResourceLevel",
       "width": 2448
      },
      {
       "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_d_hq.jpeg",
       "height": 2448,
       "class": "ImageResourceLevel",
       "width": 2448
      },
      {
       "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_l_hq.jpeg",
       "height": 2448,
       "class": "ImageResourceLevel",
       "width": 2448
      },
      {
       "url": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_t.jpg"
   }
  ],
  "thumbnailUrl": "media/panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_t.jpg",
  "hfovMin": 60,
  "pitch": 0,
  "id": "panorama_6E60B56A_6548_358E_41D8_66EBE7B42117"
 },
 {
  "touchControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false,
  "class": "PanoramaPlayer"
 },
 {
  "id": "panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": -1.68,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": -164.1
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF",
 {
  "id": "panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": -16.46,
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 178.57
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6E759E6F_6548_F786_41D2_9C84109D05CD",
 {
  "id": "panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0.87,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -144.56
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6D86714C_6548_0D89_41CC_5C97298DA39C",
 {
  "id": "panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": -0.07,
   "class": "PanoramaCameraPosition",
   "hfov": 104,
   "yaw": 173.18
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772",
 {
  "id": "panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": -15.24,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": 78.15
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6D8556BC_6548_748A_41D0_726EAA78EE98",
 {
  "id": "panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0.2,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": -140.64
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6D83627E_6548_0F86_41B9_9154570C04E5",
 {
  "id": "panorama_6D83627E_6548_0F86_41B9_9154570C04E5_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": -11.08,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 177.95
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_6D9C995A_6548_1D8E_41D7_6230013A698E",
 {
  "id": "panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": -10.12,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": 145.63
  },
  "automaticZoomSpeed": 10
 },
 {
  "items": [
   {
    "media": "this.panorama_6E60B56A_6548_358E_41D8_66EBE7B42117",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_6E759E6F_6548_F786_41D2_9C84109D05CD",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_6D86714C_6548_0D89_41CC_5C97298DA39C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_6D8556BC_6548_748A_41D0_726EAA78EE98",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "media": "this.panorama_6D83627E_6548_0F86_41B9_9154570C04E5",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D83627E_6548_0F86_41B9_9154570C04E5_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "media": "this.panorama_6D9C995A_6548_1D8E_41D7_6230013A698E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_6E60B56A_6548_358E_41D8_66EBE7B42117",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6E60B56A_6548_358E_41D8_66EBE7B42117_camera",
    "begin": "this.setEndToItemIndex(this.playList_64BB397D_6348_19C7_41B1_F9D014F533B8, 0, 1)"
   },
   {
    "media": "this.panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D81D2BD_6548_0C8A_41D4_3D344F26F4AF_camera",
    "begin": "this.setEndToItemIndex(this.playList_64BB397D_6348_19C7_41B1_F9D014F533B8, 1, 2)"
   },
   {
    "media": "this.panorama_6E759E6F_6548_F786_41D2_9C84109D05CD",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6E759E6F_6548_F786_41D2_9C84109D05CD_camera",
    "begin": "this.setEndToItemIndex(this.playList_64BB397D_6348_19C7_41B1_F9D014F533B8, 2, 3)"
   },
   {
    "media": "this.panorama_6D86714C_6548_0D89_41CC_5C97298DA39C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D86714C_6548_0D89_41CC_5C97298DA39C_camera",
    "begin": "this.setEndToItemIndex(this.playList_64BB397D_6348_19C7_41B1_F9D014F533B8, 3, 4)"
   },
   {
    "media": "this.panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D83C478_6548_0B8A_41D3_1F70EF7FB772_camera",
    "begin": "this.setEndToItemIndex(this.playList_64BB397D_6348_19C7_41B1_F9D014F533B8, 4, 5)"
   },
   {
    "media": "this.panorama_6D8556BC_6548_748A_41D0_726EAA78EE98",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D8556BC_6548_748A_41D0_726EAA78EE98_camera",
    "begin": "this.setEndToItemIndex(this.playList_64BB397D_6348_19C7_41B1_F9D014F533B8, 5, 6)"
   },
   {
    "media": "this.panorama_6D83627E_6548_0F86_41B9_9154570C04E5",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D83627E_6548_0F86_41B9_9154570C04E5_camera",
    "begin": "this.setEndToItemIndex(this.playList_64BB397D_6348_19C7_41B1_F9D014F533B8, 6, 7)"
   },
   {
    "media": "this.panorama_6D9C995A_6548_1D8E_41D7_6230013A698E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D9C995A_6548_1D8E_41D7_6230013A698E_camera",
    "begin": "this.setEndToItemIndex(this.playList_64BB397D_6348_19C7_41B1_F9D014F533B8, 7, 0)"
   }
  ],
  "id": "playList_64BB397D_6348_19C7_41B1_F9D014F533B8",
  "class": "PlayList"
 },
 {
  "id": "camera_792DCD83_6831_1B94_41A9_88240CC7855A",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": -175.07
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_792E6D8C_6831_1BAC_41D3_B6BBA6C03B38",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -122.85
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_7928BD96_6831_1BBC_41D6_67835C5904E9",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": -44.03
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_792A2D9F_6831_1BAD_41C3_5FCEFDF32AB9",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": 105.47
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_79255DA7_6831_1B9C_41AE_F619016A320A",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 22.91
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_79205DB0_6831_1BF4_41D2_163723807212",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": -66.99
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_78231DDD_6831_1BAC_41AD_B242324C7F97",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 104,
   "yaw": 0.55
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_785DADE6_6831_1B9C_41D1_6A4CD2E16BB1",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": 21.34
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_785E2DEE_6831_1B6C_41A3_F2847735C0FB",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": -7.15
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_78581DF7_6831_1B7C_41D1_D5F57C33B76D",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": -99.99
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_785BFDFF_6831_1B6C_41CC_78397B6A8982",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 104,
   "yaw": 35.02
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_78553E09_6831_1894_41B4_A6EFBBBB1405",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -48.64
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_7851CE12_6831_18B4_4188_7C09502B4F21",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": 27.84
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_78530E1B_6831_18B4_41D4_4FCD38881889",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -131.87
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_784FCE23_6831_1894_41AA_84084B7802F6",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -123.45
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_784AEE2C_6831_18EC_41CB_DC9718E61E2F",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 100.55
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_78456E35_6831_18FC_41D1_911149C37C91",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": -107.37
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_7841BE3D_6831_18EC_41D7_4BDC36D6C997",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 104,
   "yaw": -30.83
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_787D0E46_6831_189C_41B8_7FC571AE8B1B",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 83.37
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_78793E4F_6831_18AC_41D6_0834C448BF6D",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": -120.3
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_78750E59_6831_18B4_416C_DE1F846CAEE4",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": -15.89
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_7872AE62_6831_1894_41B9_3125E1BAF358",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": -142.11
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_786E5E6A_6831_1894_41A0_8A81EDD01DD7",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": 112.35
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_786BFE73_6831_1974_41C2_D2C52EEB49A9",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": -99.28
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_7867DE7B_6831_1975_41D9_3B1069A9E099",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": 28.45
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_78637E83_6831_1994_4194_79E6AABDED72",
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 105,
   "yaw": 159.79
  },
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "toolTipFontFamily": "Arial",
  "toolTipFontWeight": "normal",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "toolTipBorderRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontSize": 12,
  "toolTipTextShadowBlurRadius": 3,
  "shadow": false,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "toolTipOpacity": 1,
  "toolTipPaddingRight": 6,
  "paddingBottom": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressLeft": 0,
  "playbackBarBorderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "toolTipShadowSpread": 0,
  "playbackBarLeft": 0,
  "borderSize": 0,
  "width": "100%",
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadowColor": "#000000",
  "id": "MainViewer",
  "playbackBarHeadBorderSize": 0,
  "paddingRight": 0,
  "progressRight": 0,
  "progressOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingBottom": 4,
  "toolTipPaddingLeft": 6,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "height": "100%",
  "progressBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "playbackBarBottom": 5,
  "progressBorderColor": "#000000",
  "progressBottom": 0,
  "minHeight": 50,
  "progressHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "paddingTop": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderSize": 0,
  "minWidth": 100,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeight": 10,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarRight": 0
 },
 {
  "scrollBarColor": "#000000",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "scrollBarColor": "#FFFFFF",
    "itemLabelTextDecoration": "none",
    "gap": 10,
    "itemBackgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "itemThumbnailShadowBlurRadius": 4,
    "backgroundColorDirection": "vertical",
    "itemThumbnailShadow": true,
    "itemLabelFontSize": 14,
    "itemThumbnailWidth": 100,
    "itemPaddingLeft": 3,
    "itemThumbnailShadowColor": "#000000",
    "maxHeight": 600,
    "itemPaddingTop": 3,
    "maxWidth": 800,
    "itemPaddingBottom": 3,
    "itemLabelFontStyle": "normal",
    "paddingLeft": 20,
    "itemPaddingRight": 3,
    "borderRadius": 5,
    "itemLabelPosition": "bottom",
    "itemLabelFontColor": "#FFFFFF",
    "playList": "this.playList_64BB397D_6348_19C7_41B1_F9D014F533B8",
    "itemThumbnailShadowSpread": 1,
    "itemLabelGap": 5,
    "itemThumbnailHeight": 75,
    "selectedItemLabelFontWeight": "bold",
    "layout": "horizontal",
    "backgroundColorRatios": [
     0
    ],
    "itemBackgroundOpacity": 0,
    "verticalAlign": "top",
    "minHeight": 0,
    "itemMode": "normal",
    "itemBorderRadius": 0,
    "scrollBarVisible": "rollOver",
    "paddingTop": 10,
    "itemBackgroundColorRatios": [],
    "scrollBarWidth": 10,
    "itemOpacity": 1,
    "shadow": false,
    "itemThumbnailOpacity": 1,
    "itemThumbnailScaleMode": "fit_outside",
    "minWidth": 0,
    "class": "ThumbnailList",
    "scrollBarMargin": 2,
    "itemHorizontalAlign": "center",
    "itemLabelFontFamily": "Arial",
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadowHorizontalLength": 3,
    "paddingBottom": 10,
    "backgroundOpacity": 0.2,
    "itemThumbnailShadowVerticalLength": 3,
    "itemVerticalAlign": "middle",
    "itemThumbnailShadowOpacity": 0.8,
    "backgroundColor": [
     "#000000"
    ],
    "itemBackgroundColor": [],
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailBorderRadius": 5,
    "horizontalAlign": "left",
    "borderSize": 0,
    "paddingRight": 20
   }
  ],
  "bottom": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "contentOpaque": false,
  "layout": "horizontal",
  "verticalAlign": "bottom",
  "minHeight": 20,
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "shadow": false,
  "minWidth": 20,
  "class": "Container",
  "scrollBarMargin": 2,
  "left": 0,
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "right": 0,
  "overflow": "visible",
  "horizontalAlign": "center",
  "height": 200,
  "borderSize": 0,
  "paddingRight": 0
 }
], 
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "start": "this.syncPlaylists([this.playList_64BB397D_6348_19C7_41B1_F9D014F533B8,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "scripts": {
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "existsKey": function(key){    return key in window; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "registerKey": function(key, value){    window[key] = value; },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "getKey": function(key){    return window[key]; },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "unregisterKey": function(key){    delete window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } }
 },
 "paddingLeft": 0,
 "borderRadius": 0,
 "contentOpaque": false,
 "id": "rootPlayer",
 "layout": "absolute",
 "verticalAlign": "top",
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "shadow": false,
 "minWidth": 20,
 "class": "Player",
 "scrollBarMargin": 2,
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "width": "100%",
 "backgroundPreloadEnabled": true,
 "horizontalAlign": "left",
 "paddingRight": 0
})