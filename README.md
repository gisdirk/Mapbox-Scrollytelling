# Mapbox GL JS Scrollytelling Prototype

A proof-of-concept scrollytelling interface where map state (camera position, pitch, bearing, terrain) is driven by scroll position. Built as a technical prototype to explore interactive geospatial narrative for institutional and conservation communication contexts.

**Status: ~30% complete. Three chapters functional. Active development.**

Live demo: [link]

---

## What it does

As the user scrolls, the map automatically flies, tilts, and zooms to geographic locations that match the narrative content on screen. The map is the primary visual — not a supporting element.

Implemented so far:

- Animated path reveal along a geographic route
- Marker that follows the path as it draws
- Camera movements (fly-to, pitch, bearing transitions)
- 3D satellite terrain using Mapbox terrain-v2
- Inset mini-map (globe) for spatial orientation
- Video and image integration within scroll chapters
- Text overlays with scroll-triggered visibility

Planned:

- Pulsing point markers for event locations
- Day/night basemap transition between chapters
- 3D objects via Three.js integration
- Additional chapters and narrative content

---

## Stack

- Mapbox GL JS
- HTML / CSS / JavaScript (vanilla)
- Three.js (planned for 3D object layer)
- Mapbox terrain-v2 (3D terrain)

---

## Approach

Built on top of the open-source scrollytelling framework published by International Crisis Group. The starting template handles the scroll-to-map-state binding logic. From there, custom chapter data, camera sequences, path animation, and UI components were added.

LLMs were used as scaffolding tools to prototype Mapbox GL effects and adapt existing patterns to new data — consistent with how the Crisis Group team describes their own workflow.

---

## Structure

```
index.html        Main entry point
style.css         Layout and typography
config.js         Chapter definitions (location, zoom, pitch, bearing, content)
map.js            Mapbox initialisation, scroll binding, animation logic
assets/           Images and video assets
data/             GeoJSON route and point data
```

---

## Running locally

No build step required.

```bash
git clone https://github.com/[your-handle]/mapbox-scrollytelling-prototype
cd mapbox-scrollytelling-prototype
```

Add your Mapbox public token to `map.js`:

```javascript
mapboxgl.accessToken = 'YOUR_TOKEN_HERE';
```

Open `index.html` in a browser or serve locally:

```bash
python3 -m http.server 8000
```

---

## Credit

Scrollytelling framework adapted from [International Crisis Group open-source repositories](https://github.com/CrisisGroup).
