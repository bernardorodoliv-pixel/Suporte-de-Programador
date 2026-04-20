let botao = document.querySelector(".botao-gerar")
let endereco = "https://api.groq.com/openai/v1/chat/completions"

async function gerarComando() {

    let textoUsuario = document.querySelector(".caixa-texto").value
    let blocoCodigo = document.querySelector(".bloco-codigo")

    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer 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"
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                role: "system",
                content: 'Você é um sistema de QA exaustivo. Sua tarefa é realizar TODOS os testes possíveis no código enviado (sintaxe, lógica, segurança, performance e casos de borda).\n\nREGRA DE RESPOSTA:\n- Use EXCLUSIVAMENTE o termo "info" para testes que passaram (certo).\n- Use EXCLUSIVAMENTE o termo "erro" para testes que falharam (errado).\n- Responda apenas em tópicos, um por linha.\n\nFORMATO OBRIGATÓRIO PARA CADA TESTE:\n* **[Tipo do Teste]**\n- Resultado: [info / erro]\n- Detalhes: [Explicação curta]'
            }, 
            {
                role: "user",
                content: textoUsuario
            }
        ]
        })
    })

    let dados = await resposta.json()
    let resultado = dados.choices[0].message.content
    
    blocoCodigo.textContent = resultado
    resultadoCodigo.srcdoc = resultado

}


botao.addEventListener("click", gerarComando) 
//Você é um gerador de código HTML e CSS. Responda SOMENTE com o código puro. Nunca use crases, markdown ou explicações. Formado: primeiro <style> com CSS, depois o HTML. Siga EXATAMENTE o que o usuário pedir. Se algo quicando, use translateY no @keyframes. Se pedir algo girando, use rotate.
//let chave = "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"