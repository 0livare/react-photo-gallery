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
    size: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
    smallImageUrl: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    let tokens = this.props.size.split('x')
    let width = tokens[0]
    let height = tokens[1]

    return (
      <Wrapper
        style={{width: 200 * width / height}}//, maxWidth: '500px'}}
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
