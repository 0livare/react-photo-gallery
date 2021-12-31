import React, {useMemo} from 'react'
import cs from 'classnames'

import {Slide} from './types'
import {useGalleryContext} from './gallery-context'

export type ThumbnailProps = React.HtmlHTMLAttributes<HTMLElement> & {
  slide: Slide
  onClick?(e: React.MouseEvent<HTMLElement>): void
  /**
   * Pass CSS class names to each of the elements rendered by this component.
   * This is equivalent to including a `className` property in the `anchorProps`
   * or `imageProps`.
   */
  classes?: {
    root?: string
    anchor?: string
    image?: string
  }
  /** Additional props to pass to the `<a>` element */
  anchorProps?: React.HtmlHTMLAttributes<HTMLAnchorElement>
  /** Additional props to pass to the `<img>` element */
  imageProps?: React.HtmlHTMLAttributes<HTMLImageElement>
  /**
   * Constrain the width to a value based on the image's aspect ratio.
   * 200 is a nice starting place for this value.
   */
  aspectRatioMultiplier?: number
}

export function Thumbnail(props: ThumbnailProps) {
  let {
    slide: originalSlide,
    onClick,
    className,
    classes = {},
    anchorProps = {},
    imageProps = {},
    style = {},
    aspectRatioMultiplier,
    ...rest
  } = props

  const {openLightBox, modifiedSlides} = useGalleryContext()
  const slide = useMemo(
    () => modifiedSlides.find(mfSlide => mfSlide.src === originalSlide.src),
    [originalSlide, modifiedSlides],
  )

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    // Don't navigate to the url on the anchor tag to go to
    // flicker or wherever the image is hosted
    e.preventDefault()

    onClick?.(e)
    openLightBox(slide)
  }

  return (
    <figure
      itemProp="associatedMedia"
      itemType="http://schema.org/ImageObject"
      onClick={handleClick}
      className={cs('pwsp-thumbnail', className, classes.root)}
      style={{
        width: aspectRatioMultiplier
          ? aspectRatioMultiplier * (slide.w / slide.h)
          : undefined,
        ...style,
      }}
      {...rest}
    >
      <a
        href={slide.src}
        itemProp="contentUrl"
        {...anchorProps}
        className={cs(classes.anchor, anchorProps.className)}
      >
        <img
          src={slide.msrc || slide.src}
          alt={slide.title}
          itemProp="thumbnail"
          width={slide.w}
          height={slide.h}
          {...imageProps}
          className={cs(classes.image, imageProps.className)}
          style={{
            aspectRatio: `${slide.w} / ${slide.h}`,
            ...(imageProps?.style || {}),
          }}
        />
      </a>
    </figure>
  )
}
