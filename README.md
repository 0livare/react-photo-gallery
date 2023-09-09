# React Photo Gallery

A strongly typed, customizable, React photo viewer with mobile gestures built in that looks great right out of the box.
Based on the [PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe) library.

### [Demo](https://photoswipe-react-demo.netlify.app)

## Install

```bash
npm i @zposten/photo-gallery     # with npm
pnpm i @zposten/photo-gallery    # with pnpm
yarn add @zposten/photo-gallery  # with yarn
```

## Import Global CSS

First you need to add the global CSS to your project. Depending on your project setup, how you import this global CSS will be slightly different.

This works for create-react-app and Next.js projects (it must be done in `_app.js` for Next.js projects):

```js
import '@zposten/photo-gallery/dist/photoswipe.css'
import '@zposten/photo-gallery/dist/default-skin.css'
import '@zposten/photo-gallery/dist/thumbnails.css' // Optional
```

In Remix, you can add the following at [route layout boundaries](https://remix.run/docs/en/v1/guides/styling):

```js
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: '@zposten/photo-gallery/dist/photoswipe.css',
    },
    {
      rel: 'stylesheet',
      href: '@zposten/photo-gallery/dist/default-skin.css',
    },
    {
      // Optional
      rel: 'stylesheet',
      href: '@zposten/photo-gallery/dist/thumbnails.css',
    },
  ]
}
```

## Usage

The markup is simple yet customizable. The hardest part is just collecting all your image data into the slide format.

```tsx
import {Gallery, LightBox, Thumbnail, type Slide} from '@zposten/photo-gallery'

function MyComponent() {
  return (
    <Gallery slides={slides}>
      {slides.map(slide => (
        <Thumbnail key={slide.src} slide={slide} aspectRatioMultiplier={200} />
      ))}
      <LightBox />
    </Gallery>
  )
}

let slides: Slide[] = [
  {
    src: 'https://farm1.staticflickr.com/5756/22780612953_55b06ca4d5_k.jpg',
    size: '2048x1365',
    // msrc is a lower resolution version of src
    msrc: 'https://farm1.staticflickr.com/5756/22780612953_78da6eb9ec_n.jpg',
    title: 'Streamers',
  },
  {
    src: 'https://farm1.staticflickr.com/709/22780611703_17ac7e37c0_k.jpg',
    size: '2048x1216',
    msrc: 'https://farm1.staticflickr.com/709/22780611703_cac1dee1f2_n.jpg',
    title: 'Blue Dock',
  },
  {
    src: 'https://farm1.staticflickr.com/5629/23407658115_cfa1899b10_k.jpg',
    size: '2048x879',
    msrc: 'https://farm1.staticflickr.com/5629/23407658115_851dece750_n.jpg',
    title: 'Christmas Light',
  },
]
```
