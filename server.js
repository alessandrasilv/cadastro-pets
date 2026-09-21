const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname)));

app.post('/cadastrar-pet', (req, res) => {
    const { tutor, pet, raca, genero, peso, idade, tempo } = req.body;

    // banco de dados futuro, no momenro ta no temrinal
    console.log('--- Novo Pet Cadastrado ---');
    console.log(`Tutor: ${tutor} | Pet: ${pet} | Raça: ${raca}`);
    console.log(`Gênero: ${genero} | Peso: ${peso}kg | Idade: ${idade} ${tempo}`);

    res.json({ mensagem: `O pet ${pet} foi cadastrado com sucesso!` });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
