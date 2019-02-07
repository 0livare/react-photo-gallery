import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
    caption: PropTypes.string,
    largeImageUrl: PropTypes.string.isRequired,
    smallImageUrl: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    w: PropTypes.string.isRequired,
    h: PropTypes.string.isRequired,
  }

  
  render() {
    let {w, h} = this.props

    return (
      <Wrapper
        style={{width: 200 * w / h}}
        itemProp="associatedMedia"
        itemScope=""
        itemType="http://schema.org/ImageObject"
        onClick={(e) => this.props.onClick(e, this.props.index)}
      >
        <a
          href={this.props.largeImageUrl}
          itemProp="contentUrl"
        >
          <Image
            src={this.props.smallImageUrl}
            alt={this.props.caption}
            itemProp="thumbnail"
          />
        </a>
      </Wrapper>
    )
  }
}
