# Projeto Spread Operator em JavaScript

Este projeto demonstra o uso eficaz do operador spread (`...`) para combinar objetos em JavaScript, criando um objeto de perfil de usuário unificado a partir de múltiplos objetos-fonte.

## Descrição

O código consiste em combinar três diferentes objetos que contêm dados de usuário, datas e credenciais em um único objeto que representa um perfil completo. Além disso, adicionamos um status ao perfil. Este exemplo visa ilustrar a utilidade e a simplicidade do operador spread para manipular e combinar dados em JavaScript.

## Componentes do Código

- `data`: Objeto que contém as datas de início e término.
- `id`: Objeto que contém o ID do usuário e um token.
- `user`: Objeto que contém informações básicas do usuário como nome e email.
- `profile`: Objeto que agrega todos os dados anteriores e adiciona um status.
- `client`: Array que armazena os perfis de usuário.
- `listUser`: Função que retorna uma string formatada com as informações do usuário.

## Como Executar

Para executar este código, você precisa de um ambiente que suporte a execução de JavaScript, como um navegador moderno ou um ambiente Node.js.

1. Salve o código em um arquivo com a extensão `.js`, por exemplo, `spreadOperatorDemo.js`.
2. Se estiver usando Node.js, abra um terminal, navegue até o diretório onde o arquivo está salvo e execute:
   ```bash
   node spreadOperatorDemo.js
