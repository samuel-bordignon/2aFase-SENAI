import { useState, useEffect } from 'react'

function App() {
    const [clientes, setClientes] = useState([])  // Estado para armazenar a lista de clientes
    const [form, setForm] = useState({ nome: '', email: '' })  // Estado para armazenar dados do formulário

    const fetchData = async (table) => {
        try {
            const response = await fetch(`http://localhost:3000/${table}`)
            const data = await response.json()
            return data
        } catch (error) {
            console.error('Erro ao buscar dados:', error)
        }
    }

    const fetchDataById = async (table, id) => {
        try {
            const response = await fetch(`http://localhost:3000/${table}/${id}`)
            const data = await response.json()
            return data
        } catch (error) {
            console.error('Erro ao buscar registro:', error)
        }
    }

    const addData = async (table, data) => {
        try {
            const response = await fetch(`http://localhost:3000/${table}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            return await response.json()
        } catch (error) {
            console.error('Erro ao adicionar registro:', error)
        }
    }

    const updateData = async (table, id, data) => {
        try {
            const response = await fetch(`http://localhost:3000/${table}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            return await response.json()
        } catch (error) {
            console.error('Erro ao atualizar registro:', error)
        }
    }

    const deleteData = async (table, id) => {
        try {
            const response = await fetch(`http://localhost:3000/${table}/${id}`, {
                method: 'DELETE',
            })
            return await response.json()
        } catch (error) {
            console.error('Erro ao deletar registro:', error)
        }
    }

    useEffect(() => {
        fetchData('clientes')
            .then(data => {
                if (data) setClientes(data);
            })
            .catch(error => console.error('Erro ao buscar clientes:', error));

        // addData('clientes', { nome: 'João', email: 'joao@gmail.com' })
        //     .then(data => {
        //         if (data) {
        //             console.log('Cliente adicionado:', data);
        //             // Atualiza a lista de clientes após adicionar um novo cliente
        //             fetchData('clientes').then(updatedData => setClientes(updatedData));
        //         }
        //     })
        //     .catch(error => console.error('Erro ao adicionar cliente:', error));
    }, []);

    return (
        <div>
            <h1>CRUD de Clientes</h1>

            {/* Lista de clientes */}
            <ul>
                {clientes.map((cliente) => (
                    <li key={cliente.id_cliente}>
                        {cliente.nome} - {cliente.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App
