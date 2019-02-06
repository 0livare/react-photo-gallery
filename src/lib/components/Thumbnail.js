import React from 'react'
import PropTypes from 'prop-types'

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
      <div className='.psre-thumbnail-wrapper'
        style={{width: 200 * width / height}}
        itemProp="associatedMedia"
        itemScope=""
        itemType="http://schema.org/ImageObject"
        onClick={(e) => this.props.onClick(e, this.props.index)}
      >
        <a
          href={this.props.largeImageUrl}
          itemProp="contentUrl"
        >
          <img className='.psre-thumbnail-image'
            src={this.props.smallImageUrl}
            alt={this.props.caption}
            itemProp="thumbnail"
          />
        </a>
      </div>
    )
  }
}
