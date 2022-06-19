import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styles from './Test.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

import { gql, useQuery } from '@apollo/client'
import { Link, useNavigate } from 'react-router-dom'

const GET_CATE = gql`
  query GetCategory($id: ID = "portfolio") {
    category(id: $id, idType: SLUG) {
      id
      name
    }
  }
`
const GET_POSTS = gql`
  query GetPosts($id: ID = "portfolio") {
    category(id: $id, idType: SLUG) {
      id
      name
      posts {
        nodes {
          id
          slug
          title
          date
          excerpt
          featuredImage {
            node {
              mediaItemUrl
              slug
            }
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
      <h1>{data.category.name}</h1>
      <ul className={cx('post-list')}>
        {data.category.posts.nodes.map((post) => (
          <li key={post.id}>
            <div className={cx('content')}>
              <h5 className={cx('title')}>{post.title}</h5>
              <small className={cx('date')}>{post.date}</small>

              <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </div>
            <a
              className={cx('thumb')}
              href={post.featuredImage.node.mediaItemUrl}
              target="_blank"
            >
              <img
                src={post.featuredImage.node.mediaItemUrl}
                alt={post.title}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Test
