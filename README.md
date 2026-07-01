# ViewportFrames.css

Screenshot Presentation Library

ViewportFrames.css is a lightweight CSS library for displaying screenshots, videos, iframes, and HTML content inside beautiful device and browser frames.

## Installation

Install from GitHub:

```sh
npm install github:gil0304/ViewportFrames
```

Import the CSS from your app entry:

```js
import "@gil0304/viewport-frames/viewport-frames.css";
```

Or link the CSS directly:

```html
<link rel="stylesheet" href="viewport-frames.css">
```

You can also use a CDN URL after the repository is pushed:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gil0304/ViewportFrames@main/viewport-frames.css">
```

## Usage

```html
<div class="vf-iphone">
  <img src="screenshot.png" alt="App screenshot">
</div>
```

```html
<div class="vf-browser" data-title="Portfolio" data-url="https://example.com">
  <video src="demo.mp4" autoplay muted loop playsinline></video>
</div>
```

## Frames

* `.vf-iphone` - iPhone frame based on real body and display ratios
* `.vf-ipad` - iPad Pro 13-inch frame based on real body and display ratios; add `.vf-11` for 11-inch or `.vf-13` to be explicit
* `.vf-macbook` - MacBook frame with real display ratio and notched bezel
* `.vf-browser` - Browser window style frame; set `data-title` and `data-url` to control the tab title and address bar text
* `.vf-floating` - Floating screen style frame

## Variations

* `.vf-dark`, `.vf-light`, `.vf-silver`
* `.vf-black`, `.vf-white`, `.vf-natural`, `.vf-blue`, `.vf-orange`
* `.vf-space-gray`, `.vf-midnight`, `.vf-starlight`, `.vf-gold`
* `.vf-portrait`, `.vf-landscape`
* `.vf-notch`, `.vf-dynamic-island`
* `.vf-compact`, `.vf-large`

## Effects

* `.vf-tilt-left`
* `.vf-tilt-right`
* `.vf-tilt-forward`
* `.vf-tilt-back`
* `.vf-float`
* `.vf-glow`
* `.vf-no-shadow`

## Showcase

```html
<div class="vf-showcase vf-overlap">
  <div class="vf-macbook">
    <img src="web.png" alt="Web dashboard">
  </div>

  <div class="vf-iphone vf-dark">
    <img src="app.png" alt="Mobile app">
  </div>
</div>
```

## Scrollable Screen

```html
<div class="vf-iphone vf-scroll">
  <div class="vf-screen-content">
    <!-- Long content -->
  </div>
</div>
```

## Before / After

```html
<div class="vf-before-after">
  <div class="vf-before">
    <p>Before</p>
    <img src="app.png" alt="Plain screenshot">
  </div>

  <div class="vf-after">
    <p>After</p>
    <div class="vf-iphone">
      <img src="app.png" alt="Screenshot inside an iPhone frame">
    </div>
  </div>
</div>
```

## Customization

Use CSS variables on `:root` or individual frames.

```css
:root {
  --vf-frame-color: #111;
  --vf-frame-secondary-color: #222;
  --vf-screen-bg: #000;
  --vf-screen-radius: 32px;
  --vf-frame-radius: 44px;
  --vf-border-width: 10px;
  --vf-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
  --vf-glow: 0 0 40px rgba(120, 160, 255, 0.35);
  --vf-width: 320px;
  --vf-aspect-ratio: 450 / 920;
  --vf-duration: 4s;
  --vf-tilt: 6deg;
  --vf-scale: 1;
}
```

```html
<div class="vf-iphone vf-natural" style="--vf-width: 300px;">
  <img src="screenshot.png" alt="App screenshot">
</div>
```

Color classes set the metal/glass tones. You can also override
`--vf-frame-color`, `--vf-frame-secondary-color`, `--vf-metal-edge`,
`--vf-metal-mid`, `--vf-metal-dark`, and `--vf-metal-glint` directly.

## Accessibility

ViewportFrames.css does not generate accessible labels for your media. Add meaningful `alt` text to images and use video controls when audio is present.

Motion effects respect `prefers-reduced-motion`.

## Browser Support

Designed for current Chrome, Safari, Firefox, Edge, iOS Safari, and Android Chrome. Internet Explorer is not supported.

## License

MIT
