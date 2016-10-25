import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './PostListItem.css';

function PostListItem(props) {
  return (
    <div className={styles['single-post']}>
      {/*<h3 className={styles['post-title']}>
              <Link to={`/posts/${props.post.cuid}`} >
                {props.post.title}
              </Link>
            </h3>*/}
      <h2 className={styles['post-desc']}>{props.post.content}</h2>
      <p className={styles['author-name']}><i>{props.post.name}</i></p>
      
      {/*<p className={styles['post-action']}><a href="#" onClick={props.onDelete}>Delete</a></p>*/}

      <hr className={styles.divider} />
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    cuid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
