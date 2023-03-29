import './App.css';
import KanbanLogo from './img/logo.svg'
import Boards from './img/boards.svg'
import Equipes from './img/equipes.svg'
import Relatorios from './img/relatorios.svg'
import Ajustes from './img/ajustes.svg'

function App() {
  return (
    <div className="App">
      <div className="kanban-menu">
        <img src={KanbanLogo} alt="Logo do Kanban" />
        <div className="options-container">
          <a href="#">
            <img src={Boards} alt="" />
            <p>Boards</p>
          </a>
          <a href="#">
            <img src={Equipes} alt="" />
            <p>Equipes</p>
          </a>
          <a href="#">
            <img src={Relatorios} alt="" />
            <p>Relatórios</p>
          </a>
          <a href="#">
            <img src={Ajustes} alt="" />
            <p>Ajustes</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
