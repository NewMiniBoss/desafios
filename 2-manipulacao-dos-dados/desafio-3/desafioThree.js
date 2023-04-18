import { useState, useEffect } from "react"

const Desafio3 = () => {
    const [livros, setLivros] = useState([])
    const [filtro, setFiltro] = useState('menor-preco')

    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json')
            const dados = await resposta.json()
            setLivros(dados)
        } fetchData()
    }, [])

    function filtrando(evento) {
        setFiltro(evento.target.dataset.filtro)
    }

    function exibirLivros() {
        let lista = [...livros]
        if (filtro === 'menor-preco') {
            lista.sort((a, b) => a.preco - b.preco)
        } else {
            lista.sort((a, b) => b.preco - a.preco)
        }
        return lista.map(livro => <li key={livro.filtrado}>{livro.preco}</li>)
    }

    return (
        <nav>
            <ul>
                <button onClick={filtrando} data-filtro="menor-preco">Menor para o maior preço</button>
                <button onClick={filtrando} data-filtro="maior-preco">Maior para o menor preço</button>
            </ul>
            <ul>
                {exibirLivros()}
            </ul>
        </nav>
    )
}

export default Desafio3