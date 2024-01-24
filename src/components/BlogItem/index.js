// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, imageUrl, topic, title, author, avatarUrl} = blogDetails

  return (
    <li className="blog-item-container">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <img src={imageUrl} alt={`item${id}`} className="main-img" />
        <div className="blog-info">
          <p className="topic-text">{topic}</p>
          <h1 className="title-text">{title}</h1>
          <div className="author-info">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar-img" />
            <p className="author-text">{author}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
