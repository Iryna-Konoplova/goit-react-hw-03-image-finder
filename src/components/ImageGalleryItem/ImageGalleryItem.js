// Модули
import React from 'react';
import PropTypes from 'prop-types';

// Стили
import styles from '../ImageGalleryItem/imageGalleryItem.module.css';

const ImageGalleryItem = ({ smallImage, largeImage, tags, onImageClick }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      src={smallImage}
      alt={tags}
      className={styles.ImageGalleryItemImage}
      onClick={() => onImageClick(largeImage, tags)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
