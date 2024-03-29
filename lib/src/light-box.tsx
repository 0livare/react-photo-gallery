import React from 'react'
import cs from 'classnames'

/**
 * This HTML is taken directly from the Photoswipe docs:
 * https://photoswipe.com/documentation/getting-started.html
 */
export function LightBox(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  let {className, ...rest} = props

  return (
    <div
      {...rest}
      className={cs('pswp', className)}
      tabIndex={-1}
      role="dialog"
    >
      <div className="pswp__bg"></div>
      <div className="pswp__scroll-wrap">
        <div className="pswp__container">
          <div className="pswp__item"></div>
          <div className="pswp__item"></div>
          <div className="pswp__item"></div>
        </div>
        <div className="pswp__ui pswp__ui--hidden">
          <div className="pswp__top-bar">
            <div className="pswp__counter"></div>
            <button
              className="pswp__button pswp__button--close"
              title="Close (Esc)"
            />
            <button
              className="pswp__button pswp__button--share"
              title="Share"
            />
            <button
              className="pswp__button pswp__button--fs"
              title="Toggle fullscreen"
            />
            <button
              className="pswp__button pswp__button--zoom"
              title="Zoom in/out"
            />
            <div className="pswp__preloader">
              <div className="pswp__preloader__icn">
                <div className="pswp__preloader__cut">
                  <div className="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div className="pswp__share-tooltip"></div>
          </div>
          <button
            className="pswp__button pswp__button--arrow--left"
            title="Previous (arrow left)"
          />
          <button
            className="pswp__button pswp__button--arrow--right"
            title="Next (arrow right)"
          />
          <div className="pswp__caption">
            <div className="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
