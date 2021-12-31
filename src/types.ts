import {Item} from 'photoswipe'

export type Slide = Item & {
  /** A string in the format "widthxheight" e.g. "240x480". This is an alternative to setting both `w` and `h` on the slide. */
  size?: string
  /** Text describing the image */
  title: string
}
