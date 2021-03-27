TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "partial": false,
  "label": "Outdoor",
  "hfovMax": 120,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "backwardYaw": -2.78,
    "panorama": {
     "class": "Panorama",
     "partial": false,
     "label": "Main Area View 1",
     "hfovMax": 120,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "backwardYaw": 167.96,
       "panorama": "this.panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A",
       "class": "AdjacentPanorama",
       "yaw": -2.78,
       "distance": 1
      },
      {
       "backwardYaw": 0.87,
       "panorama": {
        "class": "Panorama",
        "partial": false,
        "label": "Main Area View 2",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "backwardYaw": -8.68,
          "panorama": {
           "class": "Panorama",
           "partial": false,
           "label": "Main Area View 3",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "backwardYaw": 151.14,
             "panorama": {
              "class": "Panorama",
              "partial": false,
              "label": "Ground Floor Stair",
              "hfovMax": 120,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "backwardYaw": -81.6,
                "panorama": "this.panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D",
                "class": "AdjacentPanorama",
                "yaw": 151.14,
                "distance": 1
               },
               {
                "backwardYaw": 16.62,
                "panorama": {
                 "class": "Panorama",
                 "partial": false,
                 "label": "First Floor Stairs",
                 "hfovMax": 128.08,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": -16.09,
                   "panorama": {
                    "class": "Panorama",
                    "partial": false,
                    "label": "Rooftop",
                    "hfovMax": 125,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": 53.31,
                      "panorama": "this.panorama_0AFAED12_0C37_3826_419F_8BE0E298121A",
                      "class": "AdjacentPanorama",
                      "yaw": -16.09,
                      "distance": 1
                     }
                    ],
                    "id": "panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35",
                    "hfov": 360,
                    "thumbnailUrl": "media/panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_t.jpg",
                    "vfov": 180,
                    "pitch": 0,
                    "frames": [
                     {
                      "right": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_r_hq.jpeg",
                         "height": 2440,
                         "class": "ImageResourceLevel",
                         "width": 2440
                        },
                        {
                         "url": "media/panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "front": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_f_hq.jpeg",
                         "height": 2440,
                         "class": "ImageResourceLevel",
                         "width": 2440
                        },
                        {
                         "url": "media/panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "class": "CubicPanoramaFrame",
                      "back": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_b_hq.jpeg",
                         "height": 2440,
                         "class": "ImageResourceLevel",
                         "width": 2440
                        },
                        {
                         "url": "media/panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "top": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_u_hq.jpeg",
                         "height": 2440,
                         "class": "ImageResourceLevel",
                         "width": 2440
                        },
                        {
                         "url": "media/panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                           "height": 850,
                           "class": "ImageResourceLevel",
                           "width": 850
                          }
                         ]
                        },
                        "inertia": false,
                        "id": "panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_tcap0",
                        "hfov": 70.8,
                        "class": "TripodCapPanoramaOverlay",
                        "rotate": false,
                        "angle": 0
                       },
                       {
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                           "height": 850,
                           "class": "ImageResourceLevel",
                           "width": 850
                          }
                         ]
                        },
                        "inertia": false,
                        "id": "panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_ccap0",
                        "hfov": 69.6,
                        "class": "CeilingCapPanoramaOverlay",
                        "rotate": false,
                        "angle": 0
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_0054FCD2_10DE_E0F8_41A8_F78055B5A7AD",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_0_HS_0_0.png",
                             "height": 236,
                             "class": "ImageResourceLevel",
                             "width": 238
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 11.19,
                          "pitch": 2.35,
                          "yaw": -16.09
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_0AFAED12_0C37_3826_419F_8BE0E298121A, this.camera_09E1CECE_10CB_20E9_41B1_2DE291929D27); this.mainPlayList.set('selectedIndex', 8)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_0_HS_0_0_0_map.gif",
                             "height": 118,
                             "class": "ImageResourceLevel",
                             "width": 119
                            }
                           ]
                          },
                          "pitch": 2.35,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -16.09,
                          "hfov": 11.19
                         }
                        ]
                       }
                      ],
                      "bottom": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_d_hq.jpeg",
                         "height": 2440,
                         "class": "ImageResourceLevel",
                         "width": 2440
                        },
                        {
                         "url": "media/panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "left": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_l_hq.jpeg",
                         "height": 2440,
                         "class": "ImageResourceLevel",
                         "width": 2440
                        },
                        {
                         "url": "media/panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_t.jpg"
                     }
                    ]
                   },
                   "class": "AdjacentPanorama",
                   "yaw": 53.31,
                   "distance": 1
                  },
                  {
                   "backwardYaw": 16.78,
                   "panorama": {
                    "class": "Panorama",
                    "partial": false,
                    "label": "Common Area",
                    "hfovMax": 120,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": 163.22,
                      "panorama": {
                       "class": "Panorama",
                       "partial": false,
                       "label": "Bedroom 1",
                       "hfovMax": 128.82,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": -50.08,
                         "panorama": "this.panorama_0AFAE484_0C37_0821_4197_436E25652682",
                         "class": "AdjacentPanorama",
                         "yaw": 163.22,
                         "distance": 1
                        }
                       ],
                       "id": "panorama_069BC93F_0C9C_47B4_4195_B31ED1771696",
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_t.jpg",
                       "vfov": 180,
                       "pitch": 0,
                       "frames": [
                        {
                         "right": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_r_hq.jpeg",
                            "height": 2480,
                            "class": "ImageResourceLevel",
                            "width": 2480
                           },
                           {
                            "url": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "front": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_f_hq.jpeg",
                            "height": 2480,
                            "class": "ImageResourceLevel",
                            "width": 2480
                           },
                           {
                            "url": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_b_hq.jpeg",
                            "height": 2480,
                            "class": "ImageResourceLevel",
                            "width": 2480
                           },
                           {
                            "url": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "top": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_u_hq.jpeg",
                            "height": 2480,
                            "class": "ImageResourceLevel",
                            "width": 2480
                           },
                           {
                            "url": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                              "height": 850,
                              "class": "ImageResourceLevel",
                              "width": 850
                             }
                            ]
                           },
                           "inertia": false,
                           "id": "panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_tcap0",
                           "hfov": 74.4,
                           "class": "TripodCapPanoramaOverlay",
                           "rotate": false,
                           "angle": 0
                          },
                          {
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                              "height": 850,
                              "class": "ImageResourceLevel",
                              "width": 850
                             }
                            ]
                           },
                           "inertia": false,
                           "id": "panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_ccap0",
                           "hfov": 74.4,
                           "class": "CeilingCapPanoramaOverlay",
                           "rotate": false,
                           "angle": 0
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_005714E9_10DB_20AA_41A9_CBD273BD08D4",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_0_HS_0_0.png",
                                "height": 220,
                                "class": "ImageResourceLevel",
                                "width": 221
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 9.84,
                             "pitch": -15.57,
                             "yaw": 159.97
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_0AFAE484_0C37_0821_4197_436E25652682, this.camera_05E18879_11CF_6FAB_41AE_C1961362FA43); this.mainPlayList.set('selectedIndex', 9)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_0_HS_0_0_0_map.gif",
                                "height": 110,
                                "class": "ImageResourceLevel",
                                "width": 110
                               }
                              ]
                             },
                             "pitch": -15.57,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 159.97,
                             "hfov": 9.84
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_060C0EC3_11D9_20DF_412B_F12569C229D8",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_0_HS_1_0.png",
                                "height": 784,
                                "class": "ImageResourceLevel",
                                "width": 323
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 14.1,
                             "pitch": -19.11,
                             "yaw": 163.22
                            }
                           ],
                           "rollOverDisplay": true,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_0AFAE484_0C37_0821_4197_436E25652682, this.camera_094AA09C_10CB_3F68_4185_F592F28218EA); this.mainPlayList.set('selectedIndex', 9)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_0_HS_1_0_map.gif",
                                "height": 38,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ]
                             },
                             "pitch": -19.11,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 163.22,
                             "hfov": 14.1
                            }
                           ]
                          }
                         ],
                         "bottom": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_d_hq.jpeg",
                            "height": 2480,
                            "class": "ImageResourceLevel",
                            "width": 2480
                           },
                           {
                            "url": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "left": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_l_hq.jpeg",
                            "height": 2480,
                            "class": "ImageResourceLevel",
                            "width": 2480
                           },
                           {
                            "url": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_t.jpg"
                        }
                       ]
                      },
                      "class": "AdjacentPanorama",
                      "yaw": -50.08,
                      "distance": 1
                     },
                     {
                      "backwardYaw": -132.83,
                      "panorama": {
                       "class": "Panorama",
                       "partial": false,
                       "label": "Master Bedroom",
                       "hfovMax": 120,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": -2.07,
                         "panorama": {
                          "class": "Panorama",
                          "partial": false,
                          "label": "Master Bathroom",
                          "hfovMax": 128,
                          "hfovMin": 60,
                          "adjacentPanoramas": [
                           {
                            "backwardYaw": -93.54,
                            "panorama": "this.panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1",
                            "class": "AdjacentPanorama",
                            "yaw": -2.07,
                            "distance": 1
                           }
                          ],
                          "id": "panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846",
                          "hfov": 360,
                          "thumbnailUrl": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_t.jpg",
                          "vfov": 180,
                          "pitch": 0,
                          "frames": [
                           {
                            "right": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_r_hq.jpeg",
                               "height": 2504,
                               "class": "ImageResourceLevel",
                               "width": 2504
                              },
                              {
                               "url": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_r.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ]
                            },
                            "front": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_f_hq.jpeg",
                               "height": 2504,
                               "class": "ImageResourceLevel",
                               "width": 2504
                              },
                              {
                               "url": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_f.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ]
                            },
                            "class": "CubicPanoramaFrame",
                            "back": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_b_hq.jpeg",
                               "height": 2504,
                               "class": "ImageResourceLevel",
                               "width": 2504
                              },
                              {
                               "url": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_b.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ]
                            },
                            "top": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_u_hq.jpeg",
                               "height": 2504,
                               "class": "ImageResourceLevel",
                               "width": 2504
                              },
                              {
                               "url": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_u.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                                 "height": 850,
                                 "class": "ImageResourceLevel",
                                 "width": 850
                                }
                               ]
                              },
                              "inertia": false,
                              "id": "panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_tcap0",
                              "hfov": 75.6,
                              "class": "TripodCapPanoramaOverlay",
                              "rotate": false,
                              "angle": 0
                             },
                             {
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                                 "height": 850,
                                 "class": "ImageResourceLevel",
                                 "width": 850
                                }
                               ]
                              },
                              "inertia": false,
                              "id": "panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_ccap0",
                              "hfov": 75.6,
                              "class": "CeilingCapPanoramaOverlay",
                              "rotate": false,
                              "angle": 0
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_01B1A5C1_10D9_20DB_419B_3B1098802538",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_0_HS_0_0.png",
                                   "height": 258,
                                   "class": "ImageResourceLevel",
                                   "width": 391
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 17.37,
                                "pitch": -14.24,
                                "yaw": -3.84
                               }
                              ],
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1, this.camera_066A17FD_11CF_60A8_418A_3018B0989713); this.mainPlayList.set('selectedIndex', 10)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_0_HS_0_0_0_map.gif",
                                   "height": 129,
                                   "class": "ImageResourceLevel",
                                   "width": 195
                                  }
                                 ]
                                },
                                "pitch": -14.24,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -3.84,
                                "hfov": 17.37
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_04D5601A_11D9_1F69_4195_E84823EC02ED",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_0_HS_1_0.png",
                                   "height": 727,
                                   "class": "ImageResourceLevel",
                                   "width": 354
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 15.76,
                                "pitch": -14.01,
                                "yaw": -2.07
                               }
                              ],
                              "rollOverDisplay": true,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1, this.camera_09359066_10CB_3FD8_41AA_54191C31FA5A); this.mainPlayList.set('selectedIndex', 10)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "url": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_0_HS_1_0_map.gif",
                                   "height": 32,
                                   "class": "ImageResourceLevel",
                                   "width": 16
                                  }
                                 ]
                                },
                                "pitch": -14.01,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -2.07,
                                "hfov": 15.76
                               }
                              ]
                             }
                            ],
                            "bottom": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_d_hq.jpeg",
                               "height": 2504,
                               "class": "ImageResourceLevel",
                               "width": 2504
                              },
                              {
                               "url": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_d.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ]
                            },
                            "left": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "url": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_l_hq.jpeg",
                               "height": 2504,
                               "class": "ImageResourceLevel",
                               "width": 2504
                              },
                              {
                               "url": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_l.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ]
                            },
                            "thumbnailUrl": "media/panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_t.jpg"
                           }
                          ]
                         },
                         "class": "AdjacentPanorama",
                         "yaw": -93.54,
                         "distance": 1
                        },
                        {
                         "backwardYaw": -166.86,
                         "panorama": "this.panorama_0AFAE484_0C37_0821_4197_436E25652682",
                         "class": "AdjacentPanorama",
                         "yaw": -132.83,
                         "distance": 1
                        }
                       ],
                       "id": "panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1",
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_t.jpg",
                       "vfov": 180,
                       "pitch": 0,
                       "frames": [
                        {
                         "right": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_r_hq.jpeg",
                            "height": 2456,
                            "class": "ImageResourceLevel",
                            "width": 2456
                           },
                           {
                            "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "front": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_f_hq.jpeg",
                            "height": 2456,
                            "class": "ImageResourceLevel",
                            "width": 2456
                           },
                           {
                            "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_b_hq.jpeg",
                            "height": 2456,
                            "class": "ImageResourceLevel",
                            "width": 2456
                           },
                           {
                            "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "top": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_u_hq.jpeg",
                            "height": 2456,
                            "class": "ImageResourceLevel",
                            "width": 2456
                           },
                           {
                            "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                              "height": 850,
                              "class": "ImageResourceLevel",
                              "width": 850
                             }
                            ]
                           },
                           "inertia": false,
                           "id": "panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_tcap0",
                           "hfov": 72,
                           "class": "TripodCapPanoramaOverlay",
                           "rotate": false,
                           "angle": 0
                          },
                          {
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                              "height": 850,
                              "class": "ImageResourceLevel",
                              "width": 850
                             }
                            ]
                           },
                           "inertia": false,
                           "id": "panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_ccap0",
                           "hfov": 72,
                           "class": "CeilingCapPanoramaOverlay",
                           "rotate": false,
                           "angle": 0
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_00A0219D_10C9_216B_41B0_01F698E38967",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_0_HS_1_0.png",
                                "height": 206,
                                "class": "ImageResourceLevel",
                                "width": 206
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 9.57,
                             "pitch": -4.41,
                             "yaw": -93.97
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846, this.camera_064F57D4_11CF_60F9_41A0_E103D78AE2E0); this.mainPlayList.set('selectedIndex', 11)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_0_HS_1_0_0_map.gif",
                                "height": 103,
                                "class": "ImageResourceLevel",
                                "width": 103
                               }
                              ]
                             },
                             "pitch": -4.41,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -93.97,
                             "hfov": 9.57
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_01F91C99_10D7_676B_41A2_58D1E6A47E6B",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_0_HS_0_0.png",
                                "height": 155,
                                "class": "ImageResourceLevel",
                                "width": 159
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.23,
                             "pitch": -13.72,
                             "yaw": -134.32
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_0AFAE484_0C37_0821_4197_436E25652682, this.camera_0652A7DD_11CF_60EB_412A_227A023B9864); this.mainPlayList.set('selectedIndex', 9)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_0_HS_0_0_0_map.gif",
                                "height": 77,
                                "class": "ImageResourceLevel",
                                "width": 79
                               }
                              ]
                             },
                             "pitch": -13.72,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -134.32,
                             "hfov": 7.23
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_046D1832_11CB_2FB9_4194_3136CB5230F3",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_0_HS_3_0.png",
                                "height": 594,
                                "class": "ImageResourceLevel",
                                "width": 218
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 10.06,
                             "pitch": -8.12,
                             "yaw": -93.54
                            }
                           ],
                           "rollOverDisplay": true,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846, this.camera_09129FF4_10CB_20B9_41A7_CF79E3EF94B0); this.mainPlayList.set('selectedIndex', 11)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_0_HS_3_0_map.gif",
                                "height": 43,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ]
                             },
                             "pitch": -8.12,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -93.54,
                             "hfov": 10.06
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_07BE9BEB_11D7_20A8_4193_7886BFBB7D86",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_0_HS_2_0.png",
                                "height": 438,
                                "class": "ImageResourceLevel",
                                "width": 212
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 9.65,
                             "pitch": -12.75,
                             "yaw": -132.83
                            }
                           ],
                           "rollOverDisplay": true,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_0AFAE484_0C37_0821_4197_436E25652682, this.camera_0919900F_10CB_3F67_41A3_FBEA09E29616); this.mainPlayList.set('selectedIndex', 9)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_0_HS_2_0_map.gif",
                                "height": 33,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ]
                             },
                             "pitch": -12.75,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -132.83,
                             "hfov": 9.65
                            }
                           ]
                          }
                         ],
                         "bottom": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_d_hq.jpeg",
                            "height": 2456,
                            "class": "ImageResourceLevel",
                            "width": 2456
                           },
                           {
                            "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "left": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_l_hq.jpeg",
                            "height": 2456,
                            "class": "ImageResourceLevel",
                            "width": 2456
                           },
                           {
                            "url": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_t.jpg"
                        }
                       ]
                      },
                      "class": "AdjacentPanorama",
                      "yaw": -166.86,
                      "distance": 1
                     },
                     {
                      "backwardYaw": 2.4,
                      "panorama": {
                       "class": "Panorama",
                       "partial": false,
                       "label": "Balcony",
                       "hfovMax": 123,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": -88.64,
                         "panorama": "this.panorama_0AFAE484_0C37_0821_4197_436E25652682",
                         "class": "AdjacentPanorama",
                         "yaw": 2.4,
                         "distance": 1
                        }
                       ],
                       "id": "panorama_044421B7_105F_60A7_41A8_E7B9172B955B",
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_044421B7_105F_60A7_41A8_E7B9172B955B_t.jpg",
                       "vfov": 180,
                       "pitch": 0,
                       "frames": [
                        {
                         "right": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_044421B7_105F_60A7_41A8_E7B9172B955B_r_hq.jpeg",
                            "height": 2448,
                            "class": "ImageResourceLevel",
                            "width": 2448
                           },
                           {
                            "url": "media/panorama_044421B7_105F_60A7_41A8_E7B9172B955B_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "front": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_044421B7_105F_60A7_41A8_E7B9172B955B_f_hq.jpeg",
                            "height": 2448,
                            "class": "ImageResourceLevel",
                            "width": 2448
                           },
                           {
                            "url": "media/panorama_044421B7_105F_60A7_41A8_E7B9172B955B_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_044421B7_105F_60A7_41A8_E7B9172B955B_b_hq.jpeg",
                            "height": 2448,
                            "class": "ImageResourceLevel",
                            "width": 2448
                           },
                           {
                            "url": "media/panorama_044421B7_105F_60A7_41A8_E7B9172B955B_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "top": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_044421B7_105F_60A7_41A8_E7B9172B955B_u_hq.jpeg",
                            "height": 2448,
                            "class": "ImageResourceLevel",
                            "width": 2448
                           },
                           {
                            "url": "media/panorama_044421B7_105F_60A7_41A8_E7B9172B955B_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_03D8C771_1059_E1B8_41A4_340422A0F50F",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_044421B7_105F_60A7_41A8_E7B9172B955B_0_HS_0_0.png",
                                "height": 655,
                                "class": "ImageResourceLevel",
                                "width": 584
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 26.97,
                             "pitch": -8.65,
                             "yaw": 2.4
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_0AFAE484_0C37_0821_4197_436E25652682, this.camera_0930C06F_10CB_3FA8_418F_698A9F74B4A5); this.mainPlayList.set('selectedIndex', 9)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_044421B7_105F_60A7_41A8_E7B9172B955B_0_HS_0_0_0_map.gif",
                                "height": 200,
                                "class": "ImageResourceLevel",
                                "width": 178
                               }
                              ]
                             },
                             "pitch": -8.65,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 2.4,
                             "hfov": 26.97
                            }
                           ]
                          },
                          {
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                              "height": 850,
                              "class": "ImageResourceLevel",
                              "width": 850
                             }
                            ]
                           },
                           "inertia": false,
                           "id": "panorama_044421B7_105F_60A7_41A8_E7B9172B955B_tcap0",
                           "hfov": 72,
                           "class": "TripodCapPanoramaOverlay",
                           "rotate": false,
                           "angle": 0
                          },
                          {
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                              "height": 850,
                              "class": "ImageResourceLevel",
                              "width": 850
                             }
                            ]
                           },
                           "inertia": false,
                           "id": "panorama_044421B7_105F_60A7_41A8_E7B9172B955B_ccap0",
                           "hfov": 72,
                           "class": "CeilingCapPanoramaOverlay",
                           "rotate": false,
                           "angle": 0
                          },
                          {
                           "class": "LensFlarePanoramaOverlay",
                           "bleachingDistance": 0.4,
                           "pitch": 43.07,
                           "id": "overlay_03487A15_1059_E37B_41AD_4957C526106E",
                           "bleaching": 0.7,
                           "yaw": -173.43
                          }
                         ],
                         "bottom": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_044421B7_105F_60A7_41A8_E7B9172B955B_d_hq.jpeg",
                            "height": 2448,
                            "class": "ImageResourceLevel",
                            "width": 2448
                           },
                           {
                            "url": "media/panorama_044421B7_105F_60A7_41A8_E7B9172B955B_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "left": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_044421B7_105F_60A7_41A8_E7B9172B955B_l_hq.jpeg",
                            "height": 2448,
                            "class": "ImageResourceLevel",
                            "width": 2448
                           },
                           {
                            "url": "media/panorama_044421B7_105F_60A7_41A8_E7B9172B955B_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_044421B7_105F_60A7_41A8_E7B9172B955B_t.jpg"
                        }
                       ]
                      },
                      "class": "AdjacentPanorama",
                      "yaw": -88.64,
                      "distance": 1
                     },
                     {
                      "backwardYaw": 128.97,
                      "panorama": "this.panorama_0AFAED12_0C37_3826_419F_8BE0E298121A",
                      "class": "AdjacentPanorama",
                      "yaw": 16.78,
                      "distance": 1
                     }
                    ],
                    "id": "panorama_0AFAE484_0C37_0821_4197_436E25652682",
                    "hfov": 360,
                    "thumbnailUrl": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_t.jpg",
                    "vfov": 180,
                    "pitch": 0,
                    "frames": [
                     {
                      "right": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_r_hq.jpeg",
                         "height": 2464,
                         "class": "ImageResourceLevel",
                         "width": 2464
                        },
                        {
                         "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "front": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_f_hq.jpeg",
                         "height": 2464,
                         "class": "ImageResourceLevel",
                         "width": 2464
                        },
                        {
                         "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "class": "CubicPanoramaFrame",
                      "back": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_b_hq.jpeg",
                         "height": 2464,
                         "class": "ImageResourceLevel",
                         "width": 2464
                        },
                        {
                         "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "top": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_u_hq.jpeg",
                         "height": 2464,
                         "class": "ImageResourceLevel",
                         "width": 2464
                        },
                        {
                         "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                           "height": 850,
                           "class": "ImageResourceLevel",
                           "width": 850
                          }
                         ]
                        },
                        "inertia": false,
                        "id": "panorama_0AFAE484_0C37_0821_4197_436E25652682_tcap0",
                        "hfov": 73.2,
                        "class": "TripodCapPanoramaOverlay",
                        "rotate": false,
                        "angle": 0
                       },
                       {
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                           "height": 850,
                           "class": "ImageResourceLevel",
                           "width": 850
                          }
                         ]
                        },
                        "inertia": false,
                        "id": "panorama_0AFAE484_0C37_0821_4197_436E25652682_ccap0",
                        "hfov": 72,
                        "class": "CeilingCapPanoramaOverlay",
                        "rotate": false,
                        "angle": 0
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_010DA32C_10C9_E1A9_4197_D338D0BE2C86",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_0_HS_4_0.png",
                             "height": 254,
                             "class": "ImageResourceLevel",
                             "width": 270
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 11.93,
                          "pitch": -18.12,
                          "yaw": -167.75
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1, this.camera_0333EC81_1059_275B_4155_4A51E631E6E8); this.mainPlayList.set('selectedIndex', 10)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_0_HS_4_0_0_map.gif",
                             "height": 127,
                             "class": "ImageResourceLevel",
                             "width": 135
                            }
                           ]
                          },
                          "pitch": -18.12,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -167.75,
                          "hfov": 11.93
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_02964648_10CB_E3E8_4193_E1057EC845C1",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_0_HS_3_0.png",
                             "height": 111,
                             "class": "ImageResourceLevel",
                             "width": 133
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.07,
                          "pitch": -11.64,
                          "yaw": -51.38
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_069BC93F_0C9C_47B4_4195_B31ED1771696, this.camera_061BE782_11CF_6158_418E_0C568892DF83); this.mainPlayList.set('selectedIndex', 12)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_0_HS_3_0_0_map.gif",
                             "height": 55,
                             "class": "ImageResourceLevel",
                             "width": 66
                            }
                           ]
                          },
                          "pitch": -11.64,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -51.38,
                          "hfov": 6.07
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_0281675C_1037_61E8_41AA_39E196E5EA7A",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_0_HS_5_0.png",
                             "height": 163,
                             "class": "ImageResourceLevel",
                             "width": 187
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.4,
                          "pitch": -15.22,
                          "yaw": 16.78
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_0AFAED12_0C37_3826_419F_8BE0E298121A, this.camera_09F0CF3E_10CB_21A8_41B0_3897D8E430DC); this.mainPlayList.set('selectedIndex', 8)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_0_HS_5_0_0_map.gif",
                             "height": 81,
                             "class": "ImageResourceLevel",
                             "width": 93
                            }
                           ]
                          },
                          "pitch": -15.22,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 16.78,
                          "hfov": 8.4
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_03C9AD20_105E_E159_419B_CB50DC4862A0",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_0_HS_6_0.png",
                             "height": 207,
                             "class": "ImageResourceLevel",
                             "width": 224
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 10.4,
                          "pitch": -3.61,
                          "yaw": -89.33
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_044421B7_105F_60A7_41A8_E7B9172B955B, this.camera_030EDC89_1059_276B_4198_D14510419BCA); this.mainPlayList.set('selectedIndex', 19)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_0_HS_6_0_0_map.gif",
                             "height": 103,
                             "class": "ImageResourceLevel",
                             "width": 112
                            }
                           ]
                          },
                          "pitch": -3.61,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -89.33,
                          "hfov": 10.4
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_045ABDC3_103B_20D8_41AD_065BF52C2555",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_0_HS_9_0.png",
                             "height": 717,
                             "class": "ImageResourceLevel",
                             "width": 416
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 18.53,
                          "pitch": -16.66,
                          "yaw": -166.86
                         }
                        ],
                        "rollOverDisplay": true,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1, this.camera_09E98F0A_10CB_2169_4160_6FEA93F96FC0); this.mainPlayList.set('selectedIndex', 10)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_0_HS_9_0_map.gif",
                             "height": 27,
                             "class": "ImageResourceLevel",
                             "width": 16
                            }
                           ]
                          },
                          "pitch": -16.66,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -166.86,
                          "hfov": 18.53
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_06245FB3_1037_20BF_41B0_666663CF0CB8",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_0_HS_8_0.png",
                             "height": 497,
                             "class": "ImageResourceLevel",
                             "width": 246
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 11.32,
                          "pitch": -7.92,
                          "yaw": -88.64
                         }
                        ],
                        "rollOverDisplay": true,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_044421B7_105F_60A7_41A8_E7B9172B955B, this.camera_09F44F24_10CB_2159_41A7_919C272434D3); this.mainPlayList.set('selectedIndex', 19)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_0_HS_8_0_map.gif",
                             "height": 32,
                             "class": "ImageResourceLevel",
                             "width": 16
                            }
                           ]
                          },
                          "pitch": -7.92,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -88.64,
                          "hfov": 11.32
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_048A26A7_11CB_E0A7_41AD_08BF4CE38E9E",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_0_HS_7_0.png",
                             "height": 508,
                             "class": "ImageResourceLevel",
                             "width": 282
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 12.77,
                          "pitch": -12.85,
                          "yaw": -50.08
                         }
                        ],
                        "rollOverDisplay": true,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_069BC93F_0C9C_47B4_4195_B31ED1771696, this.camera_09EC5EF1_10CB_20BA_41AF_82E203590A4A); this.mainPlayList.set('selectedIndex', 12)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_0_HS_7_0_map.gif",
                             "height": 28,
                             "class": "ImageResourceLevel",
                             "width": 16
                            }
                           ]
                          },
                          "pitch": -12.85,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -50.08,
                          "hfov": 12.77
                         }
                        ]
                       }
                      ],
                      "bottom": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_d_hq.jpeg",
                         "height": 2464,
                         "class": "ImageResourceLevel",
                         "width": 2464
                        },
                        {
                         "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "left": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_l_hq.jpeg",
                         "height": 2464,
                         "class": "ImageResourceLevel",
                         "width": 2464
                        },
                        {
                         "url": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_0AFAE484_0C37_0821_4197_436E25652682_t.jpg"
                     }
                    ]
                   },
                   "class": "AdjacentPanorama",
                   "yaw": 128.97,
                   "distance": 1
                  },
                  {
                   "backwardYaw": -54.73,
                   "panorama": "this.panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC",
                   "class": "AdjacentPanorama",
                   "yaw": 16.62,
                   "distance": 1
                  },
                  {
                   "backwardYaw": 108.64,
                   "panorama": {
                    "class": "Panorama",
                    "partial": false,
                    "label": "Bedroom 3",
                    "hfovMax": 125,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": -42.99,
                      "panorama": "this.panorama_0AFAED12_0C37_3826_419F_8BE0E298121A",
                      "class": "AdjacentPanorama",
                      "yaw": 108.64,
                      "distance": 1
                     },
                     {
                      "backwardYaw": 31.96,
                      "panorama": {
                       "class": "Panorama",
                       "partial": false,
                       "label": "Bedroom 3 Bathroom",
                       "hfovMax": 128.34,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": 152.69,
                         "panorama": "this.panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5",
                         "class": "AdjacentPanorama",
                         "yaw": 31.96,
                         "distance": 1
                        }
                       ],
                       "id": "panorama_076572E6_0CBC_4AD4_41A9_6A0957437911",
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_t.jpg",
                       "vfov": 180,
                       "pitch": 0,
                       "frames": [
                        {
                         "right": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_r_hq.jpeg",
                            "height": 2488,
                            "class": "ImageResourceLevel",
                            "width": 2488
                           },
                           {
                            "url": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "front": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_f_hq.jpeg",
                            "height": 2488,
                            "class": "ImageResourceLevel",
                            "width": 2488
                           },
                           {
                            "url": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_b_hq.jpeg",
                            "height": 2488,
                            "class": "ImageResourceLevel",
                            "width": 2488
                           },
                           {
                            "url": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "top": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_u_hq.jpeg",
                            "height": 2488,
                            "class": "ImageResourceLevel",
                            "width": 2488
                           },
                           {
                            "url": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                              "height": 850,
                              "class": "ImageResourceLevel",
                              "width": 850
                             }
                            ]
                           },
                           "inertia": false,
                           "id": "panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_tcap0",
                           "hfov": 74.4,
                           "class": "TripodCapPanoramaOverlay",
                           "rotate": false,
                           "angle": 0
                          },
                          {
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                              "height": 850,
                              "class": "ImageResourceLevel",
                              "width": 850
                             }
                            ]
                           },
                           "inertia": false,
                           "id": "panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_ccap0",
                           "hfov": 74.4,
                           "class": "CeilingCapPanoramaOverlay",
                           "rotate": false,
                           "angle": 0
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_00441ABA_10D9_60A8_41AF_E20F27650676",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_0_HS_0_0.png",
                                "height": 522,
                                "class": "ImageResourceLevel",
                                "width": 326
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 14.24,
                             "pitch": -18.62,
                             "yaw": 30.88
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5, this.camera_063407B3_11CF_60BF_41A0_A575CB8A0E35); this.mainPlayList.set('selectedIndex', 15)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_0_HS_0_0_0_map.gif",
                                "height": 200,
                                "class": "ImageResourceLevel",
                                "width": 124
                               }
                              ]
                             },
                             "pitch": -18.62,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 30.88,
                             "hfov": 14.24
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_0716333E_104B_21A9_41A1_F391CEECA0A7",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_0_HS_1_0.png",
                                "height": 946,
                                "class": "ImageResourceLevel",
                                "width": 549
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 23.89,
                             "pitch": -19,
                             "yaw": 31.96
                            }
                           ],
                           "rollOverDisplay": true,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5, this.camera_09011F89_10CB_216B_417D_4E41A086F635); this.mainPlayList.set('selectedIndex', 15)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_0_HS_1_0_map.gif",
                                "height": 27,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ]
                             },
                             "pitch": -19,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 31.96,
                             "hfov": 23.89
                            }
                           ]
                          }
                         ],
                         "bottom": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_d_hq.jpeg",
                            "height": 2488,
                            "class": "ImageResourceLevel",
                            "width": 2488
                           },
                           {
                            "url": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "left": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_l_hq.jpeg",
                            "height": 2488,
                            "class": "ImageResourceLevel",
                            "width": 2488
                           },
                           {
                            "url": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_t.jpg"
                        }
                       ]
                      },
                      "class": "AdjacentPanorama",
                      "yaw": 152.69,
                      "distance": 1
                     }
                    ],
                    "id": "panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5",
                    "hfov": 360,
                    "thumbnailUrl": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_t.jpg",
                    "vfov": 180,
                    "pitch": 0,
                    "frames": [
                     {
                      "right": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_r_hq.jpeg",
                         "height": 2456,
                         "class": "ImageResourceLevel",
                         "width": 2456
                        },
                        {
                         "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "front": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_f_hq.jpeg",
                         "height": 2456,
                         "class": "ImageResourceLevel",
                         "width": 2456
                        },
                        {
                         "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "class": "CubicPanoramaFrame",
                      "back": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_b_hq.jpeg",
                         "height": 2456,
                         "class": "ImageResourceLevel",
                         "width": 2456
                        },
                        {
                         "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "top": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_u_hq.jpeg",
                         "height": 2456,
                         "class": "ImageResourceLevel",
                         "width": 2456
                        },
                        {
                         "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                           "height": 850,
                           "class": "ImageResourceLevel",
                           "width": 850
                          }
                         ]
                        },
                        "inertia": false,
                        "id": "panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_tcap0",
                        "hfov": 72,
                        "class": "TripodCapPanoramaOverlay",
                        "rotate": false,
                        "angle": 0
                       },
                       {
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                           "height": 850,
                           "class": "ImageResourceLevel",
                           "width": 850
                          }
                         ]
                        },
                        "inertia": false,
                        "id": "panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_ccap0",
                        "hfov": 72,
                        "class": "CeilingCapPanoramaOverlay",
                        "rotate": false,
                        "angle": 0
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_00D91135_10D9_21BB_419A_1E9FEF532A53",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_0_HS_1_0.png",
                             "height": 167,
                             "class": "ImageResourceLevel",
                             "width": 159
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.41,
                          "pitch": -3.29,
                          "yaw": 108.64
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_0AFAED12_0C37_3826_419F_8BE0E298121A, this.camera_09FFBF55_10CB_21FB_41B0_9A6BAB925692); this.mainPlayList.set('selectedIndex', 8)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_0_HS_1_0_0_map.gif",
                             "height": 83,
                             "class": "ImageResourceLevel",
                             "width": 79
                            }
                           ]
                          },
                          "pitch": -3.29,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 108.64,
                          "hfov": 7.41
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_006D8322_10DB_2159_416E_88367F374056",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_0_HS_0_0.png",
                             "height": 417,
                             "class": "ImageResourceLevel",
                             "width": 292
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 13.56,
                          "pitch": -4.27,
                          "yaw": 153.14
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_076572E6_0CBC_4AD4_41A9_6A0957437911, this.camera_063117AB_11CF_60AF_41B0_87D48815AAB4); this.mainPlayList.set('selectedIndex', 16)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_0_HS_0_0_0_map.gif",
                             "height": 200,
                             "class": "ImageResourceLevel",
                             "width": 140
                            }
                           ]
                          },
                          "pitch": -4.27,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 153.14,
                          "hfov": 13.56
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_0747E3BA_104E_E0A9_41A4_3DA0F2501335",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_0_HS_2_0.png",
                             "height": 868,
                             "class": "ImageResourceLevel",
                             "width": 376
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 17.22,
                          "pitch": -10.77,
                          "yaw": 152.69
                         }
                        ],
                        "rollOverDisplay": true,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_076572E6_0CBC_4AD4_41A9_6A0957437911, this.camera_09FA6F70_10CB_21B9_41A0_44F0B553BC5A); this.mainPlayList.set('selectedIndex', 16)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_0_HS_2_0_map.gif",
                             "height": 36,
                             "class": "ImageResourceLevel",
                             "width": 16
                            }
                           ]
                          },
                          "pitch": -10.77,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 152.69,
                          "hfov": 17.22
                         }
                        ]
                       }
                      ],
                      "bottom": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_d_hq.jpeg",
                         "height": 2456,
                         "class": "ImageResourceLevel",
                         "width": 2456
                        },
                        {
                         "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "left": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_l_hq.jpeg",
                         "height": 2456,
                         "class": "ImageResourceLevel",
                         "width": 2456
                        },
                        {
                         "url": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_t.jpg"
                     }
                    ]
                   },
                   "class": "AdjacentPanorama",
                   "yaw": -42.99,
                   "distance": 1
                  },
                  {
                   "backwardYaw": 116.7,
                   "panorama": {
                    "class": "Panorama",
                    "partial": false,
                    "label": "Bedroom 2",
                    "hfovMax": 120,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": -133.04,
                      "panorama": "this.panorama_0AFAED12_0C37_3826_419F_8BE0E298121A",
                      "class": "AdjacentPanorama",
                      "yaw": 116.7,
                      "distance": 1
                     },
                     {
                      "backwardYaw": 22.62,
                      "panorama": {
                       "class": "Panorama",
                       "partial": false,
                       "label": "Bedroom 2 Bathroom",
                       "hfovMax": 128.82,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": 73.62,
                         "panorama": "this.panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7",
                         "class": "AdjacentPanorama",
                         "yaw": 22.62,
                         "distance": 1
                        }
                       ],
                       "id": "panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6",
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_t.jpg",
                       "vfov": 180,
                       "pitch": 0,
                       "frames": [
                        {
                         "right": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_r_hq.jpeg",
                            "height": 2480,
                            "class": "ImageResourceLevel",
                            "width": 2480
                           },
                           {
                            "url": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "front": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_f_hq.jpeg",
                            "height": 2480,
                            "class": "ImageResourceLevel",
                            "width": 2480
                           },
                           {
                            "url": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_b_hq.jpeg",
                            "height": 2480,
                            "class": "ImageResourceLevel",
                            "width": 2480
                           },
                           {
                            "url": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "top": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_u_hq.jpeg",
                            "height": 2480,
                            "class": "ImageResourceLevel",
                            "width": 2480
                           },
                           {
                            "url": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                              "height": 850,
                              "class": "ImageResourceLevel",
                              "width": 850
                             }
                            ]
                           },
                           "inertia": false,
                           "id": "panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_tcap0",
                           "hfov": 74.4,
                           "class": "TripodCapPanoramaOverlay",
                           "rotate": false,
                           "angle": 0
                          },
                          {
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                              "height": 850,
                              "class": "ImageResourceLevel",
                              "width": 850
                             }
                            ]
                           },
                           "inertia": false,
                           "id": "panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_ccap0",
                           "hfov": 74.4,
                           "class": "CeilingCapPanoramaOverlay",
                           "rotate": false,
                           "angle": 0
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_0074D5FD_10DE_E0AB_4188_D20E64FDCA00",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_0_HS_0_0.png",
                                "height": 229,
                                "class": "ImageResourceLevel",
                                "width": 229
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 10.28,
                             "pitch": -13.06,
                             "yaw": 21.92
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7, this.camera_05F9C8BC_11CF_60A8_41AB_78080A0DBEBE); this.mainPlayList.set('selectedIndex', 13)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_0_HS_0_0_0_map.gif",
                                "height": 114,
                                "class": "ImageResourceLevel",
                                "width": 114
                               }
                              ]
                             },
                             "pitch": -13.06,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 21.92,
                             "hfov": 10.28
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_07346A06_11D7_2358_41A9_DF5D51D06A1D",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_0_HS_1_0.png",
                                "height": 619,
                                "class": "ImageResourceLevel",
                                "width": 353
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 15.8,
                             "pitch": -14.35,
                             "yaw": 22.62
                            }
                           ],
                           "rollOverDisplay": true,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7, this.camera_097A10E3_10CB_20DF_4197_D7BA11708E47); this.mainPlayList.set('selectedIndex', 13)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_0_HS_1_0_map.gif",
                                "height": 28,
                                "class": "ImageResourceLevel",
                                "width": 16
                               }
                              ]
                             },
                             "pitch": -14.35,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 22.62,
                             "hfov": 15.8
                            }
                           ]
                          }
                         ],
                         "bottom": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_d_hq.jpeg",
                            "height": 2480,
                            "class": "ImageResourceLevel",
                            "width": 2480
                           },
                           {
                            "url": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "left": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_l_hq.jpeg",
                            "height": 2480,
                            "class": "ImageResourceLevel",
                            "width": 2480
                           },
                           {
                            "url": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_t.jpg"
                        }
                       ]
                      },
                      "class": "AdjacentPanorama",
                      "yaw": 73.62,
                      "distance": 1
                     }
                    ],
                    "id": "panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7",
                    "hfov": 360,
                    "thumbnailUrl": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_t.jpg",
                    "vfov": 180,
                    "pitch": 0,
                    "frames": [
                     {
                      "right": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_r_hq.jpeg",
                         "height": 2464,
                         "class": "ImageResourceLevel",
                         "width": 2464
                        },
                        {
                         "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "front": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_f_hq.jpeg",
                         "height": 2464,
                         "class": "ImageResourceLevel",
                         "width": 2464
                        },
                        {
                         "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "class": "CubicPanoramaFrame",
                      "back": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_b_hq.jpeg",
                         "height": 2464,
                         "class": "ImageResourceLevel",
                         "width": 2464
                        },
                        {
                         "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "top": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_u_hq.jpeg",
                         "height": 2464,
                         "class": "ImageResourceLevel",
                         "width": 2464
                        },
                        {
                         "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                           "height": 850,
                           "class": "ImageResourceLevel",
                           "width": 850
                          }
                         ]
                        },
                        "inertia": false,
                        "id": "panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_tcap0",
                        "hfov": 73.2,
                        "class": "TripodCapPanoramaOverlay",
                        "rotate": false,
                        "angle": 0
                       },
                       {
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                           "height": 850,
                           "class": "ImageResourceLevel",
                           "width": 850
                          }
                         ]
                        },
                        "inertia": false,
                        "id": "panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_ccap0",
                        "hfov": 72,
                        "class": "CeilingCapPanoramaOverlay",
                        "rotate": false,
                        "angle": 0
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_00BFAB62_10CB_E1D8_41AC_2F53A035BAC5",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_0_HS_1_0.png",
                             "height": 374,
                             "class": "ImageResourceLevel",
                             "width": 375
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 17.35,
                          "pitch": -5.71,
                          "yaw": 116.7
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_0AFAED12_0C37_3826_419F_8BE0E298121A, this.camera_06E4D16D_10CB_21AB_41A4_758E02E798AB); this.mainPlayList.set('selectedIndex', 8)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_0_HS_1_0_0_map.gif",
                             "height": 187,
                             "class": "ImageResourceLevel",
                             "width": 187
                            }
                           ]
                          },
                          "pitch": -5.71,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 116.7,
                          "hfov": 17.35
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_00F9137A_10CA_E1A8_418F_5D3C8CAEAE3E",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_0_HS_0_0.png",
                             "height": 307,
                             "class": "ImageResourceLevel",
                             "width": 417
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 19.29,
                          "pitch": -5.36,
                          "yaw": 74.1
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6, this.camera_041708F4_11CF_60B8_41AA_7744FFE303A8); this.mainPlayList.set('selectedIndex', 14)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_0_HS_0_0_0_map.gif",
                             "height": 147,
                             "class": "ImageResourceLevel",
                             "width": 200
                            }
                           ]
                          },
                          "pitch": -5.36,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 74.1,
                          "hfov": 19.29
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_0767A032_11DB_1FB9_41AC_A475C8D05D66",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_0_HS_2_0.png",
                             "height": 850,
                             "class": "ImageResourceLevel",
                             "width": 352
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 16.01,
                          "pitch": -11.97,
                          "yaw": 73.62
                         }
                        ],
                        "rollOverDisplay": true,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6, this.camera_06E66176_10CB_21B9_41A4_D0C5AF2E54C0); this.mainPlayList.set('selectedIndex', 14)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_0_HS_2_0_map.gif",
                             "height": 38,
                             "class": "ImageResourceLevel",
                             "width": 16
                            }
                           ]
                          },
                          "pitch": -11.97,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 73.62,
                          "hfov": 16.01
                         }
                        ]
                       }
                      ],
                      "bottom": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_d_hq.jpeg",
                         "height": 2464,
                         "class": "ImageResourceLevel",
                         "width": 2464
                        },
                        {
                         "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "left": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_l_hq.jpeg",
                         "height": 2464,
                         "class": "ImageResourceLevel",
                         "width": 2464
                        },
                        {
                         "url": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_t.jpg"
                     }
                    ]
                   },
                   "class": "AdjacentPanorama",
                   "yaw": -133.04,
                   "distance": 1
                  }
                 ],
                 "id": "panorama_0AFAED12_0C37_3826_419F_8BE0E298121A",
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_t.jpg",
                 "vfov": 180,
                 "pitch": 0,
                 "frames": [
                  {
                   "right": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_r_hq.jpeg",
                      "height": 2496,
                      "class": "ImageResourceLevel",
                      "width": 2496
                     },
                     {
                      "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_r.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ]
                   },
                   "front": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_f_hq.jpeg",
                      "height": 2496,
                      "class": "ImageResourceLevel",
                      "width": 2496
                     },
                     {
                      "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_f.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ]
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_b_hq.jpeg",
                      "height": 2496,
                      "class": "ImageResourceLevel",
                      "width": 2496
                     },
                     {
                      "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_b.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ]
                   },
                   "top": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_u_hq.jpeg",
                      "height": 2496,
                      "class": "ImageResourceLevel",
                      "width": 2496
                     },
                     {
                      "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_u.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                        "height": 850,
                        "class": "ImageResourceLevel",
                        "width": 850
                       }
                      ]
                     },
                     "inertia": false,
                     "id": "panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_tcap0",
                     "hfov": 74.4,
                     "class": "TripodCapPanoramaOverlay",
                     "rotate": false,
                     "angle": 0
                    },
                    {
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                        "height": 850,
                        "class": "ImageResourceLevel",
                        "width": 850
                       }
                      ]
                     },
                     "inertia": false,
                     "id": "panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_ccap0",
                     "hfov": 74.4,
                     "class": "CeilingCapPanoramaOverlay",
                     "rotate": false,
                     "angle": 0
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_1EF069EB_10CA_E0AF_41A6_2F6693976193",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_6_0.png",
                          "height": 293,
                          "class": "ImageResourceLevel",
                          "width": 272
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 12.02,
                       "pitch": -16.39,
                       "yaw": 11.18
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 7)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_6_0_0_map.gif",
                          "height": 146,
                          "class": "ImageResourceLevel",
                          "width": 136
                         }
                        ]
                       },
                       "pitch": -16.39,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 11.18,
                       "hfov": 12.02
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_1E076317_10C9_6178_41A5_474B77ED79A9",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_5_0.png",
                          "height": 501,
                          "class": "ImageResourceLevel",
                          "width": 836
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 31.66,
                       "pitch": -34.42,
                       "yaw": 16.62
                      }
                     ],
                     "rollOverDisplay": true,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC, this.camera_0969D0CB_10CB_20E8_4181_A5B5F3226487); this.mainPlayList.set('selectedIndex', 7)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_5_0_map.gif",
                          "height": 15,
                          "class": "ImageResourceLevel",
                          "width": 26
                         }
                        ]
                       },
                       "pitch": -34.42,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 16.62,
                       "hfov": 31.66
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_1E2760EF_10C9_E0A7_4185_AF393A436C5A",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_4_0.png",
                          "height": 293,
                          "class": "ImageResourceLevel",
                          "width": 256
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.45,
                       "pitch": 44.2,
                       "yaw": 33.89
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.mainPlayList.set('selectedIndex', 18)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_4_0_0_map.gif",
                          "height": 146,
                          "class": "ImageResourceLevel",
                          "width": 128
                         }
                        ]
                       },
                       "pitch": 44.2,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 33.89,
                       "hfov": 8.45
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_1FC774AE_10CA_E0A9_41A2_C2EB59AB03DB",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_3_0.png",
                          "height": 1006,
                          "class": "ImageResourceLevel",
                          "width": 609
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 25.01,
                       "pitch": 26.57,
                       "yaw": 53.31
                      }
                     ],
                     "rollOverDisplay": true,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35, this.camera_096590B9_10CB_20A8_41A9_4722CFBB43E7); this.mainPlayList.set('selectedIndex', 18)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_3_0_map.gif",
                          "height": 26,
                          "class": "ImageResourceLevel",
                          "width": 16
                         }
                        ]
                       },
                       "pitch": 26.57,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 53.31,
                       "hfov": 25.01
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_1E52B1AF_10C9_20A7_419E_F44D3B7C1924",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_2_0.png",
                          "height": 313,
                          "class": "ImageResourceLevel",
                          "width": 333
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 15.25,
                       "pitch": 5.07,
                       "yaw": 126.72
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_0AFAE484_0C37_0821_4197_436E25652682, this.camera_04ACCD58_1059_21E8_4192_3978EDBDDE00); this.mainPlayList.set('selectedIndex', 9)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_2_0_0_map.gif",
                          "height": 156,
                          "class": "ImageResourceLevel",
                          "width": 166
                         }
                        ]
                       },
                       "pitch": 5.07,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 126.72,
                       "hfov": 15.25
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_1F8BB78E_10F9_6168_41A5_75411B2AB153",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_1_0.png",
                          "height": 277,
                          "class": "ImageResourceLevel",
                          "width": 267
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 12.22,
                       "pitch": 6.17,
                       "yaw": -135.75
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7, this.camera_04BCDD6F_1059_21A8_41A9_0DFA9E7953F2); this.mainPlayList.set('selectedIndex', 13)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_1_0_0_map.gif",
                          "height": 138,
                          "class": "ImageResourceLevel",
                          "width": 133
                         }
                        ]
                       },
                       "pitch": 6.17,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -135.75,
                       "hfov": 12.22
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_1FA199E7_10FB_20D8_41A2_F9B8EE28379F",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_0_0.png",
                          "height": 379,
                          "class": "ImageResourceLevel",
                          "width": 313
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 14.33,
                       "pitch": 5.69,
                       "yaw": -44.65
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5, this.camera_04A27D67_1059_21D8_41AC_4BCA81B24446); this.mainPlayList.set('selectedIndex', 15)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_0_0_0_map.gif",
                          "height": 189,
                          "class": "ImageResourceLevel",
                          "width": 156
                         }
                        ]
                       },
                       "pitch": 5.69,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -44.65,
                       "hfov": 14.33
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_04D0B040_1049_3FD9_4197_EC6850BBCE0A",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_9_0.png",
                          "height": 776,
                          "class": "ImageResourceLevel",
                          "width": 443
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 20.34,
                       "pitch": -2.51,
                       "yaw": 128.97
                      }
                     ],
                     "rollOverDisplay": true,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_0AFAE484_0C37_0821_4197_436E25652682, this.camera_096340C2_10CB_20D8_419A_EA63FDF5A2C2); this.mainPlayList.set('selectedIndex', 9)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_9_0_map.gif",
                          "height": 28,
                          "class": "ImageResourceLevel",
                          "width": 15
                         }
                        ]
                       },
                       "pitch": -2.51,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 128.97,
                       "hfov": 20.34
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_04869147_103B_61E7_4188_2F6D43049082",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_8_0.png",
                          "height": 820,
                          "class": "ImageResourceLevel",
                          "width": 431
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 19.77,
                       "pitch": -3.55,
                       "yaw": -133.04
                      }
                     ],
                     "rollOverDisplay": true,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7, this.camera_097C10DB_10CB_20E8_4182_255B1DFB7077); this.mainPlayList.set('selectedIndex', 13)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_8_0_map.gif",
                          "height": 30,
                          "class": "ImageResourceLevel",
                          "width": 16
                         }
                        ]
                       },
                       "pitch": -3.55,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -133.04,
                       "hfov": 19.77
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_05F0D53F_103F_61A7_419E_611EE6532385",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_7_0.png",
                          "height": 891,
                          "class": "ImageResourceLevel",
                          "width": 429
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 19.64,
                       "pitch": -4.65,
                       "yaw": -42.99
                      }
                     ],
                     "rollOverDisplay": true,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5, this.camera_097740D3_10CB_20F8_419D_BACCB0FC6F62); this.mainPlayList.set('selectedIndex', 15)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_0_HS_7_0_map.gif",
                          "height": 33,
                          "class": "ImageResourceLevel",
                          "width": 16
                         }
                        ]
                       },
                       "pitch": -4.65,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -42.99,
                       "hfov": 19.64
                      }
                     ]
                    }
                   ],
                   "bottom": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_d_hq.jpeg",
                      "height": 2496,
                      "class": "ImageResourceLevel",
                      "width": 2496
                     },
                     {
                      "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_d.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ]
                   },
                   "left": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_l_hq.jpeg",
                      "height": 2496,
                      "class": "ImageResourceLevel",
                      "width": 2496
                     },
                     {
                      "url": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_t.jpg"
                  }
                 ]
                },
                "class": "AdjacentPanorama",
                "yaw": -54.73,
                "distance": 1
               },
               {
                "backwardYaw": -26.98,
                "panorama": "this.panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3",
                "class": "AdjacentPanorama",
                "yaw": 115.04,
                "distance": 1
               }
              ],
              "id": "panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC",
              "hfov": 360,
              "thumbnailUrl": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "frames": [
               {
                "right": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_r_hq.jpeg",
                   "height": 2464,
                   "class": "ImageResourceLevel",
                   "width": 2464
                  },
                  {
                   "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "front": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_f_hq.jpeg",
                   "height": 2464,
                   "class": "ImageResourceLevel",
                   "width": 2464
                  },
                  {
                   "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_b_hq.jpeg",
                   "height": 2464,
                   "class": "ImageResourceLevel",
                   "width": 2464
                  },
                  {
                   "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "top": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_u_hq.jpeg",
                   "height": 2464,
                   "class": "ImageResourceLevel",
                   "width": 2464
                  },
                  {
                   "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "overlays": [
                 {
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                     "height": 850,
                     "class": "ImageResourceLevel",
                     "width": 850
                    }
                   ]
                  },
                  "inertia": false,
                  "id": "panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_tcap0",
                  "hfov": 73.2,
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "angle": 0
                 },
                 {
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                     "height": 850,
                     "class": "ImageResourceLevel",
                     "width": 850
                    }
                   ]
                  },
                  "inertia": false,
                  "id": "panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_ccap0",
                  "hfov": 72,
                  "class": "CeilingCapPanoramaOverlay",
                  "rotate": false,
                  "angle": 0
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1D1081DC_103B_20E9_419D_1C5D71ABC4B4",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_0_HS_4_0.png",
                       "height": 212,
                       "class": "ImageResourceLevel",
                       "width": 234
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 10.52,
                    "pitch": -14.5,
                    "yaw": -174.32
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_0_HS_4_0_0_map.gif",
                       "height": 106,
                       "class": "ImageResourceLevel",
                       "width": 117
                      }
                     ]
                    },
                    "pitch": -14.5,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -174.32,
                    "hfov": 10.52
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1DB016D4_103B_60F9_41A8_856CC21AEAD4",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_0_HS_3_0.png",
                       "height": 570,
                       "class": "ImageResourceLevel",
                       "width": 362
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 15.22,
                    "pitch": -25.19,
                    "yaw": -163.14
                   }
                  ],
                  "rollOverDisplay": true,
                  "areas": [
                   {
                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_0_HS_3_0_map.gif",
                       "height": 25,
                       "class": "ImageResourceLevel",
                       "width": 16
                      }
                     ]
                    },
                    "pitch": -25.19,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -163.14,
                    "hfov": 15.22
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1DDED8DC_1037_20E9_41A7_8F22017AE2B0",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_0_HS_2_0.png",
                       "height": 149,
                       "class": "ImageResourceLevel",
                       "width": 176
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.64,
                    "pitch": -21.25,
                    "yaw": 149.83
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D, this.camera_1DFB7E26_10CB_2359_41AD_16DEC62682D5); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_0_HS_2_0_0_map.gif",
                       "height": 74,
                       "class": "ImageResourceLevel",
                       "width": 88
                      }
                     ]
                    },
                    "pitch": -21.25,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 149.83,
                    "hfov": 7.64
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1DF1A3EC_1037_20A9_41A9_A7DDB6149346",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_0_HS_1_0.png",
                       "height": 174,
                       "class": "ImageResourceLevel",
                       "width": 167
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.3,
                    "pitch": -19.91,
                    "yaw": 115.04
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3, this.camera_094F2093_10CB_3F78_419D_5948F47BFCC7); this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_0_HS_1_0_0_map.gif",
                       "height": 87,
                       "class": "ImageResourceLevel",
                       "width": 83
                      }
                     ]
                    },
                    "pitch": -19.91,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 115.04,
                    "hfov": 7.3
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1E901F24_10C9_6159_41A5_E7D5F0463EE9",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_0_HS_0_0.png",
                       "height": 449,
                       "class": "ImageResourceLevel",
                       "width": 459
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 19.71,
                    "pitch": -22.43,
                    "yaw": 151.14
                   }
                  ],
                  "rollOverDisplay": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D, this.camera_09453081_10CB_3F58_417A_FF1BFC5A28FF); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_0_HS_0_0_map.gif",
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 16
                      }
                     ]
                    },
                    "pitch": -22.43,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 151.14,
                    "hfov": 19.71
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1EC81878_10DB_2FA8_41AC_06C437A98293",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_0_HS_7_0.png",
                       "height": 342,
                       "class": "ImageResourceLevel",
                       "width": 280
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 11.89,
                    "pitch": 24.12,
                    "yaw": -55.65
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.mainPlayList.set('selectedIndex', 8)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_0_HS_7_0_0_map.gif",
                       "height": 171,
                       "class": "ImageResourceLevel",
                       "width": 140
                      }
                     ]
                    },
                    "pitch": 24.12,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -55.65,
                    "hfov": 11.89
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1E1E4077_10DB_1FA7_414E_0E5BCB3AD659",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_0_HS_6_0.png",
                       "height": 996,
                       "class": "ImageResourceLevel",
                       "width": 624
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 28.2,
                    "pitch": 13.5,
                    "yaw": -54.73
                   }
                  ],
                  "rollOverDisplay": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_0AFAED12_0C37_3826_419F_8BE0E298121A, this.camera_0940408A_10CB_3F68_4192_6C07902D2750); this.mainPlayList.set('selectedIndex', 8)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_0_HS_6_0_map.gif",
                       "height": 25,
                       "class": "ImageResourceLevel",
                       "width": 16
                      }
                     ]
                    },
                    "pitch": 13.5,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -54.73,
                    "hfov": 28.2
                   }
                  ]
                 }
                ],
                "bottom": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_d_hq.jpeg",
                   "height": 2464,
                   "class": "ImageResourceLevel",
                   "width": 2464
                  },
                  {
                   "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "left": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_l_hq.jpeg",
                   "height": 2464,
                   "class": "ImageResourceLevel",
                   "width": 2464
                  },
                  {
                   "url": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_t.jpg"
               }
              ]
             },
             "class": "AdjacentPanorama",
             "yaw": -81.6,
             "distance": 1
            },
            {
             "backwardYaw": -87.65,
             "panorama": "this.panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3",
             "class": "AdjacentPanorama",
             "yaw": -8.68,
             "distance": 1
            }
           ],
           "id": "panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_r_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "front": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_f_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_b_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "top": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_u_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "overlays": [
              {
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                  "height": 850,
                  "class": "ImageResourceLevel",
                  "width": 850
                 }
                ]
               },
               "inertia": false,
               "id": "panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_tcap0",
               "hfov": 74.4,
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "angle": 0
              },
              {
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                  "height": 850,
                  "class": "ImageResourceLevel",
                  "width": 850
                 }
                ]
               },
               "inertia": false,
               "id": "panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_ccap0",
               "hfov": 73.2,
               "class": "CeilingCapPanoramaOverlay",
               "rotate": false,
               "angle": 0
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1B3FD81B_107B_2F68_418F_B1F5FE101DE6",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_0_HS_3_0.png",
                    "height": 220,
                    "class": "ImageResourceLevel",
                    "width": 244
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.63,
                 "pitch": -19.99,
                 "yaw": -8.68
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3, this.camera_0917DFD5_10CB_20F8_419B_16A92E3850C1); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_0_HS_3_0_0_map.gif",
                    "height": 110,
                    "class": "ImageResourceLevel",
                    "width": 122
                   }
                  ]
                 },
                 "pitch": -19.99,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -8.68,
                 "hfov": 10.63
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1BF8ABEE_1079_20A9_41A7_E5AEFE78647E",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_0_HS_2_0.png",
                    "height": 136,
                    "class": "ImageResourceLevel",
                    "width": 170
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.87,
                 "pitch": -1.18,
                 "yaw": -81.6
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC, this.camera_0908FFBD_10CB_20A8_41AE_9496327F2CDB); this.mainPlayList.set('selectedIndex', 7)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_0_HS_2_0_0_map.gif",
                    "height": 68,
                    "class": "ImageResourceLevel",
                    "width": 85
                   }
                  ]
                 },
                 "pitch": -1.18,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -81.6,
                 "hfov": 7.87
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1BF931EA_1076_E0A9_418E_62942C01956E",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_0_HS_1_0.png",
                    "height": 249,
                    "class": "ImageResourceLevel",
                    "width": 189
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.75,
                 "pitch": -3.45,
                 "yaw": -106.8
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 6)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_0_HS_1_0_0_map.gif",
                    "height": 124,
                    "class": "ImageResourceLevel",
                    "width": 94
                   }
                  ]
                 },
                 "pitch": -3.45,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -106.8,
                 "hfov": 8.75
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1C57D44A_1049_27E9_4195_94ACADCD12AD",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_0_HS_0_0.png",
                    "height": 457,
                    "class": "ImageResourceLevel",
                    "width": 357
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 16.21,
                 "pitch": -11.68,
                 "yaw": -95.9
                }
               ],
               "rollOverDisplay": true,
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 6)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_0_HS_0_0_map.gif",
                    "height": 20,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ]
                 },
                 "pitch": -11.68,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -95.9,
                 "hfov": 16.21
                }
               ]
              }
             ],
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_d_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "left": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_l_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "thumbnailUrl": "media/panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "yaw": -87.65,
          "distance": 1
         },
         {
          "backwardYaw": 178.15,
          "panorama": "this.panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595",
          "class": "AdjacentPanorama",
          "yaw": 0.87,
          "distance": 1
         },
         {
          "backwardYaw": 95.88,
          "panorama": {
           "class": "Panorama",
           "partial": false,
           "label": "Majilis",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "backwardYaw": 87.22,
             "panorama": "this.panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3",
             "class": "AdjacentPanorama",
             "yaw": 95.88,
             "distance": 1
            },
            {
             "backwardYaw": -136.38,
             "panorama": {
              "class": "Panorama",
              "partial": false,
              "label": "Pool Area & Backyard",
              "hfovMax": 120,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "backwardYaw": 9.6,
                "panorama": "this.panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C",
                "class": "AdjacentPanorama",
                "yaw": -136.38,
                "distance": 1
               }
              ],
              "id": "panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC",
              "hfov": 360,
              "thumbnailUrl": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "frames": [
               {
                "right": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_r_hq.jpeg",
                   "height": 2448,
                   "class": "ImageResourceLevel",
                   "width": 2448
                  },
                  {
                   "url": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "front": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_f_hq.jpeg",
                   "height": 2448,
                   "class": "ImageResourceLevel",
                   "width": 2448
                  },
                  {
                   "url": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_b_hq.jpeg",
                   "height": 2448,
                   "class": "ImageResourceLevel",
                   "width": 2448
                  },
                  {
                   "url": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "top": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_u_hq.jpeg",
                   "height": 2448,
                   "class": "ImageResourceLevel",
                   "width": 2448
                  },
                  {
                   "url": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "overlays": [
                 {
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "pitch": 53.84,
                  "id": "overlay_06E40856_0C51_182E_41A0_42B526500302",
                  "bleaching": 0.7,
                  "yaw": 3.16
                 },
                 {
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                     "height": 850,
                     "class": "ImageResourceLevel",
                     "width": 850
                    }
                   ]
                  },
                  "inertia": false,
                  "id": "panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_tcap0",
                  "hfov": 72,
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "angle": 0
                 },
                 {
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                     "height": 850,
                     "class": "ImageResourceLevel",
                     "width": 850
                    }
                   ]
                  },
                  "inertia": false,
                  "id": "panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_ccap0",
                  "hfov": 70.8,
                  "class": "CeilingCapPanoramaOverlay",
                  "rotate": false,
                  "angle": 0
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1B95572A_1049_61A8_4190_85885BEA1C1D",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_0_HS_0_0.png",
                       "height": 172,
                       "class": "ImageResourceLevel",
                       "width": 176
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.23,
                    "pitch": 1.06,
                    "yaw": -138.13
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C, this.camera_03012CB3_1059_20BF_417F_CA90FBFB702E); this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_0_HS_0_0_0_map.gif",
                       "height": 86,
                       "class": "ImageResourceLevel",
                       "width": 88
                      }
                     ]
                    },
                    "pitch": 1.06,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -138.13,
                    "hfov": 8.23
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_04C3BF18_104B_6169_41A5_A4A0F2643A56",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_0_HS_1_0.png",
                       "height": 454,
                       "class": "ImageResourceLevel",
                       "width": 237
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 11.09,
                    "pitch": -4.19,
                    "yaw": -136.38
                   }
                  ],
                  "rollOverDisplay": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C, this.camera_090C2FA1_10CB_215B_4190_B0BB8E263FDC); this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_0_HS_1_0_map.gif",
                       "height": 30,
                       "class": "ImageResourceLevel",
                       "width": 15
                      }
                     ]
                    },
                    "pitch": -4.19,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -136.38,
                    "hfov": 11.09
                   }
                  ]
                 }
                ],
                "bottom": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_d_hq.jpeg",
                   "height": 2448,
                   "class": "ImageResourceLevel",
                   "width": 2448
                  },
                  {
                   "url": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "left": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_l_hq.jpeg",
                   "height": 2448,
                   "class": "ImageResourceLevel",
                   "width": 2448
                  },
                  {
                   "url": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_t.jpg"
               }
              ]
             },
             "class": "AdjacentPanorama",
             "yaw": 9.6,
             "distance": 1
            }
           ],
           "id": "panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_r_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "front": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_f_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_b_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "top": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_u_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "overlays": [
              {
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                  "height": 850,
                  "class": "ImageResourceLevel",
                  "width": 850
                 }
                ]
               },
               "inertia": false,
               "id": "panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_tcap0",
               "hfov": 73.2,
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "angle": 0
              },
              {
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                  "height": 850,
                  "class": "ImageResourceLevel",
                  "width": 850
                 }
                ]
               },
               "inertia": false,
               "id": "panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_ccap0",
               "hfov": 72,
               "class": "CeilingCapPanoramaOverlay",
               "rotate": false,
               "angle": 0
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1BA675DA_104F_E0E9_41A3_6DF46E70E466",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_0_HS_1_0.png",
                    "height": 302,
                    "class": "ImageResourceLevel",
                    "width": 266
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 11.73,
                 "pitch": -18.4,
                 "yaw": 95.88
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3, this.camera_09248028_10CB_3FA9_4195_C08968335E2A); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_0_HS_1_0_0_map.gif",
                    "height": 151,
                    "class": "ImageResourceLevel",
                    "width": 133
                   }
                  ]
                 },
                 "pitch": -18.4,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 95.88,
                 "hfov": 11.73
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1C45D922_104A_E159_416D_A445C82E2885",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_0_HS_0_0.png",
                    "height": 800,
                    "class": "ImageResourceLevel",
                    "width": 558
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 25.57,
                 "pitch": -9.02,
                 "yaw": 7.05
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC, this.camera_04EACCEC_1059_20A9_417F_1E2B4931B149); this.mainPlayList.set('selectedIndex', 5)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_0_HS_0_0_0_map.gif",
                    "height": 200,
                    "class": "ImageResourceLevel",
                    "width": 139
                   }
                  ]
                 },
                 "pitch": -9.02,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 7.05,
                 "hfov": 25.57
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_03167650_104F_23F9_418C_35A590DBF513",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_0_HS_2_0.png",
                    "height": 923,
                    "class": "ImageResourceLevel",
                    "width": 555
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 25.24,
                 "pitch": -11.61,
                 "yaw": 9.6
                }
               ],
               "rollOverDisplay": true,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC, this.camera_0923B041_10CB_3FD8_4198_D017B94A4C4D); this.mainPlayList.set('selectedIndex', 5)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_0_HS_2_0_map.gif",
                    "height": 26,
                    "class": "ImageResourceLevel",
                    "width": 16
                   }
                  ]
                 },
                 "pitch": -11.61,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 9.6,
                 "hfov": 25.24
                }
               ]
              }
             ],
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_d_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "left": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_l_hq.jpeg",
                "height": 2472,
                "class": "ImageResourceLevel",
                "width": 2472
               },
               {
                "url": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "thumbnailUrl": "media/panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "yaw": 87.22,
          "distance": 1
         },
         {
          "backwardYaw": 115.04,
          "panorama": "this.panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC",
          "class": "AdjacentPanorama",
          "yaw": -26.98,
          "distance": 1
         },
         {
          "backwardYaw": 4.29,
          "panorama": {
           "class": "Panorama",
           "partial": false,
           "label": "Kitchen",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "backwardYaw": -49.11,
             "panorama": "this.panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3",
             "class": "AdjacentPanorama",
             "yaw": 4.29,
             "distance": 1
            }
           ],
           "id": "panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_r_hq.jpeg",
                "height": 2480,
                "class": "ImageResourceLevel",
                "width": 2480
               },
               {
                "url": "media/panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "front": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_f_hq.jpeg",
                "height": 2480,
                "class": "ImageResourceLevel",
                "width": 2480
               },
               {
                "url": "media/panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_b_hq.jpeg",
                "height": 2480,
                "class": "ImageResourceLevel",
                "width": 2480
               },
               {
                "url": "media/panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "top": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_u_hq.jpeg",
                "height": 2480,
                "class": "ImageResourceLevel",
                "width": 2480
               },
               {
                "url": "media/panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "overlays": [
              {
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                  "height": 850,
                  "class": "ImageResourceLevel",
                  "width": 850
                 }
                ]
               },
               "inertia": false,
               "id": "panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_tcap0",
               "hfov": 74.4,
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "angle": 0
              },
              {
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
                  "height": 850,
                  "class": "ImageResourceLevel",
                  "width": 850
                 }
                ]
               },
               "inertia": false,
               "id": "panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_ccap0",
               "hfov": 75.6,
               "class": "CeilingCapPanoramaOverlay",
               "rotate": false,
               "angle": 0
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1C6FEC32_1057_27B9_4171_9ABDA59D465A",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_0_HS_0_0.png",
                    "height": 784,
                    "class": "ImageResourceLevel",
                    "width": 575
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 26.35,
                 "pitch": -6.65,
                 "yaw": 4.29
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3, this.camera_092EB059_10CB_3FE8_4174_474037F8470D); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_0_HS_0_0_0_map.gif",
                    "height": 200,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ]
                 },
                 "pitch": -6.65,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 4.29,
                 "hfov": 26.35
                }
               ]
              }
             ],
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_d_hq.jpeg",
                "height": 2480,
                "class": "ImageResourceLevel",
                "width": 2480
               },
               {
                "url": "media/panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "left": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_l_hq.jpeg",
                "height": 2480,
                "class": "ImageResourceLevel",
                "width": 2480
               },
               {
                "url": "media/panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "thumbnailUrl": "media/panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "yaw": -49.11,
          "distance": 1
         }
        ],
        "id": "panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_r_hq.jpeg",
             "height": 2464,
             "class": "ImageResourceLevel",
             "width": 2464
            },
            {
             "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "front": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_f_hq.jpeg",
             "height": 2464,
             "class": "ImageResourceLevel",
             "width": 2464
            },
            {
             "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_b_hq.jpeg",
             "height": 2464,
             "class": "ImageResourceLevel",
             "width": 2464
            },
            {
             "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "top": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_u_hq.jpeg",
             "height": 2464,
             "class": "ImageResourceLevel",
             "width": 2464
            },
            {
             "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "overlays": [
           {
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
               "height": 850,
               "class": "ImageResourceLevel",
               "width": 850
              }
             ]
            },
            "inertia": false,
            "id": "panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_tcap0",
            "hfov": 73.2,
            "class": "TripodCapPanoramaOverlay",
            "rotate": false,
            "angle": 0
           },
           {
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
               "height": 850,
               "class": "ImageResourceLevel",
               "width": 850
              }
             ]
            },
            "inertia": false,
            "id": "panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_ccap0",
            "hfov": 72,
            "class": "CeilingCapPanoramaOverlay",
            "rotate": false,
            "angle": 0
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_1AE1AD28_1049_21A8_41A6_67B9929361C6",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_0_HS_7_0.png",
                 "height": 242,
                 "class": "ImageResourceLevel",
                 "width": 213
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 9.51,
              "pitch": -16.14,
              "yaw": 0.87
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595, this.camera_088E70F4_10CB_20B9_419E_AC6714B9D0C9); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_0_HS_7_0_0_map.gif",
                 "height": 121,
                 "class": "ImageResourceLevel",
                 "width": 106
                }
               ]
              },
              "pitch": -16.14,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 0.87,
              "hfov": 9.51
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_1AB9148F_104F_2767_41A9_07E0D072A173",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_0_HS_6_0.png",
                 "height": 330,
                 "class": "ImageResourceLevel",
                 "width": 245
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.78,
              "pitch": -18.8,
              "yaw": 86.41
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_0_HS_6_0_0_map.gif",
                 "height": 165,
                 "class": "ImageResourceLevel",
                 "width": 122
                }
               ]
              },
              "pitch": -18.8,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 86.41,
              "hfov": 10.78
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_1BCDF8E8_1049_20A8_41A0_1AEE271984CC",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_0_HS_5_0.png",
                 "height": 552,
                 "class": "ImageResourceLevel",
                 "width": 452
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 19.96,
              "pitch": -18.13,
              "yaw": 87.22
             }
            ],
            "rollOverDisplay": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C, this.camera_089480FD_10CB_20AB_41A5_CDB10E722A46); this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_0_HS_5_0_map.gif",
                 "height": 19,
                 "class": "ImageResourceLevel",
                 "width": 16
                }
               ]
              },
              "pitch": -18.13,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 87.22,
              "hfov": 19.96
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_1B7107A6_1077_2159_417C_E9BFA76B324A",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_0_HS_4_0.png",
                 "height": 256,
                 "class": "ImageResourceLevel",
                 "width": 305
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 13.35,
              "pitch": -19.52,
              "yaw": -90.8
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_0_HS_4_0_0_map.gif",
                 "height": 128,
                 "class": "ImageResourceLevel",
                 "width": 152
                }
               ]
              },
              "pitch": -19.52,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -90.8,
              "hfov": 13.35
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_1BD1BC8B_1079_676F_4192_4AD6A7AE121D",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_0_HS_3_0.png",
                 "height": 495,
                 "class": "ImageResourceLevel",
                 "width": 807
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 35.86,
              "pitch": -16.96,
              "yaw": -87.65
             }
            ],
            "rollOverDisplay": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D, this.camera_088070EB_10CB_20AF_4170_DC5C3DE7E4DF); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_0_HS_3_0_map.gif",
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 26
                }
               ]
              },
              "pitch": -16.96,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -87.65,
              "hfov": 35.86
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_1BA4EA4A_1049_63E9_41AC_26F270EB545E",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_0_HS_2_0.png",
                 "height": 129,
                 "class": "ImageResourceLevel",
                 "width": 138
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.42,
              "pitch": -4.13,
              "yaw": -26.98
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC, this.camera_0892F105_10CB_215A_41A0_8428379F2C98); this.mainPlayList.set('selectedIndex', 7)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_0_HS_2_0_0_map.gif",
                 "height": 64,
                 "class": "ImageResourceLevel",
                 "width": 69
                }
               ]
              },
              "pitch": -4.13,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -26.98,
              "hfov": 6.42
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_1C7206C2_105B_20D9_41A8_70766A8BBBCD",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_0_HS_1_0.png",
                 "height": 120,
                 "class": "ImageResourceLevel",
                 "width": 141
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.55,
              "pitch": -1.83,
              "yaw": -57.97
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 6)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_0_HS_1_0_0_map.gif",
                 "height": 60,
                 "class": "ImageResourceLevel",
                 "width": 70
                }
               ]
              },
              "pitch": -1.83,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -57.97,
              "hfov": 6.55
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_1E4E3F52_105F_61F8_41A4_B51A323B3039",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_0_HS_0_0.png",
                 "height": 378,
                 "class": "ImageResourceLevel",
                 "width": 319
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 14.65,
              "pitch": -8.6,
              "yaw": -49.11
             }
            ],
            "rollOverDisplay": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C, this.camera_06DAC164_10CB_21D9_41AA_B105530D8BB2); this.mainPlayList.set('selectedIndex', 6)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_0_HS_0_0_map.gif",
                 "height": 18,
                 "class": "ImageResourceLevel",
                 "width": 16
                }
               ]
              },
              "pitch": -8.6,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -49.11,
              "hfov": 14.65
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_d_hq.jpeg",
             "height": 2464,
             "class": "ImageResourceLevel",
             "width": 2464
            },
            {
             "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "left": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_l_hq.jpeg",
             "height": 2464,
             "class": "ImageResourceLevel",
             "width": 2464
            },
            {
             "url": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "yaw": 178.15,
       "distance": 1
      }
     ],
     "id": "panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595",
     "hfov": 360,
     "thumbnailUrl": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_t.jpg",
     "vfov": 180,
     "pitch": 0,
     "frames": [
      {
       "right": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_r_hq.jpeg",
          "height": 2464,
          "class": "ImageResourceLevel",
          "width": 2464
         },
         {
          "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "front": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_f_hq.jpeg",
          "height": 2464,
          "class": "ImageResourceLevel",
          "width": 2464
         },
         {
          "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_b_hq.jpeg",
          "height": 2464,
          "class": "ImageResourceLevel",
          "width": 2464
         },
         {
          "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "top": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_u_hq.jpeg",
          "height": 2464,
          "class": "ImageResourceLevel",
          "width": 2464
         },
         {
          "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "overlays": [
        {
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
            "height": 850,
            "class": "ImageResourceLevel",
            "width": 850
           }
          ]
         },
         "inertia": false,
         "id": "panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_tcap0",
         "hfov": 73.2,
         "class": "TripodCapPanoramaOverlay",
         "rotate": false,
         "angle": 0
        },
        {
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
            "height": 850,
            "class": "ImageResourceLevel",
            "width": 850
           }
          ]
         },
         "inertia": false,
         "id": "panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_ccap0",
         "hfov": 72,
         "class": "CeilingCapPanoramaOverlay",
         "rotate": false,
         "angle": 0
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_19932C60_1059_67D9_419A_B72DB6B78BC2",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_0_HS_1_0.png",
              "height": 451,
              "class": "ImageResourceLevel",
              "width": 369
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 17.11,
           "pitch": -5.1,
           "yaw": -3.16
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A, this.camera_04DCAD40_1059_21D8_41A0_16B5D524CCF3); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_0_HS_1_0_0_map.gif",
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 163
             }
            ]
           },
           "pitch": -5.1,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -3.16,
           "hfov": 17.11
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_19BAF6FF_1057_20A7_41A0_66BCA682E084",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_0_HS_0_0.png",
              "height": 164,
              "class": "ImageResourceLevel",
              "width": 181
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.18,
           "pitch": -13.44,
           "yaw": 178.15
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3, this.camera_095FC0AF_10CB_20A8_4150_7D20B8947372); this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_0_HS_0_0_0_map.gif",
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 17
             }
            ]
           },
           "pitch": -13.44,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 178.15,
           "hfov": 8.18
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_1B60264B_1079_E3EF_41AF_21F211BFF756",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_0_HS_2_0.png",
              "height": 165,
              "class": "ImageResourceLevel",
              "width": 239
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 11.1,
           "pitch": 3.02,
           "yaw": -110.94
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.mainPlayList.set('selectedIndex', 6)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_0_HS_2_0_0_map.gif",
              "height": 82,
              "class": "ImageResourceLevel",
              "width": 119
             }
            ]
           },
           "pitch": 3.02,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -110.94,
           "hfov": 11.1
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_1DEC4DF5_1049_20BB_4185_A87837ABAD65",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_0_HS_3_0.png",
              "height": 412,
              "class": "ImageResourceLevel",
              "width": 363
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 16.85,
           "pitch": -4.26,
           "yaw": -100.31
          }
         ],
         "rollOverDisplay": true,
         "areas": [
          {
           "click": "this.mainPlayList.set('selectedIndex', 6)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_0_HS_3_0_map.gif",
              "height": 18,
              "class": "ImageResourceLevel",
              "width": 16
             }
            ]
           },
           "pitch": -4.26,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -100.31,
           "hfov": 16.85
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_033DDD27_1049_61A7_41A6_0BB6CFA6DC45",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_0_HS_4_0.png",
              "height": 560,
              "class": "ImageResourceLevel",
              "width": 250
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 11.59,
           "pitch": -4.36,
           "yaw": -2.78
          }
         ],
         "rollOverDisplay": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A, this.camera_095000A6_10CB_3F58_4160_AB01694D22B8); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_0_HS_4_0_map.gif",
              "height": 35,
              "class": "ImageResourceLevel",
              "width": 16
             }
            ]
           },
           "pitch": -4.36,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -2.78,
           "hfov": 11.59
          }
         ]
        }
       ],
       "bottom": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_d_hq.jpeg",
          "height": 2464,
          "class": "ImageResourceLevel",
          "width": 2464
         },
         {
          "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "left": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_l_hq.jpeg",
          "height": 2464,
          "class": "ImageResourceLevel",
          "width": 2464
         },
         {
          "url": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "thumbnailUrl": "media/panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_t.jpg"
      }
     ]
    },
    "class": "AdjacentPanorama",
    "yaw": 167.96,
    "distance": 1
   }
  ],
  "id": "panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_r_hq.jpeg",
       "height": 2440,
       "class": "ImageResourceLevel",
       "width": 2440
      },
      {
       "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_f_hq.jpeg",
       "height": 2440,
       "class": "ImageResourceLevel",
       "width": 2440
      },
      {
       "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_b_hq.jpeg",
       "height": 2440,
       "class": "ImageResourceLevel",
       "width": 2440
      },
      {
       "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_u_hq.jpeg",
       "height": 2440,
       "class": "ImageResourceLevel",
       "width": 2440
      },
      {
       "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.4,
      "pitch": 53.03,
      "id": "overlay_06DA7A9C_0C51_1821_4198_C9ED3CF2610A",
      "bleaching": 0.7,
      "yaw": -178.48
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850
        }
       ]
      },
      "inertia": false,
      "id": "panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0",
      "hfov": 70.8,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "angle": 0
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_tcap0.png",
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850
        }
       ]
      },
      "inertia": false,
      "id": "panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_ccap0",
      "hfov": 72,
      "class": "CeilingCapPanoramaOverlay",
      "rotate": false,
      "angle": 0
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_1971D1FB_105B_60AF_41A2_6AF67C5C2B11",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_0_HS_0_0.png",
           "height": 144,
           "class": "ImageResourceLevel",
           "width": 135
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.36,
        "pitch": -0.31,
        "yaw": 166.01
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595, this.camera_04F98D18_1059_2168_4195_9406AF872EB9); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_0_HS_0_0_0_map.gif",
           "height": 72,
           "class": "ImageResourceLevel",
           "width": 67
          }
         ]
        },
        "pitch": -0.31,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 166.01,
        "hfov": 6.36
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_035CFD38_1049_61A9_4191_A6692B8E0F18",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_0_HS_1_0.png",
           "height": 254,
           "class": "ImageResourceLevel",
           "width": 236
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.12,
        "pitch": -1.22,
        "yaw": 167.96
       }
      ],
      "rollOverDisplay": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595, this.camera_093FB078_10CB_3FA8_41A1_DD1E197CE8E6); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_0_HS_1_0_map.gif",
           "height": 17,
           "class": "ImageResourceLevel",
           "width": 16
          }
         ]
        },
        "pitch": -1.22,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 167.96,
        "hfov": 11.12
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_08CCC48E_1036_E768_41A8_C8CA291C532B",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_0_HS_3_0.png",
           "height": 84,
           "class": "ImageResourceLevel",
           "width": 103
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.87,
        "roll": 0,
        "pitch": -4.52,
        "yaw": 127.28
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_0_HS_3_1_0_map.gif",
           "height": 42,
           "class": "ImageResourceLevel",
           "width": 51
          }
         ]
        },
        "pitch": -4.52,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 127.28,
        "hfov": 4.87
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_d_hq.jpeg",
       "height": 2440,
       "class": "ImageResourceLevel",
       "width": 2440
      },
      {
       "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_l_hq.jpeg",
       "height": 2440,
       "class": "ImageResourceLevel",
       "width": 2440
      },
      {
       "url": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_t.jpg"
   }
  ]
 },
 {
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_acceleration",
  "gyroscopeVerticalDraggingEnabled": true,
  "mouseControlMode": "drag_acceleration",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0.38,
   "class": "PanoramaCameraPosition",
   "hfov": 107,
   "yaw": -175.66
  },
  "id": "panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_camera"
 },
 "this.panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 1.55,
   "class": "PanoramaCameraPosition",
   "hfov": 102,
   "yaw": 177.31
  },
  "id": "panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_camera"
 },
 "this.panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -0.25,
   "class": "PanoramaCameraPosition",
   "hfov": 101,
   "yaw": -179.26
  },
  "id": "panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_camera"
 },
 "this.panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -0.65,
   "class": "PanoramaCameraPosition",
   "hfov": 107,
   "yaw": -37.58
  },
  "id": "panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_camera"
 },
 "this.panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -1.74,
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -171.02
  },
  "id": "panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_camera"
 },
 "this.panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -3.11,
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 7.01
  },
  "id": "panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_camera"
 },
 "this.panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0.95,
   "class": "PanoramaCameraPosition",
   "hfov": 115,
   "yaw": 158.62
  },
  "id": "panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_camera"
 },
 "this.panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0.42,
   "class": "PanoramaCameraPosition",
   "hfov": 111,
   "yaw": -102.97
  },
  "id": "panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_camera"
 },
 "this.panorama_0AFAED12_0C37_3826_419F_8BE0E298121A",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0.6,
   "class": "PanoramaCameraPosition",
   "hfov": 125,
   "yaw": 174.03
  },
  "id": "panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_camera"
 },
 "this.panorama_0AFAE484_0C37_0821_4197_436E25652682",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -0.89,
   "class": "PanoramaCameraPosition",
   "hfov": 99,
   "yaw": -86.72
  },
  "id": "panorama_0AFAE484_0C37_0821_4197_436E25652682_camera"
 },
 "this.panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0.51,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 90.25
  },
  "id": "panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_camera"
 },
 "this.panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 128,
   "yaw": 177.39
  },
  "id": "panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_camera"
 },
 "this.panorama_069BC93F_0C9C_47B4_4195_B31ED1771696",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0.29,
   "class": "PanoramaCameraPosition",
   "hfov": 115,
   "yaw": -76.95
  },
  "id": "panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_camera"
 },
 "this.panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -3.44,
   "class": "PanoramaCameraPosition",
   "hfov": 106,
   "yaw": -88.27
  },
  "id": "panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_camera"
 },
 "this.panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -0.2,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -159.76
  },
  "id": "panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_camera"
 },
 "this.panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0.04,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -89.31
  },
  "id": "panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_camera"
 },
 "this.panorama_076572E6_0CBC_4AD4_41A9_6A0957437911",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0.21,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -133.45
  },
  "id": "panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_camera"
 },
 {
  "class": "PhotoAlbum",
  "label": "Photo Album Rooftop Stairs",
  "id": "album_07A5684E_0C94_45D7_418F_925007FB4151",
  "thumbnailUrl": "media/album_07A5684E_0C94_45D7_418F_925007FB4151_t.png",
  "playList": {
   "items": [
    {
     "media": {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_07A5684E_0C94_45D7_418F_925007FB4151_0.jpg"
        }
       ]
      },
      "class": "Photo",
      "label": "Rooftop Stairs",
      "width": 8976,
      "height": 3642,
      "thumbnailUrl": "media/album_07A5684E_0C94_45D7_418F_925007FB4151_0_t.jpg",
      "id": "album_07A5684E_0C94_45D7_418F_925007FB4151_0",
      "duration": 5000
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition",
       "x": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "y": "0.73",
       "class": "PhotoCameraPosition",
       "x": "0.37"
      }
     },
     "class": "PhotoPlayListItem"
    }
   ],
   "class": "PhotoPlayList",
   "id": "album_07A5684E_0C94_45D7_418F_925007FB4151_AlbumPlayList"
  }
 },
 {
  "viewerArea": "this.MainViewer",
  "class": "PhotoAlbumPlayer",
  "id": "MainViewerPhotoAlbumPlayer"
 },
 "this.album_07A5684E_0C94_45D7_418F_925007FB4151_0",
 "this.panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -3.94,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 130.28
  },
  "id": "panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_camera"
 },
 "this.panorama_044421B7_105F_60A7_41A8_E7B9172B955B",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -0.23,
   "class": "PanoramaCameraPosition",
   "hfov": 116,
   "yaw": 179.97
  },
  "id": "panorama_044421B7_105F_60A7_41A8_E7B9172B955B_camera"
 },
 {
  "items": [
   {
    "media": "this.panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFAED12_0C37_3826_419F_8BE0E298121A",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFAE484_0C37_0821_4197_436E25652682",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_0AFAE484_0C37_0821_4197_436E25652682_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_069BC93F_0C9C_47B4_4195_B31ED1771696",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "camera": "this.panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "camera": "this.panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "camera": "this.panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_076572E6_0CBC_4AD4_41A9_6A0957437911",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "camera": "this.panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.album_07A5684E_0C94_45D7_418F_925007FB4151",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "media": "this.panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "camera": "this.panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_044421B7_105F_60A7_41A8_E7B9172B955B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 0)",
    "camera": "this.panorama_044421B7_105F_60A7_41A8_E7B9172B955B_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 0, 1)",
    "camera": "this.panorama_0B8C9FDB_0C30_F826_417D_A64232B2410A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 1, 2)",
    "camera": "this.panorama_0AFBBDD7_0C37_182F_415B_E92B8AB86595_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 2, 3)",
    "camera": "this.panorama_0AFA8AFC_0C37_39E2_4196_D97B10F0D0B3_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 3, 4)",
    "camera": "this.panorama_0AFA8537_0C37_086F_417A_B9FB1B75D19D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 4, 5)",
    "camera": "this.panorama_0AFABFE3_0C37_17E7_41A5_9D6A1CFF668C_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 5, 6)",
    "camera": "this.panorama_0AFA9A5F_0C37_78DF_41A2_EAF8796E16CC_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 6, 7)",
    "camera": "this.panorama_0AFAE775_0C37_08E3_4180_C48B6C09DE1C_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 7, 8)",
    "camera": "this.panorama_0AFAF285_0C37_0823_419C_2196C83D5ECC_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFAED12_0C37_3826_419F_8BE0E298121A",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 8, 9)",
    "camera": "this.panorama_0AFAED12_0C37_3826_419F_8BE0E298121A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0AFAE484_0C37_0821_4197_436E25652682",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 9, 10)",
    "camera": "this.panorama_0AFAE484_0C37_0821_4197_436E25652682_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 10, 11)",
    "camera": "this.panorama_062425F4_0C71_0BE1_41A7_7BE329DF74D1_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 11, 12)",
    "camera": "this.panorama_04FD7ADE_0C75_FAF4_419B_1ECFD420E846_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_069BC93F_0C9C_47B4_4195_B31ED1771696",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 12, 13)",
    "camera": "this.panorama_069BC93F_0C9C_47B4_4195_B31ED1771696_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 13, 14)",
    "camera": "this.panorama_0557121D_0CBC_C574_419A_64F5F0DE9DB7_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 14, 15)",
    "camera": "this.panorama_07EB2AD1_0C94_3ACC_4194_9A8ADEF65DD6_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 15, 16)",
    "camera": "this.panorama_06349DFB_0CFC_3EBC_41A8_9A8226DB6BC5_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_076572E6_0CBC_4AD4_41A9_6A0957437911",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 16, 17)",
    "camera": "this.panorama_076572E6_0CBC_4AD4_41A9_6A0957437911_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.album_07A5684E_0C94_45D7_418F_925007FB4151",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 17, 18)"
   },
   {
    "media": "this.panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 18, 19)",
    "camera": "this.panorama_18F7EA43_104A_E3D8_419E_01398D4C5B35_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_044421B7_105F_60A7_41A8_E7B9172B955B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_056AA536_0C31_0861_4176_B809452EC011, 19, 0)",
    "camera": "this.panorama_044421B7_105F_60A7_41A8_E7B9172B955B_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "class": "PlayList",
  "id": "playList_056AA536_0C31_0861_4176_B809452EC011"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 125,
   "yaw": -126.69
  },
  "id": "camera_09E1CECE_10CB_20E9_41B1_2DE291929D27"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 115,
   "yaw": -16.78
  },
  "id": "camera_09EC5EF1_10CB_20BA_41AF_82E203590A4A"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 47.17
  },
  "id": "camera_09E98F0A_10CB_2169_4160_6FEA93F96FC0"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 116,
   "yaw": -177.6
  },
  "id": "camera_09F44F24_10CB_2159_41A7_919C272434D3"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 125,
   "yaw": -51.03
  },
  "id": "camera_09F0CF3E_10CB_21A8_41B0_3897D8E430DC"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 125,
   "yaw": 137.01
  },
  "id": "camera_09FFBF55_10CB_21FB_41B0_9A6BAB925692"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -148.04
  },
  "id": "camera_09FA6F70_10CB_21B9_41A0_44F0B553BC5A"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -27.31
  },
  "id": "camera_09011F89_10CB_216B_417D_4E41A086F635"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -170.4
  },
  "id": "camera_090C2FA1_10CB_215B_4190_B0BB8E263FDC"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 111,
   "yaw": -28.86
  },
  "id": "camera_0908FFBD_10CB_20A8_41AE_9496327F2CDB"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 101,
   "yaw": 92.35
  },
  "id": "camera_0917DFD5_10CB_20F8_419B_16A92E3850C1"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 128,
   "yaw": 177.93
  },
  "id": "camera_09129FF4_10CB_20B9_41A7_CF79E3EF94B0"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 99,
   "yaw": 13.14
  },
  "id": "camera_0919900F_10CB_3F67_41A3_FBEA09E29616"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 101,
   "yaw": -92.78
  },
  "id": "camera_09248028_10CB_3FA9_4195_C08968335E2A"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 43.62
  },
  "id": "camera_0923B041_10CB_3FD8_4198_D017B94A4C4D"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 101,
   "yaw": 130.89
  },
  "id": "camera_092EB059_10CB_3FE8_4174_474037F8470D"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 86.46
  },
  "id": "camera_09359066_10CB_3FD8_41AA_54191C31FA5A"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 99,
   "yaw": 91.36
  },
  "id": "camera_0930C06F_10CB_3FA8_418F_698A9F74B4A5"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 102,
   "yaw": 177.22
  },
  "id": "camera_093FB078_10CB_3FA8_41A1_DD1E197CE8E6"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 107,
   "yaw": 98.4
  },
  "id": "camera_09453081_10CB_3F58_417A_FF1BFC5A28FF"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 125,
   "yaw": -163.38
  },
  "id": "camera_0940408A_10CB_3F68_4192_6C07902D2750"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 101,
   "yaw": 153.02
  },
  "id": "camera_094F2093_10CB_3F78_419D_5948F47BFCC7"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 99,
   "yaw": 129.92
  },
  "id": "camera_094AA09C_10CB_3F68_4185_F592F28218EA"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 107,
   "yaw": -12.04
  },
  "id": "camera_095000A6_10CB_3F58_4160_AB01694D22B8"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 101,
   "yaw": -179.13
  },
  "id": "camera_095FC0AF_10CB_20A8_4150_7D20B8947372"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 110,
   "yaw": 163.91
  },
  "id": "camera_096590B9_10CB_20A8_41A9_4722CFBB43E7"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 99,
   "yaw": -163.22
  },
  "id": "camera_096340C2_10CB_20D8_419A_EA63FDF5A2C2"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 111,
   "yaw": 125.27
  },
  "id": "camera_0969D0CB_10CB_20E8_4181_A5B5F3226487"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -71.36
  },
  "id": "camera_097740D3_10CB_20F8_419D_BACCB0FC6F62"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 106,
   "yaw": -63.3
  },
  "id": "camera_097C10DB_10CB_20E8_4182_255B1DFB7077"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 106,
   "yaw": -106.38
  },
  "id": "camera_097A10E3_10CB_20DF_4197_D7BA11708E47"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 107,
   "yaw": 171.32
  },
  "id": "camera_088070EB_10CB_20AF_4170_DC5C3DE7E4DF"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 102,
   "yaw": -1.85
  },
  "id": "camera_088E70F4_10CB_20B9_419E_AC6714B9D0C9"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -84.12
  },
  "id": "camera_089480FD_10CB_20AB_41A5_CDB10E722A46"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 111,
   "yaw": -64.96
  },
  "id": "camera_0892F105_10CB_215A_41A0_8428379F2C98"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 115,
   "yaw": -175.71
  },
  "id": "camera_06DAC164_10CB_21D9_41AA_B105530D8BB2"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 125,
   "yaw": 46.96
  },
  "id": "camera_06E4D16D_10CB_21AB_41A4_758E02E798AB"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
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
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -157.38
  },
  "id": "camera_06E66176_10CB_21B9_41A4_D0C5AF2E54C0"
 }
], "children": [
 {
  "borderRadius": 0,
  "progressLeft": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipBorderColor": "#767676",
  "toolTipFontSize": 12,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "paddingLeft": 0,
  "toolTipShadowOpacity": 1,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontWeight": "normal",
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "playbackBarHeadShadow": true,
  "progressBackgroundOpacity": 1,
  "toolTipTextShadowOpacity": 0,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipBorderRadius": 3,
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "shadow": false,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipPaddingLeft": 6,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipFontColor": "#606060",
  "paddingBottom": 0,
  "progressBottom": 0,
  "progressHeight": 10,
  "progressBarBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBackgroundColorDirection": "vertical",
  "height": "100%",
  "progressBarOpacity": 1,
  "id": "MainViewer",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowVerticalLength": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBottom": 5,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "width": "100%",
  "toolTipTextShadowColor": "#000000",
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeight": 10,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadWidth": 6,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBorderSize": 0,
  "toolTipFontStyle": "normal",
  "playbackBarRight": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "progressBarBorderRadius": 0,
  "class": "ViewerArea",
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "paddingTop": 0,
  "minHeight": 50,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarBorderRadius": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingTop": 4,
  "toolTipPaddingRight": 6,
  "minWidth": 100,
  "toolTipBorderSize": 1,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0
 },
 {
  "children": [
   {
    "itemBackgroundColor": [],
    "itemPaddingRight": 3,
    "horizontalAlign": "left",
    "backgroundColor": [
     "#000000"
    ],
    "itemLabelFontSize": 14,
    "itemLabelFontFamily": "Arial",
    "selectedItemLabelFontWeight": "bold",
    "itemThumbnailScaleMode": "fit_outside",
    "backgroundOpacity": 0.2,
    "itemLabelFontStyle": "normal",
    "itemLabelFontWeight": "normal",
    "itemBorderRadius": 0,
    "itemPaddingBottom": 3,
    "itemThumbnailShadowHorizontalLength": 3,
    "itemThumbnailShadow": true,
    "itemThumbnailShadowBlurRadius": 4,
    "borderSize": 0,
    "itemThumbnailWidth": 100,
    "paddingLeft": 20,
    "itemThumbnailOpacity": 1,
    "itemPaddingTop": 3,
    "maxHeight": 600,
    "scrollBarWidth": 10,
    "maxWidth": 800,
    "itemBackgroundColorRatios": [],
    "scrollBarVisible": "rollOver",
    "itemPaddingLeft": 3,
    "itemThumbnailBorderRadius": 5,
    "itemThumbnailShadowSpread": 1,
    "class": "ThumbnailList",
    "scrollBarMargin": 2,
    "layout": "horizontal",
    "paddingTop": 10,
    "itemLabelFontColor": "#FFFFFF",
    "itemMode": "normal",
    "verticalAlign": "top",
    "shadow": false,
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailShadowColor": "#000000",
    "itemOpacity": 1,
    "minHeight": 0,
    "itemThumbnailShadowVerticalLength": 3,
    "backgroundColorDirection": "vertical",
    "itemThumbnailHeight": 75,
    "scrollBarColor": "#FFFFFF",
    "itemThumbnailShadowOpacity": 0.8,
    "gap": 10,
    "itemLabelPosition": "bottom",
    "minWidth": 0,
    "paddingBottom": 10,
    "itemVerticalAlign": "middle",
    "itemHorizontalAlign": "center",
    "itemLabelTextDecoration": "none",
    "scrollBarOpacity": 0.5,
    "borderRadius": 5,
    "itemBackgroundColorDirection": "vertical",
    "itemBackgroundOpacity": 0,
    "itemLabelGap": 5,
    "playList": "this.playList_056AA536_0C31_0861_4176_B809452EC011",
    "backgroundColorRatios": [
     0
    ],
    "paddingRight": 20
   }
  ],
  "backgroundOpacity": 0,
  "bottom": 0,
  "layout": "horizontal",
  "borderSize": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "class": "Container",
  "overflow": "visible",
  "paddingTop": 0,
  "verticalAlign": "bottom",
  "shadow": false,
  "minHeight": 20,
  "left": 0,
  "paddingBottom": 0,
  "right": 0,
  "scrollBarColor": "#000000",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "minWidth": 20,
  "horizontalAlign": "center",
  "contentOpaque": false,
  "borderRadius": 0,
  "height": 200,
  "paddingRight": 0
 }
], 
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "width": "100%",
 "backgroundPreloadEnabled": true,
 "start": "this.syncPlaylists([this.playList_056AA536_0C31_0861_4176_B809452EC011,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "class": "Player",
 "scrollBarMargin": 2,
 "overflow": "visible",
 "paddingTop": 0,
 "verticalAlign": "top",
 "shadow": false,
 "mouseWheelEnabled": true,
 "minHeight": 20,
 "scripts": {
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "registerKey": function(key, value){    window[key] = value; },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "getKey": function(key){    return window[key]; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "unregisterKey": function(key){    delete window[key]; },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "existsKey": function(key){    return key in window; }
 },
 "paddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "height": "100%",
 "contentOpaque": false,
 "paddingRight": 0
})