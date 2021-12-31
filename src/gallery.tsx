import React, {useEffect, useMemo, useRef} from 'react'
import cs from 'classnames'
import PhotoSwipe, {Options} from 'photoswipe'
import DefaultPhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default'

import {Slide} from './types'

export type GalleryProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  galleryId: number
  slides: Slide[]
  options: Options
}

export const Gallery = React.forwardRef(
  (props: GalleryProps, ref: React.RefObject<PhotoSwipe<Options>>) => {
    let {className, galleryId, slides, options, ...rest} = props

    const rootRef = useRef<HTMLDivElement>(null)
    const pswpRef = useRef<PhotoSwipe<Options>>(null)

    // @ts-ignore
    ref?.current = pswpRef.current

    const modifiedSlides: Slide[] = useMemo(
      () =>
        slides
          .filter(x => x)
          .map(slide => ({
            w: Number(slide.size?.split('x')[0]),
            h: Number(slide.size?.split('x')[1]),
            ...slide,
          })),
      [slides],
    )

    useEffect(() => {
      let lightBoxElement = rootRef.current.querySelector(
        '.pswp',
      ) as HTMLElement

      let gallery = new PhotoSwipe(
        lightBoxElement,
        DefaultPhotoSwipeUI,
        modifiedSlides,
        {
          ...options,
          galleryUID: galleryId,
        },
      )

      gallery.init()
      pswpRef.current = gallery
    }, [])

    useEffect(() => {
      pswpRef.current.items = modifiedSlides
    }, [slides])

    return <div {...rest} className={cs(className)} ref={rootRef} />
  },
)
