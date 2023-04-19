import React from 'react';
import { createStore } from 'redux';

const store = createStore(userReducer);

const user = {
    name: 'João',
    age: 30,
    email: 'joao@email.com'
}

const showUserAction = { type: 'SHOW_USER' };

function userReducer(estado = null, acao) {
    switch (acao.type) {
        case 'SHOW_USER':
            return user;
        default:
            return estado;
    }
}

function User() {
    const [userState, setUserState] = React.useState(store.getState());

    function mostraUser() {
        store.dispatch(showUserAction);
    }

    React.useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setUserState(store.getState());
        });
        return unsubscribe;
    }, []);

    return (
        <div>
            <button onClick={mostraUser}>Clique aqui para exibir as informações do usuário</button>
            {userState && (
                <div>
                    <p>Nome: {userState.name}</p>
                    <p>Idade: {userState.age}</p>
                    <p>Email: {userState.email}</p>
                </div>
            )}
        </div>
    );
}

export default User;