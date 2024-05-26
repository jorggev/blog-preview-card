/* eslint-disable no-unused-vars */
import React from 'react'
import './blogImage.css'
import blogImage from '../../assets/images/illustration-article.svg'

const Image = () => {
    return (
        <img src={blogImage} alt="blog-image" className='blog-image' />
    )
}

export default Image;