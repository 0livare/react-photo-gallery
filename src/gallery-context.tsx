import React, {useContext} from 'react'

import {Slide} from './types'

export type GalleryContextShape = {
  openLightBox(slide: Slide): void
  modifiedSlides: Slide[]
}

let defaultGalleryContext: GalleryContextShape = {
  openLightBox: () => {},
  modifiedSlides: null,
}

let GalleryContext = React.createContext(defaultGalleryContext)

export let Provider = GalleryContext.Provider

export function useGalleryContext() {
  return useContext(GalleryContext)
}
