import React from 'react'
import PropTypes from 'prop-types'

import './Gallery.css'
import {Thumbnail} from './Thumbnail.js'

class Gallery extends React.Component {
  render() {
    // Parse width and height from size string
    for(let slide of this.props.slides) {
      if ((slide.w && slide.h) || !slide.size) continue

      let size = slide.size.split('x')
      slide.w = size[0]
      slide.h = size[1]
    }

    return (
      <div className='.psre-gallery-wrapper'>
        {
          this.props.slides.map(function(slide, index) {
            return (
              <Thumbnail
                key={slide.src}
                index={index}
                size={slide.size}
                caption={slide.caption}
                largeImageUrl={slide.src}
                smallImageUrl={slide.msrc}
                onClick={this.props.openPhotoswipe}
              />
            )
          }, this)
        }
      </div>
    )
  }
}

Gallery.propTypes = {
  galleryId: PropTypes.number.isRequired,
  openPhotoswipe: PropTypes.func.isRequired,
  slides: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    msrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    size: PropTypes.string,
    w: PropTypes.number,
    h: PropTypes.number,
  })).isRequired,
}

export {Gallery}