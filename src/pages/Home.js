import React, { useState, useEffect } from 'react'
import styles from './Home.module.scss'
import classnames from 'classnames/bind'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import TypeIt from 'typeit-react'
import Svg from '../assets/images/design.svg'
import Png from '../assets/images/icon.png'

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
          <h2>연습중</h2>
          <p className="pb-1">Layer Background</p>
          <section className={cx('layer')}>
            <p>dsafsdf</p>
            <img src={Svg} width={'50px'} height={'50px'} />
            <img
              src={'./assets/images/design.svg'}
              width={'50px'}
              height={'50px'}
              alt=""
            />
            <img
              src={'../assets/images/icon.png'}
              width={'50px'}
              height={'50px'}
              alt=""
            />
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Home
