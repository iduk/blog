import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styles from './Test.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

import { gql, useQuery } from '@apollo/client'
import { Link, useNavigate } from 'react-router-dom'

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        date
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`

function Test() {
  const { loading, error, data } = useQuery(GET_POSTS)
  const navigate = useNavigate()

  console.log('나여기')

  if (loading) return <p>Loading Posts...</p>
  if (error) return <p>Something wrong happened!</p>

  return (
    <div>
      {/* <h1>{data.posts.nodes[4].title}</h1> */}
      <ul className={cx('post-list')}>
        {data.posts.nodes.map((post) => (
          <li key={post.id}>
            <a
              className={cx('link')}
              href={post.featuredImage.node.mediaItemUrl}
              target="_blank"
            >
              <img
                className={cx('thumb')}
                src={post.featuredImage.node.mediaItemUrl}
                alt=""
              />
              <h6 className={cx('title')}>{post.title}</h6>
              <small className={cx('date')}>{post.date}</small>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Test
