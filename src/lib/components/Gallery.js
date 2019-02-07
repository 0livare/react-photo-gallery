import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
    openPhotoswipe: PropTypes.func.isRequired,
  }

  render() {
    const {slides} = this.props
    if (!slides || !slides.length) return <div />

    // Parse width and height from size string
    for(let slide of slides) {
      if ((slide.w && slide.h) || !slide.size) continue

      let size = slide.size.split('x')
      slide.w = size[0]
      slide.h = size[1]
    }

    return (
      <Wrapper>
        {
          slides.map(function(slide, index) {
            return (
              <Thumbnail
                key={slide.src}
                index={index}
                onClick={this.props.openPhotoswipe}
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