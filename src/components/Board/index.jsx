import React from 'react'
import './styles.css'

import Filter from '../Filter'

import KanbanTitle from '../../img/kanban.svg'
import CardArea from '../CardArea'
import Card from '../Card'

function Board() {
  return (
    <div className='board-area'>
      <div className="board-content">
        <header className='kanban-title'>
          <h1>Meu Kanban</h1>
          <img src={KanbanTitle} alt="" />
        </header>
        <div className="filter-area">
          <Filter />
        </div>
        <div className="cards-area">
          <div className='cards'>
            <CardArea 
              title='A fazer'
            />
            <Card />
            <Card />
          </div>
          <div className='cards'>
            <CardArea 
              title='Fazendo'
            />
            <Card />
          </div>
          <div className='cards'>
            <CardArea 
              title='Feito'
            />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board