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
            <Card 
              title='#boraCodar um Kanban 🧑‍💻'
              text='Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.'
              hashtag1='rocketseat'
              hashtag2='desafio'
            />
            <Card 
              title='Manter a ofensiva 🔥'
              text='Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva'
              hashtag1='rocketseat'
              hashtag2='ofensiva'
            />
          </div>
          <div className='cards'>
            <CardArea 
              title='Fazendo'
            />
            <Card 
              title='Conferir o novo desafio 🚀'
              text='Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível'
              hashtag1='rocketseat'
              hashtag2='desafio'
            />
          </div>
          <div className='cards'>
            <CardArea 
              title='Feito'
            />
            <Card 
              title='#boraCodar uma página de login 🧑‍💻'
              text='Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.'
              hashtag1='rocketseat'
              hashtag2='desafio'
            />
            <Card 
              title='#boraCodar uma página de clima 🧑‍💻'
              text='Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.'
              hashtag1='rocketseat'
              hashtag2='desafio'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board