import React, { useState, useEffect } from "react";
import TaskList from './TaskList';
import axios from "axios";


const ListPage = () => {
    const [task, setTask] = useState ([]);

    useEffect(() => {
        axios.get('/alunos')
        .then(response => setTasks(response.data))
        .catch(error => console.error(error));
    }, []);

    const handleDelete = (alunoId) => {
        axios.delete("https://localhost:3000/alunos/${alunoId}")
    .then(response => {
        if (response.status ===200) {
            setAlunos(Alunos.filter(aluno => aluno.id !== alunoId));
        }
        
    })
    .catch(error => console.error(error));
};

return ( 
    <div>
        <h2>Lista de Alunos</h2>
        <TaskList alunos={alunos} onDelete={handleDelete} />
    </div>
);
};

export default ListPage;