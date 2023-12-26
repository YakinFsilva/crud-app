import React from "react";
import {BrowserRouter as Router, Route, Link, Swtich} from 'react-router-dom';
import ListPage from "./components/ListPage";
import CreateUpdatePage from "./components/CreateUpdatePage";
import Header from "./header";

const App = () => {
  return (
    <router>
      <div>
        <header />
        <nav>
          <ul>
            <li>
              <link to="/">Lista de Alunos</link>
            </li>
            <li>
              <Link to="/create"> Criar/Atualizar Aluno </Link>
            </li>
          </ul>
        </nav>
        <switch>
          <Route path="/create">
            <CreateUpdatePage />
          </Route>
          <Route path="/">
            <ListPage />
          </Route>
        </switch>
      </div>
    </router>
  );
};

export default App;