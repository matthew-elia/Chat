import React, { Component, PropTypes } from 'react';

// Import Style
import styles from './PostCreateWidget.css';

export class PostCreateWidget extends Component {
  addPost = (e) => {
    // console.log(this.refs.submitMessage);
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddPost ? !styles.appear : styles.appear )}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}></h2>
          
          <input type="hidden" value="temp_user_string" placeholder="Enter Username" className={styles['user-form-field']} ref="name" />
          <input type="hidden" value="temp_title_string" placeholder="Title" className={styles['form-field']} ref="title" />
          
          <textarea placeholder="Send a message..." className={styles['form-field']} ref="content" />

          <a ref="submitMessage" className={styles['post-submit-button']} href="#" onClick={this.addPost}>Submit</a>

        </div>
      </div>
    );
  }
}

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
};

export default PostCreateWidget;
