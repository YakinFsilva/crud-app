import React, {useState} from 'react';
import axios from axios;

const CreateUpdatePage = () => {
    const [nomeInput, setNomeInput] = useState('');
}

const handleDelete = () => {
    axios.post('https://localhost:3000/alunos', {nome: nomeInput})
    .then(Response => {
        console.log(response.data)
    })
    .catch(error => console.error(error));
};

return (
    <div>
        <h2> Criar ou Atualizar Aluno</h2>
        <input
        type='text'
        placeholder='digite o nome do aluno'
        value={nomeInput}
        onChange={(e) => setNomeInput(e.target.value)}
        />
        <button onClick={handleCreate}> Cadastrar aluno</button>
    </div>
 );   

 export default CreateUpdatePage