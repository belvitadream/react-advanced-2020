import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

// checking prop types

const Product = ({ name, image, price }) => {
  const url = image && image.url
  // we can't do the OR operator with image.url but we can with single url
  return (
    <article className='product'>
      <h4>{name}</h4>
      {/* <img src={image.url || defaultImage} alt={name} /> */}
      <img src={url || defaultImage} alt={name || 'default name'} />
      <p>${price || 0.0}</p>
    </article>
  )
}

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

// implementing default properties
// Product.defaultProps = {
//   name: 'default name',
//   price: 0.0,
//   image: defaultImage,
// }

export default Product
