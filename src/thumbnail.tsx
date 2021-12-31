import React from 'react'
import cs from 'classnames'

import {Slide} from './types'
import {useGalleryContext} from './gallery-context'

export type ThumbnailProps = React.HtmlHTMLAttributes<HTMLElement> & {
  onClick?(e: React.MouseEvent<HTMLElement>): void
  slide: Slide
  classes?: {
    root?: string
    anchor?: string
    image?: string
  }
  anchorProps: React.HtmlHTMLAttributes<HTMLAnchorElement>
  imageProps: React.HtmlHTMLAttributes<HTMLImageElement>
}

export function Thumbnail(props: ThumbnailProps) {
  let {
    slide,
    onClick,
    className,
    classes = {},
    anchorProps = {},
    imageProps = {},
    ...rest
  } = props

  const {photoSwipe} = useGalleryContext()

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    // Don't navigate to the url on the anchor tag to go to
    // flicker or wherever the image is hosted
    e.preventDefault()

    onClick?.(e)

    photoSwipe.currItem = slide
    photoSwipe.init()
  }

  return (
    <figure
      itemProp="associatedMedia"
      itemType="http://schema.org/ImageObject"
      onClick={handleClick}
      className={cs('pwsp-thumbnail', className, classes.root)}
      {...rest}
    >
      <a
        href={slide.src}
        itemProp="contentUrl"
        {...anchorProps}
        className={cs(classes.anchor, anchorProps.className)}
      >
        <img
          src={slide.msrc}
          alt={slide.caption}
          itemProp="thumbnail"
          {...imageProps}
          className={cs(classes.image, imageProps.className)}
        />
      </a>
    </figure>
  )
}
