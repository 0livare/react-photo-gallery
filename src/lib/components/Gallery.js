import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Photoswipe from 'photoswipe'
import PhotoswipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'

import {Thumbnail} from './Thumbnail.js'
import {slide} from '../types'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export class Gallery extends React.Component {
  static propTypes = {
    galleryId: PropTypes.number.isRequired,
    slides: PropTypes.arrayOf(slide).isRequired,
  }

  openPhotoswipe = (e, index) => {
    // Don't navigate to the url on the anchor tag to go to flicker
    e.preventDefault()

    let pswpElement = document.querySelectorAll('.pswp')[0]
    let options = {index, galleryUID: this.props.gid}

    let gallery = new Photoswipe(
      pswpElement,
      PhotoswipeUI_Default,
      this.props.slides,
      options
    )

    gallery.init()
  }

  render() {
    // Parse width and height from size string
    for(let slide of this.props.slides) {
      if ((slide.w && slide.h) || !slide.size) continue

      let size = slide.size.split('x')
      slide.w = size[0]
      slide.h = size[1]
    }

    return (
      <Wrapper>
        {
          this.props.slides.map(function(slide, index) {
            return (
              <Thumbnail
                key={slide.src}
                index={index}
                onClick={this.openPhotoswipe}
                slide={slide}
              />
            )
          }, this)
        }
      </Wrapper>
    )
  }

}

export default Gallery