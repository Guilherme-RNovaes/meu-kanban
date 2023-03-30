import React from 'react'
import './styles.css'

import KanbanTitle from '../../img/kanban.svg'

function Board() {
  return (
    <div className='category-area'>
      <header className='kanban-title'>
        <h1>Meu Kanban</h1>
        <img src={KanbanTitle} alt="" />
      </header>
    </div>
  )
}

export default Board