import React from 'react'
import { createStore } from 'redux'

const incrementando = { type: 'INCREMENT' }
const store = createStore(counterReducer)

function counterReducer(estado = 0, acao) {
    switch (acao.type) {
        case 'INCREMENT':
            return estado + 1
        default:
            return estado
    }
}

const Desafio7 = () => {
    const [count, setCount] = React.useState(store.getState())

    React.useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setCount(store.getState())
        })

        return () => {
            unsubscribe()
        }
    }, [])

    function trocaEstadoRedux() {
        store.dispatch(incrementando)
    }

    return (
        <div>
            <button onClick={trocaEstadoRedux}>Clique aqui para incrementar</button>
            <p>O contador está em {count}</p>
        </div>
    )
}

export default Desafio7