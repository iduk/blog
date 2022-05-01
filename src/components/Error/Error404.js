import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Error404.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

export default function Error404() {
  let navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  function goHome() {
    navigate('/', { replace: true })
  }

  return (
    <div
      className={cx(
        'contents',
        'd-flex',
        'align-items-center',
        'justify-content-center'
      )}
      style={{ height: '100vh' }}
    >
      <div className="text-center">
        <h1 className="display-1 mb-3">Oh...</h1>
        <p className="text-muted mb-3">
          바로 나가지 마시고 밑에 버튼을 누르세요
        </p>
        <button onClick={goBack} className="btn btn-primary">
          Go Back
        </button>
      </div>
    </div>
  )
}
