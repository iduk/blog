/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './PostList.module.scss'
import classnames from 'classnames/bind'
import axios from 'axios'
import { idukContent } from '../../data/iduk-contents'

const cx = classnames.bind(styles)

function PostList() {
  const [postData, setPostData] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setPostData(response.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <section className="my-6">
        <h5 className="mb-5">DataList Component</h5>
        {idukContent.map((item, id) => (
          <Itemlist key={id} id={id} content={item} />
        ))}
      </section>

      <section className="my-10">
        <h5 className="mb-5">axios List</h5>
        <ul className={cx('post-list')}>
          <li>
            <Skeleton />
          </li>
          {postData.map((post) => (
            <li key={post.id}>
              <Link to="#" className={cx('items')}>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

function Skeleton() {
  return (
    <div className={cx('skeleton')}>
      <h5 className={cx('skeleton-title')}></h5>
      <p className={cx('skeleton-content')}></p>
      <p className={cx('skeleton-content')}></p>
    </div>
  )
}

function Itemlist({ content }) {
  return (
    <article>
      <a
        href={content.url}
        target={'_blank'}
        rel="noreferrer"
        className="py-2 mt-2 flex justify-between gap-4"
      >
        <dl>
          <dt className="pr-2">{content.id}</dt>
          <dd>{content.title}</dd>
        </dl>
        <figure className="flex-shrink-0">
          <img src={content.thumbnailUrl} alt={content.title} />
        </figure>
      </a>
    </article>
  )
}

export default PostList
