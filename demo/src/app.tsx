import {Gallery, LightBox, Thumbnail} from '@zposten/photo-gallery'
import type {Slide} from '@zposten/photo-gallery'

import '@zposten/photo-gallery/dist/photoswipe.css'
import '@zposten/photo-gallery/dist/default-skin.css'
import '@zposten/photo-gallery/dist/thumbnails.css'

export function App() {
  return (
    <Gallery slides={slides}>
      {slides.map(slide => (
        <Thumbnail key={slide.src} slide={slide} aspectRatioMultiplier={200} />
      ))}
      <LightBox />
    </Gallery>
  )
}

// let slidesCats: Slide[] = [
//   {src: 'http://placekitten.com/g/300/200', size: '300x200', title: 'cat'},
//   {src: 'http://placekitten.com/g/600/400', size: '300x200', title: 'cat'},
//   {src: 'http://placekitten.com/g/900/600', size: '300x200', title: 'cat'},
//   {src: 'http://placekitten.com/g/1200/800', size: '300x200', title: 'cat'},
// ]

let slides: Slide[] = [
  {
    src: 'https://farm1.staticflickr.com/5629/23407658115_cfa1899b10_k.jpg',
    size: '2048x879',
    msrc: 'https://farm1.staticflickr.com/5629/23407658115_851dece750_n.jpg',
    title: 'Christmas Light',
  },
  {
    src: 'https://farm1.staticflickr.com/687/23039709779_d270aaed05_k.jpg',
    size: '2048x1449',
    msrc: 'https://farm1.staticflickr.com/687/23039709779_ce8df18e24_n.jpg',
    title: 'America the Beautiful',
  },
  {
    src: 'https://farm1.staticflickr.com/631/22780522083_149f61dafd_k.jpg',
    size: '2048x1365',
    msrc: 'https://farm1.staticflickr.com/631/22780522083_a707aecd1a_n.jpg',
    title: 'River Walk',
  },
  {
    src: 'https://farm1.staticflickr.com/670/22780587503_7f41467edd_k.jpg',
    size: '2048x1266',
    msrc: 'https://farm1.staticflickr.com/670/22780587503_aabbe4075b_n.jpg',
    title: 'Outside Wrigly',
  },
  {
    src: 'https://farm1.staticflickr.com/709/22780611703_17ac7e37c0_k.jpg',
    size: '2048x1216',
    msrc: 'https://farm1.staticflickr.com/709/22780611703_cac1dee1f2_n.jpg',
    title: 'Blue Dock',
  },
  {
    src: 'https://farm1.staticflickr.com/5756/22780612953_55b06ca4d5_k.jpg',
    size: '2048x1365',
    msrc: 'https://farm1.staticflickr.com/5756/22780612953_78da6eb9ec_n.jpg',
    title: 'Streamers',
  },
  {
    src: 'https://farm1.staticflickr.com/5760/23039809719_4e7690032c_k.jpg',
    size: '2048x1365',
    msrc: 'https://c1.staticflickr.com/6/5760/23039809719_32046ce5a1_z.jpg',
    title: 'Sparklers',
  },
  {
    src: 'https://c1.staticflickr.com/3/2529/32771784482_6e3d79a6b3_k.jpg',
    size: '2048x1365',
    msrc: 'https://c1.staticflickr.com/3/2529/32771784482_e5a5e7ee97_n.jpg',
    title: 'Jumping in puddles',
  },
  {
    src: 'https://c1.staticflickr.com/3/2113/32110482503_83548c6aec_k.jpg',
    size: '1365x2048',
    msrc: 'https://c1.staticflickr.com/3/2113/32110482503_fb3e474f67_n.jpg',
    title: 'Cold spring',
  },
  {
    src: 'https://c1.staticflickr.com/4/3829/32771776222_ac929e8ce3_k.jpg',
    size: '2048x1365',
    msrc: 'https://c1.staticflickr.com/4/3829/32771776222_cb7cbc4834_n.jpg',
    title: 'Dam splashing water',
  },
  {
    src: 'https://c1.staticflickr.com/4/3680/32110479383_a1a7c5c35a_o.jpg',
    size: '8749x3193',
    msrc: 'https://c1.staticflickr.com/4/3680/32110479383_58b4c89e3e_n.jpg',
    title: 'The Misty Veils',
  },
  {
    src: 'https://c1.staticflickr.com/1/625/32771771382_d44337e5d5_k.jpg',
    size: '1958x2048',
    msrc: 'https://c1.staticflickr.com/1/625/32771771382_c3bbcf3c10_n.jpg',
    title: 'Ahhhdorable',
  },
  {
    src: 'https://c1.staticflickr.com/3/2074/32771764922_c2461eefed_k.jpg',
    size: '2048x1365',
    msrc: 'https://c1.staticflickr.com/3/2074/32771764922_dc63cdfb92_n.jpg',
    title: 'Trees',
  },
]
