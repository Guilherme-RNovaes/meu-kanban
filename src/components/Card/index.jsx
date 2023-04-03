import React from 'react'
import './styles.css'

function Card({ title, text, hashtag1, hashtag2 }) {
  return (
    <div className='card-container'>
        <div className="card-content">
          <p className='card-title'>{title}</p>
          <p className='card-text'>{text}</p>
          <div className='hashtags'>
            <p className='card-hash'>{hashtag1}</p>
            <p className='card-hash'>{hashtag2}</p>
          </div>
        </div>
    </div>
  )
}

export default Card