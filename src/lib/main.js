import React from 'react'
import PropTypes from 'prop-types'

import Photoswipe from 'photoswipe'
import PhotoswipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'

import {Gallery} from './components/Gallery'
import {PhotoswipeOverlay} from './components/photoswipe/PhotoswipeOverlay'

class ReactPhotoswipe extends React.Component {
  static propTypes = {
    galleryId: PropTypes.number.isRequired,
    slides: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      msrc: PropTypes.string.isRequired,
      title: PropTypes.string,
      size: PropTypes.string,
      w: PropTypes.number,
      h: PropTypes.number,
    })).isRequired,
  }

  openPhotoswipe = (e, index) => {
    // Don't navigate to the url on the anchor tag to go to flicker
    e.preventDefault()

    let pswpElement = document.querySelectorAll('.pswp')[0]
    let options = {index, galleryUID: this.props.galleryId}

    let gallery = new Photoswipe(
      pswpElement,
      PhotoswipeUI_Default,
      this.props.slides,
      options
    )

    gallery.init()
  }

  render() {
    return (
      <>
        <Gallery 
          openPhotoswipe={this.openPhotoswipe}
          slides={this.props.slides}
          galleryId={this.props.galleryId}
        />
        <PhotoswipeOverlay />
      </>
    )
  }
}

export default ReactPhotoswipe