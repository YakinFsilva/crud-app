
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Lista de Alunos</Link>
          </li>
          <li>
            <Link to="/create">Criar/Atualizar Aluno</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
