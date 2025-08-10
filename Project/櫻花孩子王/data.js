var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama2",
      "name": "Panorama2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.983732685619028,
        "pitch": 0.7182190218170525,
        "fov": 1.2579933690789944
      },
      "linkHotspots": [
        {
          "yaw": 3.0401432943224815,
          "pitch": 0.8689477409570259,
          "rotation": 0,
          "target": "1-panorama1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama1",
      "name": "Panorama1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.13549009134640144,
        "pitch": 0.48572269690813386,
        "fov": 1.2579933690789944
      },
      "linkHotspots": [
        {
          "yaw": 1.6422515823777957,
          "pitch": 0.2361276205652043,
          "rotation": 0,
          "target": "0-panorama2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
