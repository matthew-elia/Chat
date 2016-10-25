import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './Header.css';

export function Header(props, context) {

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <Link to="/" className={styles['site-title']}><h1>Msg Board.</h1></Link>
        {
          context.router.isActive('/', true)
            ? <a className={styles['add-post-button']} href="#" id="addPost" onClick={props.toggleAddPost}>Add Post</a>
            : this.appears
        }
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
};

export default Header;
