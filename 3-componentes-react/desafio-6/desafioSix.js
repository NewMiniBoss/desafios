import { useState, useEffect } from "react"

const Desafio6 = () => {
    const [livros, setLivros] = useState([])

    useEffect(() => {
        async function API() {
            const resposta = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json')
            const dados = await resposta.json()
            setLivros(dados)
        }
        API()
    }, [])

    const adicionando = (event) => {
        event.preventDefault()
        const form = event.target
        const novoLivro = {
            preco: form.preco.value,
            titulo: form.titulo.value,
        }
        setLivros([...livros, novoLivro])
        form.reset()
    }

    return (
        <section>
            <table border={1}>
                <thead>
                    <tr>
                        <th>preco</th>
                        <th>titulo</th>
                    </tr>
                </thead>

                <tbody>
                    {livros.map((livro) => (
                        <tr key={livro.id}>
                            <td>{livro.preco}</td>
                            <td>{livro.titulo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <form onSubmit={adicionando}>
                <label>preco</label>
                <input name="preco" type="number" placeholder="digite o valor..."></input>
                <label>titulo</label>
                <input name="titulo" type="text" placeholder="digite o titulo..."></input>
                <button type="submit">Adicionar</button>
            </form>
        </section>
    )
}

export default Desafio6