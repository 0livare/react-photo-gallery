import React, {useEffect, useMemo, useRef} from 'react'
import cs from 'classnames'
import PhotoSwipe, {Options} from 'photoswipe'
import DefaultPhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default'

import {Slide} from './types'
import {Provider} from './gallery-context'

export type GalleryProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  galleryId: number
  slides: Slide[]
  options: Options
}

export let Gallery = React.forwardRef(
  (props: GalleryProps, ref: React.RefObject<PhotoSwipe<Options>>) => {
    let {className, galleryId, slides, options, ...rest} = props

    let rootRef = useRef<HTMLDivElement>(null)
    let photoSwipeRef = useRef<PhotoSwipe<Options>>(null)

    // @ts-ignore
    ref?.current = photoSwipeRef.current

    let modifiedSlides: Slide[] = useMemo(
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

      let photoSwipe = new PhotoSwipe(
        lightBoxElement,
        DefaultPhotoSwipeUI,
        modifiedSlides,
        {
          ...options,
          galleryUID: galleryId,
        },
      )

      photoSwipeRef.current = photoSwipe
    }, [])

    useEffect(() => {
      photoSwipeRef.current.items = modifiedSlides
    }, [slides])

    return (
      <Provider value={{photoSwipe: photoSwipeRef.current}}>
        <div
          {...rest}
          className={cs('pwsp-gallery', className)}
          ref={rootRef}
        />
      </Provider>
    )
  },
)
