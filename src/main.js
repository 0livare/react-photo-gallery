import React from 'react'
import PropTypes from 'prop-types'

import PhotoswipeBase from 'photoswipe'
import PhotoswipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'

import {Gallery} from './components/Gallery'
import {PhotoswipeOverlay} from './components/photoswipe/PhotoswipeOverlay'
import {slide} from './types'

class Photoswipe extends React.Component {
  static propTypes = {
    galleryId: PropTypes.number.isRequired,
    slides: PropTypes.arrayOf(slide).isRequired,
    className: PropTypes.string,
  }

  openPhotoswipe = (e, index) => {
    // Don't navigate to the url on the anchor tag to go to flicker
    e.preventDefault()

    let pswpElement = document.querySelectorAll('.pswp')[0]
    let options = {index, galleryUID: this.props.galleryId}

    let gallery = new PhotoswipeBase(
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
          className={this.props.className}
          openPhotoswipe={this.openPhotoswipe}
          slides={this.props.slides}
          galleryId={this.props.galleryId}
        />
        <PhotoswipeOverlay />
      </>
    )
  }
}

export default Photoswipe