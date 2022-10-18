import styles from './Pessoa.module.css'

function Pessoa(props) {
    return (
        <div className={styles.Pessoa}>
            <img src={props.foto} alt={props.nome} className={styles.foto}/>
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
        </div>
    )
}

export default Pessoa