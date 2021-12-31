# photoswipe-react

A React wrapper for the [PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe) library.

## Installation

```bash
# With yarn
yarn add @zposten/photoswipe-react

# Or with NPM
npm i @zposten/photoswipe-react
```

## Usage

First you need to add the global CSS to your project. There are two difference CSS files for your to import.

```bash
@zposten/photoswipe-react/dist/photoswipe.css
@zposten/photoswipe-react/dist/default-skin.css
@zposten/photoswipe-react/dist/photoswipe-react.css # Optional
```

```tsx
import {Gallery, LightBox, Thumbnail, Slide} from '@zposten/photoswipe-react'

function MyComponent() {
  return (
    <Gallery slides={slides} galleryId={0}>
      {slides.map(slide => (
        <Thumbnail key={slide.src} slide={slide} />
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
    caption: 'Streamers',
  },
  {
    src: 'https://farm1.staticflickr.com/709/22780611703_17ac7e37c0_k.jpg',
    size: '2048x1216',
    msrc: 'https://farm1.staticflickr.com/709/22780611703_cac1dee1f2_n.jpg',
    caption: 'Blue Dock',
  },
  {
    src: 'https://farm1.staticflickr.com/5629/23407658115_cfa1899b10_k.jpg',
    size: '2048x879',
    msrc: 'https://farm1.staticflickr.com/5629/23407658115_851dece750_n.jpg',
    caption: 'Christmas Light',
  },
]
```
