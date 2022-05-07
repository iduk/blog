import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getNavList } from '../../data/nav'
import styles from './GlobalNav.module.scss'
import classnames from 'classnames/bind'
import { CSSTransition, Transition } from 'react-transition-group'
import styled, { keyframes } from 'styled-components'
const cx = classnames.bind(styles)

function GlobalNav() {
  let navlist = getNavList()
  const [btnText, setBtnText] = useState(false)
  const [isCollapsedNav, setIsCollapsedNav] = useState(false)
  const toggleNav = () => setIsCollapsedNav(!isCollapsedNav)
  const openNav = () => setIsCollapsedNav(true)
  const closeNav = () => setIsCollapsedNav(false)

  const duration = 350

  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    top: '-100vh',
  }

  const transitionStyles = {
    entering: { top: '0' },
    entered: { top: '0' },
    exiting: { top: '-100vh' },
    exited: { top: '-100vh' },
  }

  useEffect(() => {
    // asfasdf
  }, [])

  return (
    <>
      <header id={cx('aaa')} className={cx('global-nav')}>
        <div className={cx('nav-wrapper')}>
          <Link to="/" className={cx('logo', 'tracking-in-expand')}>
            PICTOR
          </Link>
          <button className={cx('toggler')} onClick={toggleNav} />
        </div>

        <Transition in={isCollapsedNav} timeout={duration}>
          {(state) => (
            <nav
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              className={cx('navbar')}
              id="menu"
            >
              <ul className={cx('nav-list')}>
                {navlist.map((item, id) => (
                  <li key={id}>
                    <NavLink
                      to={item.links}
                      className={({ isActive }) =>
                        isActive ? cx('nav-link', 'active') : cx('nav-link')
                      }
                      tabIndex={0}
                      title={item.title}
                      onClick={closeNav}
                    >
                      <span className={cx('nav-text')}>{item.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </Transition>
      </header>
    </>
  )
}

export default GlobalNav
