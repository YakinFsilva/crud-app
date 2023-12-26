


const TaskList = ({alunos, onDelete}) => {
    return (
        <ul>
            {alunos.map(aluno =>(
                <li key={aluno.id}>
                    {aluno.nome}
                    <button onClick={() => onDelete(aluno.id)}>Excluir</button>
                </li>

            ))}
        </ul>
    );
};

export default Tasklist;