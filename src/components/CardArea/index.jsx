import React from 'react'
import './styles.css'

import Card from '../Card'

function CardArea({ title }) {
  return (
    <div className='card-area-container'>
      <header className="card-area-title">
        <p>{title}</p>
      </header>
      <main className='cards'>
        <Card />
      </main>
    </div>
  )
}

export default CardArea