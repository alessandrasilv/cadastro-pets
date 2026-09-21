const btn = document.getElementById('btn');

btn.addEventListener('click', async () => {
    const inputs = document.querySelectorAll('input');
    const selects = document.querySelectorAll('select');
    let inputsVazios = false;
    let selectInvalido = false;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            inputsVazios = true;
        }
    });

    selects.forEach((select) => {
    const opcaoSelecionada = select.options[select.selectedIndex];
    
    if (opcaoSelecionada && opcaoSelecionada.classList.contains('opcao')) {
        selectInvalido = true;
    }
});

    if (inputsVazios || selectInvalido) {
        alert('Não pode haver campos vazios!');
        return; 
    }

    const dadosPet = {
        tutor: document.getElementById('tutor').value,
        pet: document.getElementById('pet').value,
        raca: document.getElementById('raca').value,
        genero: document.getElementById('genero').value,
        peso: parseFloat(document.getElementById('peso').value),
        idade: parseInt(document.getElementById('idade').value),
        tempo: document.getElementById('tempo').value
    };

    console.log(dadosPet);
    
    try {
        const resposta = await fetch('http://localhost:3000/cadastrar-pet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosPet)
        });

        const resultado = await resposta.json();
        alert(resultado.mensagem);
    } catch (erro) {
        console.error('Erro ao enviar cadastro:', erro);
        alert('Erro ao conectar com o servidor.');
    }
});
