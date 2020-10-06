import { Link, routes } from '@redwoodjs/router'

const BlogPost = ({ post }) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
        </h2>
      </header>
      <div>Posted at: {post.createdAt}</div>
      <div>{post.body}</div>
    </article>
  )
}

export default BlogPost
