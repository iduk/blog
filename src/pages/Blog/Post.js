import * as React from 'react'
import { useParams } from 'react-router-dom'

function Post() {
  let { postId } = useParams()

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const postTitle = postId.split(' ').map(capitalize).join(' ')

  return (
    <div>
      <h6>{postTitle}</h6>
      <p>하위 컨텐츠입니다.</p>
    </div>
  )
}

export default Post
