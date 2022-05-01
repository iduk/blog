import React, { useEffect } from 'react'
import {
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
  useParams,
  useNavigate,
} from 'react-router-dom'

export default function Posts(props) {
  let { postId } = useParams()
  let location = useLocation()

  return (
    <div>
      <h2>Posts</h2>
      <small>
        Location: <b className="text-amber-500">{location.pathname}</b>
      </small>

      <section className="flex gap-4 mt-6">
        <Link className="block p-3 bg-stone-700" to="/posts">
          블로그홈
        </Link>
        <Link className="block p-3 bg-stone-700" to="/posts/design">
          디자인
        </Link>
        <Link className="block p-3 bg-stone-700" to="/posts/coding">
          코딩
        </Link>
      </section>

      <Outlet />
    </div>
  )
}
