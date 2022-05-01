import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import GlobalNav from '../Nav/GlobalNav'
import classnames from 'classnames/bind'
import styles from './BaseLayout.module.scss'

const cx = classnames.bind(styles)

function BaseLayout() {
  return (
    <>
      <GlobalNav />
      <main className={cx('layout--base', 'container', 'container-sm')}>
        <Outlet />
      </main>
    </>
  )
}

export default BaseLayout
