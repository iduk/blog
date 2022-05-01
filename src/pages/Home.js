import React, { useState, useEffect } from 'react'
import styles from './Home.module.scss'
import classnames from 'classnames/bind'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import TypeIt from 'typeit-react'

const cx = classnames.bind(styles)

const ThemeWrap = styled.div`
  height: 280px;
  padding: 3rem 2rem;
  margin-top: 2rem;
  background-color: var(--theme-bg);
  color: var(--theme-text);
  border: 1px solid var(--theme-border);
`

function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 0)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className={cx('home')}>
          <p>dsafsdf</p>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Home
