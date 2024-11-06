const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')

const app = express()
const pool = new Pool({
    user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',
    database: 'mercadoF', // Nome da sua database
    password: 'KWlu3155', // Substitua pela sua senha
    port: 5432, // Porta padrão do PostgreSQL
})

// Habilitar CORS para todas as rotas
app.use(cors())
app.use(express.json())

// Função para verificar se uma tabela existe no banco de dados
const checkTableExists = async (tableName) => {
    const result = await pool.query(
        `SELECT EXISTS (
            SELECT FROM information_schema.tables 
            WHERE table_name = $1
        );`,
        [tableName]
    );
    return result.rows[0].exists;
};

// Rota para buscar todos os registros de qualquer tabela
app.get('/:table', async (req, res) => {
    const { table } = req.params;
    try {
        if (!(await checkTableExists(table))) {
            return res.status(404).json({ error: 'Tabela não encontrada' });
        }
        const result = await pool.query(`SELECT * FROM ${table}`);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar dados' });
    }
});

// Rota para buscar um registro por ID de qualquer tabela
app.get('/:table/:id', async (req, res) => {
    const { table, id } = req.params;
    try {
        if (!(await checkTableExists(table))) {
            return res.status(404).json({ error: 'Tabela não encontrada' });
        }
        const result = await pool.query(`SELECT * FROM ${table} WHERE id = $1`, [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Registro não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar registro' });
    }
});

// Rota para adicionar um registro a qualquer tabela
app.post('/:table', async (req, res) => {
    const { table } = req.params;
    const data = req.body;
    const columns = Object.keys(data).join(', ');
    const values = Object.values(data);
    const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');

    try {
        if (!(await checkTableExists(table))) {
            return res.status(404).json({ error: 'Tabela não encontrada' });
        }

        const queryText = `INSERT INTO ${table} (${columns}) VALUES (${placeholders}) RETURNING *`;
        const result = await pool.query(queryText, values);

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Erro ao executar query:', err.message);
        console.error('Dados enviados:', JSON.stringify(req.params)); // Loga os dados de forma legível
        console.error('Colunas:', columns);
        res.status(500).json({
            error: 'Erro ao adicionar registro',
            dadosEnviados: JSON.stringify(data),
            colunas: columns,
        });
    }
});


// Rota para atualizar um registro de qualquer tabela
app.put('/:table/:id', async (req, res) => {
    const { table, id } = req.params;
    const data = req.body;
    const columns = Object.keys(data);
    const values = Object.values(data);
    const setClause = columns.map((col, i) => `${col} = $${i + 1}`).join(', ');

    try {
        if (!(await checkTableExists(table))) {
            return res.status(404).json({ error: 'Tabela não encontrada' });
        }
        const result = await pool.query(
            `UPDATE ${table} SET ${setClause} WHERE id = $${columns.length + 1} RETURNING *`,
            [...values, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Registro não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar registro' });
    }
});

// Rota para deletar um registro de qualquer tabela
app.delete('/:table/:id', async (req, res) => {
    const { table, id } = req.params;
    try {
        if (!(await checkTableExists(table))) {
            return res.status(404).json({ error: 'Tabela não encontrada' });
        }
        const result = await pool.query(`DELETE FROM ${table} WHERE id = $1 RETURNING *`, [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Registro não encontrado' });
        }
        res.json({ message: 'Registro deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar registro' });
    }
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})

