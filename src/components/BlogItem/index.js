// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, imageUrl, topic, title, author, avatarUrl} = blogDetails

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <li className="blog-item-container">
        <img src={imageUrl} alt={title} className="main-img" />
        <div className="blog-info">
          <p className="topic-text">{topic}</p>
          <h1 className="title-text">{title}</h1>
          <div className="author-info">
            <img src={avatarUrl} alt={author} className="avatar-img" />
            <p className="author-text">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
