# photoswipe-react

A React wrapper for the [PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe) library.

## Usage

```bash
yarn add @zposten/photoswipe-react styled-components
```

```jsx
import Photoswipe from '@zposten/photoswipe-react'

function MyComponent() {
  return <Photoswipe slides={slides} galleryId={0} />
}

let slides = [
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

## Notes

- This library currently does not allow for a custom implementation of the grid of photos because I think in order to make this work, I will have to implement React context to pass the `openPhotoswipe()` prop down.

- This library currently depends on styled-components because I couldn't find another nice way to bundle styles without external CSS files.
