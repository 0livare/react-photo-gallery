import React, {useContext} from 'react'
import PhotoSwipe, {Options} from 'photoswipe'

export type GalleryContextShape = {
  photoSwipe: PhotoSwipe<Options>
}

let defaultGalleryContext: GalleryContextShape = {
  photoSwipe: null,
}

let GalleryContext = React.createContext(defaultGalleryContext)

export let Provider = GalleryContext.Provider

export function useGalleryContext() {
  return useContext(GalleryContext)
}
