import React from 'react'
import './styles.css'

import Filter from '../Filter'

import KanbanTitle from '../../img/kanban.svg'

function Board() {
  return (
    <div className='board-area'>
      <header className='kanban-title'>
        <h1>Meu Kanban</h1>
        <img src={KanbanTitle} alt="" />
      </header>
      <div className="filter-area">
        <Filter />
      </div>
    </div>
  )
}

export default Board