/* eslint-disable no-unused-vars */
import React from 'react'
import './autor.css'
import imageAutor from '../../assets/images/image-avatar.webp'

const Autor = () => {
    return (
        <div className='container-autor'>
            <img src={imageAutor} alt="image autor" className="image-autor" />
            <p className="autor-name">Greg Hooper</p>
        </div>
    )
}

export default Autor;