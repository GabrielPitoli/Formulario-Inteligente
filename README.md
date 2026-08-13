# 📝 Formulário Inteligente com Validação Dinâmica

> **Formulário interativo de cadastro desenvolvido em Vanilla JS com validações em tempo real, feedback de acessibilidade (ARIA) e indicador de força de senha.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)

---

## 📌 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Aplicadas](#-tecnologias-aplicadas)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Autores](#-autores)

---

## 🎯 Sobre o Projeto

O **Formulário Inteligente** é uma demonstração prática de uma interface de cadastro reativa, amigável e segura. Ele orienta o usuário durante todo o preenchimento por meio de feedback instantâneo, bloqueando o envio até que todos os requisitos de validação sejam atendidos.

---

## ✨ Funcionalidades Principais

* 🔤 **Espelhamento e Contador de Nome:** Exibição do texto digitado em tempo real com contador de caracteres (limite de 50) e alerta visual de limite.
* 🗺️ **Selects Dependentes (Estado → Cidade):** O seletor de cidades é habilitado e populado dinamicamente com base no estado escolhido (ex: SP ou RJ).
* ✉️ **Validação de E-mail On-Blur:** Destaque de foco (`focus`) e validação de formato de e-mail ao desfocar do campo (`blur`).
* 🔐 **Analisador de Força de Senha:** Avaliação dinâmica do comprimento e caracteres da senha, classificando entre *Fraca*, *Média* e *Forte* com cores indicativas.
* ♿ **Sumário de Erros e Acessibilidade:** Lista de validação pendente em tempo real usando atributos acessíveis (`aria-live`, `role="alert"`).
* 🔄 **Reset Pós-Envio:** Limpeza e redefinição automática de todos os estados do formulário após submissão bem-sucedida.

---

## 🛠️ Tecnologias Aplicadas

* **HTML5:** Estruturação semântica e tags ARIA para leitores de tela.
* **CSS3:** Estilização responsiva, estados de foco e classes de erro dinâmicas (`.invalid`).
* **JavaScript (ES6+):** Manipulação nativa do DOM, expressões regulares (RegEx) para validação e ouvintes de eventos (`input`, `change`, `blur`, `submit`).

---

## 💻 Como Executar o Projeto

Clone o repositório:
   ```bash
   git clone [https://github.com/GabrielPitoli/formulario-inteligente.git](https://github.com/GabrielPitoli/formulario-inteligente.git)

Acesse a pasta do projeto:

Bash
cd formulario-inteligente
Abra o arquivo index.html diretamente em seu navegador web ou utilizando a extensão Live Server no VS Code.

👥 Autores
Gabriel Pitoli Bueno — RA: 25001076

Rafael Pagani Palma — RA: 25000880