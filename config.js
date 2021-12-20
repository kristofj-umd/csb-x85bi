var config = {
  style: "mapbox://styles/carsonpolomis/ckwv2k4170deq15qkzk6jt566",
  accessToken:
    "pk.eyJ1IjoiY2Fyc29ucG9sb21pcyIsImEiOiJja3UyeTE4OGgwMG5jMnBtcmFnYmo4OW5iIn0.xQh5CqsKJKEjfVH5fN8Tug",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: true,
  title: "Climbing on the North Shore",
  subtitle: "A light guide around North Shore climbing spots",
  byline: "By Carson Polomis",
  footer:
    'Sources: <a href="https://www.mountainproject.com/"> The Mountain Project </a>, <a href="https://github.com/mapbox/storytelling">GitHub</a>, <a href="https://www.mapbox.com/webinars/storytelling-template-live-demo">Mapbox Storytelling</a>',
  chapters: [
    //Prelimiary Chapter
    {
      id: "Overview_NS",
      //position of the text box
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description:
        '<p><b>Overview:</b></p> <p>The North Shore of Minnesota offers some phenomenal views and trails, and the climbs are no different. As you scroll through this storymap, you will find various types of climbs all along the North Shore, starting in Duluth and ending up at Carlton Peak.</p> <p><b>Safety:</b></p> <p>Keep in mind that climbing is inherently dangerous, and so safety is the number one priority. Click <a href="https://www.denverclimbingcompany.com/rock-climbing-safety/"> here </a> to learn more about climbing safety from the Denver Climbing Company.</p> <p><b>Rating Scales:</b></p> <p> One thing to keep in mind is that each style of climb has a different type rating scale, and they can be found below: <ul> <li>Boulder: V</li> <li>Trad: T</li> <li>Sport: S</li> <li>Top Rope: TR</li> <li>Ice: WI</li> </ul> In addition, all approaches are listed as a red line and all descriptions are gathered from <a href="https://www.mountainproject.com/">The Mountain Project</a>.</p>',
      //where the camera will point to
      //(** Just what's in the curly brackets!! **)
      location: {
        center: { lon: -91.22184, lat: 47.24341 },
        zoom: 7,
        pitch: 0.0,
        bearing: 0.0
      },
      //style of animation to get to the next chapter
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ]
    }, //end of chapter

    //Chapter 1: Ely's Peak Top Rope
    {
      id: "Elys-Peak-TR",
      //position of the text box
      alignment: "right",
      hidden: false,
      title: "Ely's Peak Top Rope",
      image: "Images/Elys_Peak_TR.png",
      description:
        '<p>Elys Peak is the prefered home crag of Duluth and lays within the Duluth City Limits. Climbs are short and relativley straight forward with a mix of crack and face climbing on solid basalt. There are two areas here as well as some bouldering. Climbs on the Tunnel Bluff are about 60 feet and closer to 45 or 50 feet on the Northwest Bluff. Duluth and the northshore area have a chalk free and bolt free ethic, though a few crags have started to sprout bolts. </p> <p>All climbs are easily top-roped and a few are good trad leads. Although there are a couple of stout routes here, the bulk of the climbing is in the sub 5.11 range with a couple in the 5.6 to 5.8 range.</p> <p>Worthwhile climbs include Dislocation Overhang (5.6) and Bionic Finger Crack (5.12a) on the Tunnel Bluff and Corner Geometry (5.6), The Flake (5.7) and The Bulge (5.8) on the Northwestern Bluff.</p> <p>For more information, click <a href="https://www.mountainproject.com/area/105841445/elys-peak">here</a></p> <p>Number of Routes: 14</p> <p>Difficulty: TR 5.5 - TR 5.12</p> <p>Elevation: 982ft</p> <p><a href="https://www.google.com/maps/dir//Munger+Trail+Trailhead,+11804+123rd+Ave+W,+Duluth,+MN+55808/@46.6772192,-92.2565162,674m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x52ae4839c0da2145:0x365ba0a3aa4e1d4f!2m2!1d-92.258778!2d46.6762074!3e0!5m1!1e4?hl=en"> Parking Information </a></p>',
      //where the camera will point to
      //(**don't change the location itself, just what's in the curly brackets!!**)
      location: {
        center: { lon: -92.25316, lat: 46.67928 },
        zoom: 15.5,
        pitch: 70.0,
        bearing: 15.0
      },
      //style of animation to get to the next chapter
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ]
    },

    //Chapter 2: Casket Quarry Ice Climbing
    {
      id: "Casket-Quarry-Ice",
      //position of the text box
      alignment: "left",
      hidden: false,
      title: "Casket Quarry Ice Climbing",
      image: "Images/Casket_Quarry_Ice.jpeg",
      description:
        '<p>As of 2015 there has been a super cool project under way to make Casket Quarry a legit ice climbing park! This project will not only make climbing in the quarry actually legal for the first time ever, but there is hope to have ice farming in the future years to offer up some easier terrain for the newbies to learn on and also give quality ice year after year. Many thanks to all who have helped with this big project, especially the Duluth Climbers Coalition. To read more about this project click here.</p> <p>Now the crag has close to 20 Ice and mixed routes all of which can be lead ground-up with good protection. If this crag were in Colorado there would be 50+ climbers there every weekend! Luckily it is in Northern Minnesota.</p> <p>For more information, click <a href="https://www.mountainproject.com/area/105894082/casket-quarry-ice">here</a></p> <p>Number of Routes: ~20</p> <p>Difficulty: WI3 - WI5</p> <p>Elevation: 884</p> <p><a href="https://www.google.com/maps/place/Quarry+Park+Parking+Disc+Golf/@46.7496551,-92.1725879,190m/data=!3m1!1e3!4m13!1m7!3m6!1s0x0:0x4ff619dbd3be3e2e!2zNDbCsDQ1JzA4LjIiTiA5MsKwMTAnMTcuOCJX!3b1!8m2!3d46.75229!4d-92.1716!3m4!1s0x52ae4c40e3a8f98d:0xe4940203114a4917!8m2!3d46.7496001!4d-92.1718571?hl=en">Parking Information</a></p>', //where the camera will point to
      //(**don't change the location itself, just what's in the curly brackets!!**)
      location: {
        center: { lon: -92.17229, lat: 46.75181 },
        zoom: 16,
        pitch: 70.0,
        bearing: -20
      },
      //style of animation to get to the next chapter
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ]
    },

    //Chapter 3: Casket Quarry Sport Climbing
    {
      id: "Casket-Quarry-Sport",
      //position of the text box
      alignment: "left",
      hidden: false,
      title: "Casket Quarry Sport Climbing",
      image: "Images/Casket_Quarry_Sport.jpeg",
      description:
        '<p>Casket is a great local ice and mixed climbing area. This is a big wall with many bolted lines thanks to the efforts of many, but mostly James Loveridge. People have been known to sport climb here, but please use caution as the rock quality is so-so and we do not want to hurt the ice climbs or yourself.</p><p>If you plan on roping a route off the anchors, please use your own carabiners/draws to avoid wearing out the expensive hardware prematurely. If there are biners or other clip in replaceable hardware on the anchor, feel free to use them. If they are looking worn and sketchy, just replace with biners of your own. </p><p>For more information, click <a href="https://www.mountainproject.com/area/105894082/casket-quarry-ice">here</a></p> <p>Number of Routes: ~25</p> <p>Spread of Difficulty: S5 - S9</p> <p>Elevation: 884 ft</p> <p><a href="https://www.google.com/maps/place/Quarry+Park+Parking+Disc+Golf/@46.7496551,-92.1725879,190m/data=!3m1!1e3!4m13!1m7!3m6!1s0x0:0x4ff619dbd3be3e2e!2zNDbCsDQ1JzA4LjIiTiA5MsKwMTAnMTcuOCJX!3b1!8m2!3d46.75229!4d-92.1716!3m4!1s0x52ae4c40e3a8f98d:0xe4940203114a4917!8m2!3d46.7496001!4d-92.1718571?hl=en">Parking Information </a></p>', //where the camera will point to
      //(**don't change the location itself, just what's in the curly brackets!!**)
      location: {
        center: { lon: -92.17104, lat: 46.75227 },
        zoom: 16,
        pitch: 70.0,
        bearing: -20
      },
      //style of animation to get to the next chapter
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ]
    },

    //Chapter 4: Postpartum Wall Bouldering
    {
      id: "Postpartum-Bouldering",
      //position of the text box
      alignment: "right",
      hidden: false,
      title: "The Postpartum Wall",
      image: "Images/Postpartum_Wall_Boulder.jpeg",
      description:
        '<p>A nice cliff band with slabby to overhanging routes reaching 15 feet tall with excellent landings and some exciting top outs. The Wall includes relativly easy bouldering routes ranging from a V0 to a V6. This is a great spot to just get out and do some quick runs if you need to get outside. </p> <p>For more information, click <a href="https://www.mountainproject.com/area/106203270/postpartum-wall">here</a></p> <p>Number of Routes: 11</p> <p>Spread of Difficulty: V0 - V6</p> <p>Elevation: 1,197ft</p> <p><a href="https://www.google.com/maps/place/Skyline+Parkway+Overlook/@46.7637768,-92.1531651,95m/data=!3m1!1e3!4m5!3m4!1s0x52ae4d0779ec0a9d:0x9010674875464854!8m2!3d46.7636821!4d-92.1531926">Parking Information</a></p>', //where the camera will point to
      //(**don't change the location itself, just what's in the curly brackets!!**)
      location: {
        center: { lon: -92.15265, lat: 46.76725 },
        zoom: 16,
        pitch: 80.0,
        bearing: -65.0
      },
      //style of animation to get to the next chapter
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ]
    },

    //Chapter 5: Enger Park Bouldering
    {
      id: "EngerPark-Bouldering",
      //position of the text box
      alignment: "left",
      hidden: false,
      title: "Enger Park Bouldering",
      image: "Images/Enger_Park_Bouldering.jpeg",
      description:
        '<p>A couple of slabby outcroppings near Enger Tower. Park in front of the large rock outcroppings by the street, and head up the climbers trail to the right. This is a good spot if you only have half an hour, a pad, and no partner. Mostly slab problems and a couple cracks. Bring a BBQ for after your session and hit up Enger Park.</p><p>For more information, click <a href="https://www.mountainproject.com/area/105988868/enger-park">here</a></p> <p>Number of Routes: 11</p> <p>Difficulty: Veasy - V4</p> <p>Elevation: 1,096</p><p><a href= "https://www.google.com/maps/dir//46.7781365,-92.1247436/@46.7781755,-92.1249112,81m/data=!3m1!1e3!4m2!4m1!3e0">Parking Information</a></p>', //where the camera will point to
      //(**don't change the location itself, just what's in the curly brackets!!**)
      location: {
        center: { lon: -92.12508, lat: 46.77784 },
        zoom: 16.25,
        pitch: 70.0,
        bearing: 178.32
      },
      //style of animation to get to the next chapter
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ]
    },

    //Chapter 6: Silver Creek Tunnel Sport Climbing
    {
      id: "Silver-Creek-Sport",
      //position of the text box
      alignment: "left",
      hidden: false,
      title: "Silver Ceek Tunnel Sport Climbing",
      image: "Images/Silver_Creek_Sport.jpeg",
      description:
        '<p>The worlds easiest access, all climbs start from the flat bike path.Several easy trad routes with bolted anchors and a handful of sport routes. Some additional routes can be set up as top ropes from the anchors of a neighboring lead climb. No walking or scrambling  access to the tops of the climbs, because the cliff gets lower and lower angle the higher you get, and is covered in gravel and loose rock. There are plenty of anchors, including at various heights, so you can do some practice multi pitch climbing here too, although the second ‘pitch’ will be very short and easy. Much of the rock is poor quality and crumbly, but due to cleaning and decent use, as well as the rounded, uncut nature of most holds, most of the climbs are fine to climb, and pose little risk of breaking off key holds.</p><p>For more information, click <a href="https://www.mountainproject.com/area/114259227/silver-creek-tunnel-area-north-shore">here</a></p> <p>Number of Routes: 7</p> <p>Difficulty: S5.7 - S5.10</p> <p>Elevation: 783ft</p><p><a href= "https://www.google.com/maps/place/Silver+Creek+Cliff+Wayside+Park,+Two+Harbors,+MN+55616/@47.070714,-91.5908465,477m/data=!3m1!1e3!4m5!3m4!1s0x52af3ef6cf13bd27:0xffd70b4c4e1e82c!8m2!3d47.0714449!4d-91.5898418?hl=en">Parking Information</a></p>', //where the camera will point to
      //(**don't change the location itself, just what's in the curly brackets!!**)
      location: {
        center: { lon: -91.5921, lat: 47.06949 },
        zoom: 16,
        pitch: 65.0,
        bearing: -68
      },
      //style of animation to get to the next chapter
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ]
    },

    //Chapter 7: Silver Creek Tunnel Trad Climbing
    {
      id: "Silver-Creek-Trad",
      //position of the text box
      alignment: "left",
      hidden: false,
      title: "Silver Ceek Tunnel Trad Climbing",
      image: "Images/Silver_Creek_Trad.jpeg",
      description:
        '<p>The worlds easiest access, all climbs start from the flat bike path.Several easy trad routes with bolted anchors and a handful of sport routes. Some additional routes can be set up as top ropes from the anchors of a neighboring lead climb. No walking or scrambling  access to the tops of the climbs, because the cliff gets lower and lower angle the higher you get, and is covered in gravel and loose rock. There are plenty of anchors, including at various heights, so you can do some practice multi pitch climbing here too, although the second ‘pitch’ will be very short and easy. Much of the rock is poor quality and crumbly, but due to cleaning and decent use, as well as the rounded, uncut nature of most holds, most of the climbs are fine to climb, and pose little risk of breaking off key holds.</p> For more information, click <a href="https://www.mountainproject.com/area/114259227/silver-creek-tunnel-area-north-shore">here</a></p> <p>Number of Routes: 7</p> <p>Difficulty: T5.5 - T5.10</p> <p>Elevation: 783ft</p><p><a href= "https://www.google.com/maps/place/Silver+Creek+Cliff+Wayside+Park,+Two+Harbors,+MN+55616/@47.070714,-91.5908465,477m/data=!3m1!1e3!4m5!3m4!1s0x52af3ef6cf13bd27:0xffd70b4c4e1e82c!8m2!3d47.0714449!4d-91.5898418?hl=en">Parking Information</a></p>', //where the camera will point to
      //(**don't change the location itself, just what's in the curly brackets!!**)
      location: {
        center: { lon: -91.5921, lat: 47.06949 },
        zoom: 16,
        pitch: 65.0,
        bearing: -68
      },
      //style of animation to get to the next chapter
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ]
    },

    //Chapter 8: Silver Bay Ice Climbing
    {
      id: "Silver-Bay-Ice",
      //position of the text box
      alignment: "right",
      hidden: false,
      title: "Silver Bay Ice Climbing",
      image: "Images/Silver_Bay_Ice.jpeg",
      description:
        '<p>Description For more information, click <a href="https://www.mountainproject.com/area/118271503/silver-bay-ice">here</a></p> <p>Number of Routes: 2</p> <p>Difficulty: WI3 - WI4</p> <p>Elevation: 780ft</p><p><a href= "https://www.google.com/maps/dir//AmericInn+by+Wyndham+Silver+Bay,+150+Mensing+Dr,+Silver+Bay,+MN+55614/@47.3018635,-91.250886,654m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x52a8adeb9b5eb4b5:0x1a188737a57f79b2!2m2!1d-91.2484954!2d47.3008293!3e0?hl=en">Parking Information</a></p>', //where the camera will point to
      //(**don't change the location itself, just what's in the curly brackets!!**)
      location: {
        center: { lon: -91.25079, lat: 47.30352 },
        zoom: 16.13,
        pitch: 75,
        bearing: -32.26
      },
      //style of animation to get to the next chapter
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ]
    },

    //Chapter 9: Palisade Head Trad Climbing
    {
      id: "Palisade-Head-Trad",
      //position of the text box
      alignment: "right",
      hidden: false,
      title: "Palisade Head Trad Climbing",
      image: "Images/Palisade_Head_Trad.jpeg",
      description:
        '<p>Palisade Head is the most serious and richest crag in Minnesota. With very few climbs easier than 5.8 and the bulk of climbs harder than 5.10, this is the place in Minnesota to hone your hardman skills. Between several off-width, hand and heinous finger cracks, crystal faces, or stunning arêtes, there should be enough variety here to please almost anyone!</p> <p>For more information, click <a href="https://www.mountainproject.com/area/105814857/palisade-head">here</a></p> <p>Number of Routes: 50+</p> <p>Difficulty: T5.7 - T5.13</p> <p>Elevation: 738ft</p><p><a href= "https://www.google.com/maps/place/Palisade+Head/@47.320159,-91.2114378,256m/data=!3m1!1e3!4m5!3m4!1s0x52a8ae66b8bb6f81:0xea59930545d974ff!8m2!3d47.3202764!4d-91.2116735?hl=en">Parking Information</a></p>',
      //where the camera will point to
      //(**don't change the location itself, just what's in the curly brackets!!**)
      location: {
        center: { lon: -91.21058, lat: 47.32045 },
        zoom: 16.08,
        pitch: 75.0,
        bearing: -53.06
      },
      //style of animation to get to the next chapter
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ]
    },

    //Chapter 10: Carlton Peak Top Rope
    {
      id: "Carlton-Peak-TR",
      //position of the text box
      alignment: "right",
      hidden: false,
      title: "Carlton Peak Top Rope",
      image: "Images/Carlton_Peak_TR.jpeg",
      description:
        '<p>This area is included in a strict no chalk ethic. The rock is anorthosite, very strong, but also very abrasive, it is recommend bringing some old carpet to pad anchor set-ups and protect your rope. This is a top-rope or trad-lead crag. No bolts. None of these climbs have names, just numbers. Some of this information is adapted from the Minnesota and Wisconsin Falcon Guide, thanks to the author Mike Farris.<p> </p>For more information, click <a href="https://www.mountainproject.com/area/105814854/carlton-peak">here</a></p> <p>Number of Routes: 26</p> <p>Difficulty: TR5.6 - TR5.12</p> <p>Elevation: 1,492ft</p><p><a href= "https://www.google.com/maps/dir//Britton+Peak+Trailhead,+Superior+Hiking+Trail,+Tofte,+MN+55615/@47.5987354,-90.8623524,292m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x52a6252bee01769b:0xc6d453ce19386755!2m2!1d-90.8621156!2d47.5989217!3e0?hl=en">Parking Information</a></p>',

      // "Directions: From Tofte (HWY 61) go North onto Cook County Road 2 for about 2.5 miles and follow signs to the Britton Peak parking lot. Hike about 30 minutes to Carlton Peak.",
      //where the camera will point to
      //(**don't change the location itself, just what's in the curly brackets!!**)
      location: {
        center: { lon: -90.86054, lat: 47.58351 },
        zoom: 16.0,
        pitch: 90.0,
        bearing: 52.0
      },
      //style of animation to get to the next chapter
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ]
    }
  ]
};
