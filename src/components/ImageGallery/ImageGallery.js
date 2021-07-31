// Модули
import React from 'react';
import PropTypes from 'prop-types';

// Компоненты
import ImageGalleryItem from '../ImageGalleryItem';

// Стили
import styles from '../ImageGallery/imageGallery.module.css';

const ImageGallery = ({ hits, onImageClick }) => (
  <ul className={styles.ImageGallery}>
    {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={id}
        smallImage={webformatURL}
        largeImage={largeImageURL}
        tags={tags}
        onImageClick={onImageClick}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  hits: PropTypes.array.isRequired,
};

export default ImageGallery;
