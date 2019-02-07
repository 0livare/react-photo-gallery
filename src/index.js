import React from 'react'
import ReactDOM from 'react-dom'
import Photoswipe from './lib/main'

function App() {
  const slides =   [
    {
      src: 'https://farm1.staticflickr.com/5756/22780612953_55b06ca4d5_k.jpg',
      size: '2048x1365',
      msrc: 'https://farm1.staticflickr.com/5756/22780612953_78da6eb9ec_n.jpg',
      title: 'Streamers'
    },
    {
      src: 'https://farm1.staticflickr.com/709/22780611703_17ac7e37c0_k.jpg',
      size: '2048x1216',
      msrc: 'https://farm1.staticflickr.com/709/22780611703_cac1dee1f2_n.jpg',
      title: 'Blue Dock'
    },
    {
      src: 'https://farm1.staticflickr.com/5629/23407658115_cfa1899b10_k.jpg',
      size: '2048x879',
      msrc: 'https://farm1.staticflickr.com/5629/23407658115_851dece750_n.jpg',
      title: 'Christmas Light'
    },
  ]
    
  return (
    <div>
      <Photoswipe
        slides={slides}
        galleryId={0}
      />
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root'),
)