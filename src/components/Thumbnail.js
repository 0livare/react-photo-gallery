import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {slide} from '../types'

const Wrapper = styled.figure`
  margin: 3px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

export class Thumbnail extends React.Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    slide: slide.isRequired,
  }

  
  render() {
    let {slide} = this.props

    return (
      <Wrapper
        style={{width: 200 * slide.w / slide.h}}
        itemProp='associatedMedia'
        itemScope=''
        itemType='http://schema.org/ImageObject'
        onClick={(e) => this.props.onClick(e, this.props.index)}
      >
        <a
          href={slide.src}
          itemProp='contentUrl'
        >
          <Image
            src={slide.msrc}
            alt={slide.caption}
            itemProp='thumbnail'
          />
        </a>
      </Wrapper>
    )
  }
}
