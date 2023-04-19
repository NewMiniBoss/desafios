import { useState, useEffect } from "react"

const Desafio5 = () => {
    const [livros, setLivros] = useState([])
    const [filtro, setFiltro] = useState('menor-preco')

    useEffect(() => {
        async function API() {
            const resposta = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json')
            const dados = await resposta.json()
            setLivros(dados)
        }
        API()
    }, [])

    function filtrando(event) {
        setFiltro(event.target.dataset.filtro);
    }

    function exibirLivro() {
        let lista = [...livros];
        if (filtro === 'menor-preco') {
            lista.sort((a, b) => a.preco - b.preco)
        } else if (filtro === 'maior-preco') {
            lista.sort((a, b) => b.preco - a.preco)
        } else if (filtro === 'ordem-crescente') {
            lista.sort((a, b) => a.titulo.localeCompare(b.titulo))
        } else {
            lista.sort((a, b) => b.titulo.localeCompare(a.titulo))
        }
        return lista
    }

    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>
                        Preço
                        <button onClick={filtrando} data-filtro="menor-preco">▲</button>
                        <button onClick={filtrando} data-filtro="maior-preco">▼</button>
                    </th>
                    <th>
                        Ordem Alfabetica
                        <button onClick={filtrando} data-filtro="ordem-decrescente">▼</button>
                        <button onClick={filtrando} data-filtro="ordem-crescente">▲</button>
                    </th>
                </tr>
            </thead>

            <tbody>
                {exibirLivro().map((livro) => (
                    <tr key={livro.id}>
                        <td>{livro.preco}</td>
                        <td>{livro.titulo}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Desafio5