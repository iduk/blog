import React from 'react'
import ReactDOM from 'react-dom'
import { useTransition, animated } from 'react-spring'
import styles from './Dialog.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

const dialogRoot = document.getElementById('dialog-root')

const Dialog = ({ open, toggle, children, ...props }) => {
  return open
    ? ReactDOM.createPortal(
        <>
          <div className={cx('dialog')} onClick={(e) => e.stopPropagation()}>
            <div className={cx('dialog-content', props.className)}>
              {children}
            </div>
          </div>
          <div className={cx('dialog-backdrop')} onClick={() => toggle()}></div>
        </>,
        dialogRoot
      )
    : null
}

export default Dialog
