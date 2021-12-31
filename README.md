# photoswipe-react

A strongly typed, customizable, React photo viewer with mobile gestures built in that looks great right out of the box.
Based on the [PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe) library.

## Installation

```bash
# With yarn
yarn add @zposten/photoswipe-react

# Or with NPM
npm i @zposten/photoswipe-react
```

## Import Global CSS

First you need to add the global CSS to your project. Depending on your project setup, how you import this global CSS will be slightly different.

This works for create-react-app and Next.js projects (it must be done in `_app.js` for Next.js projects):

```js
import '@zposten/photoswipe-react/dist/photoswipe.css'
import '@zposten/photoswipe-react/dist/default-skin.css'
import '@zposten/photoswipe-react/dist/thumbnails.css' // Optional
```

In Remix, you can add the following at [route layout boundaries](https://remix.run/docs/en/v1/guides/styling):

```js
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: '@zposten/photoswipe-react/dist/photoswipe.css',
    },
    {
      rel: 'stylesheet',
      href: '@zposten/photoswipe-react/dist/default-skin.css',
    },
    {
      // Optional
      rel: 'stylesheet',
      href: '@zposten/photoswipe-react/dist/thumbnails.css',
    },
  ]
}
```

## Usage

The markup is simple yet customizable. The hardest part is just collecting all your image data into the slide format.

```tsx
import {Gallery, LightBox, Thumbnail} from '@zposten/photoswipe-react'
import type {Slide} from '@zposten/photoswipe-react'

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
