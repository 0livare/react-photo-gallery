import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import cs from 'classnames'
import PhotoSwipe, {Options} from 'photoswipe'
import DefaultPhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default'

import {Slide} from './types'
import {Provider} from './gallery-context'

export type GalleryProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  slides: Slide[]
  options?: Options
}

export let Gallery = React.forwardRef(
  (props: GalleryProps, ref: React.RefObject<PhotoSwipe<Options>>) => {
    let {className, slides, options = {}, ...rest} = props

    let rootRef = useRef<HTMLDivElement>(null)
    const [photoSwipe, setPhotoSwipe] = useState<PhotoSwipe<Options>>(null)

    // @ts-ignore
    ref?.current = photoSwipe

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

    // It seems wasteful to recreate the PhotoSwipe object every time we want to open
    // the light box, but every bit of PhotoSwipe documentation I can find does it this
    // way.  Additionally, despite numerous attempts (over several years lol) I can't
    // seem to ever get the light box to open again with the same PhotoSwipe instance.
    // See: https://photoswipe.com/documentation/getting-started.html
    const openLightBox = useCallback((slide: Slide) => {
      let lightBoxElement = rootRef.current.querySelector(
        '.pswp',
      ) as HTMLElement

      let photoSwipe = new PhotoSwipe(
        lightBoxElement,
        DefaultPhotoSwipeUI,
        modifiedSlides,
        {
          index: slides.findIndex(s => s.src === slide.src),
          ...options,
        },
      )

      photoSwipe.init()
      setPhotoSwipe(photoSwipe)
    }, [])

    return (
      <Provider value={{openLightBox, modifiedSlides}}>
        <div
          {...rest}
          className={cs('pwsp-gallery', className)}
          ref={rootRef}
        />
      </Provider>
    )
  },
)
