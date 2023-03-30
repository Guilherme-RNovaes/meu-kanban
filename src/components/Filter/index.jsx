import React from 'react'
import './styles.css'

import FilterImg from '../../img/filter.svg'

function Filter() {
  return (
    <div className='filter-area'>
        <button>
            <img src={FilterImg} alt="" />
            <p>Filtrar</p>
        </button>
    </div>
  )
}

export default Filter