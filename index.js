document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capturando os valores
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const endereco = document.getElementById("endereco").value;
    const estado = document.getElementById("estado").value;
    const mensagem = document.getElementById("mensagem").value;

    const gostos = [];
    document.querySelectorAll('input[name="gosto"]:checked').forEach((cb) => {
        gostos.push(cb.value);
    });

    // Criando o conteúdo do arquivo de texto
    let conteudoTexto = DADOS DO FORMULÁRIO\n;
    conteudoTexto += ====================\n;
    conteudoTexto += Nome: ${nome}\n;
    conteudoTexto += Email: ${email}\n;
    conteudoTexto += Endereço: ${endereco}\n;
    conteudoTexto += Estado: ${estado}\n;
    conteudoTexto += Interesses: ${gostos.length > 0 ? gostos.join(", ") : "Nenhum"}\n;
    conteudoTexto += Mensagem: ${mensagem}\n;
    conteudoTexto += ====================\n;
    conteudoTexto += Data: ${new Date().toLocaleString('pt-BR')};

    // Função para baixar o arquivo (simulando salvar no bloco de notas)
    const blob = new Blob([conteudoTexto], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "dados_formulario.txt";
    
    // Aciona o download
    link.click();

    // Alerta de confirmação
    alert("Os dados foram gerados e o download do arquivo .txt foi iniciado!");
});