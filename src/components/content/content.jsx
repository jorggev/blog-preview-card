/* eslint-disable no-unused-vars */
import React from 'react'
import './content.css'
import Category from './category/category'
import Date from './publish-date/publishDate'
import TittleDescription from './tittle-and-description/tittle-and-description'

const Content = () => {
    return (
        <div className='content'>
            <Category />
            <Date />
            <TittleDescription />
        </div>

    )
}

export default Content;