import React from 'react'
import './styles.css'

import FilterImg from '../../img/filter.svg'

function Filter() {
  return (
    <div className='filter-area'>
      <div>
        <button>
            <img src={FilterImg} alt="" />
            <p>Filtrar</p>
        </button>
      </div>
      <div>
       <input type="text" name="search-filter" placeholder="Busque por cards, assuntos ou responsáveis..." id="" />
      </div>
    </div>
  )
}

export default Filter