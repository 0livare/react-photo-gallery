import {Item} from 'photoswipe'

export type Slide = Item & {
  /** A string in the format "widthxheight" e.g. "240x480" */
  size?: string
  /** Text describing the image */
  caption?: string
}
