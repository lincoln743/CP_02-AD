# 🎬 Elenco — CheckPoint 2

Aplicação web feita com **HTML, CSS e JavaScript puro** que exibe e filtra atores e atrizes a partir de um array de objetos JSON.

| | |
|---|---|
| **Aluno** | Lincoln Pereira |
| **RM** | 567284 |
| **Turma** | 2CCPS |
| **Disciplina** | Application Development |
| **Professor** | Rodrigo Settervall Moraes |
| **Instituição** | FIAP |

---

## 📌 Sobre o projeto

O app carrega os 75 atores e atrizes do arquivo `dados.js` e mostra cada um em um card com **foto, nome, país e data de nascimento**. Em cima do grid tem um campo de busca que filtra os cards pelo nome enquanto o usuário digita.

### Requisitos do CheckPoint

- [x] Título
- [x] Renderização de todos os atores e atrizes do array em um grid de cards (foto, nome, país e data de nascimento)
- [x] Campo de busca com `input type="text"` filtrando pelo nome conforme digita
- [x] Filtro usando `oninput`, `filter()` e `includes()`

### Extras

- Busca sem diferenciar maiúsculas de minúsculas (`toLowerCase()`)
- Contador de resultados (ex: `4 de 75 exibidos`)
- Mensagem quando nenhum nome é encontrado
- Data de nascimento convertida para o padrão brasileiro (`dd/mm/aaaa`)
- Layout responsivo (funciona no celular)

---

## 🗂️ Estrutura de pastas

```
CP_02-AD/
├── index.html     # estrutura da página
├── style.css      # estilo visual
├── script.js      # renderização dos cards e filtro
├── dados.js       # array de atores fornecido pelo professor
├── prints/        # snapshots da entrega
│   ├── tela-inicial.png
│   └── tela-filtro.png
└── README.md
```

---

## ⚙️ Como funciona

**1. Renderização** — a função `renderizarCards(lista)` limpa o grid e percorre a lista com `forEach`, montando o HTML de cada card com template string. Quando a página abre, ela é chamada com o array completo:

```js
renderizarCards(atores);
```

**2. Filtro** — o input chama `filtrarAtores()` pelo `oninput`, então a função roda a cada letra digitada:

```html
<input type="text" id="campoBusca" oninput="filtrarAtores()">
```

Dentro dela, o `filter()` cria um novo array só com os atores cujo nome contém o texto digitado (verificado com `includes()`), e esse array é renderizado de novo:

```js
const filtrados = atores.filter(function (ator) {
    return ator.nome.toLowerCase().includes(texto);
});
renderizarCards(filtrados);
```

---

## ▶️ Como executar

Não precisa instalar nada. Basta clonar o repositório e abrir o `index.html` no navegador:

```bash
git clone https://github.com/lincoln743/CP_02-AD.git
cd CP_02-AD
xdg-open index.html
```

> As fotos são carregadas do TVmaze, então é preciso estar com internet.

---

## 📸 Snapshots

### Tela ao abrir
![Tela inicial](prints/tela-inicial.png)

### Tela com filtro aplicado (busca: "tom")
![Tela com filtro](prints/tela-filtro.png)

---

## 🛠️ Tecnologias

- HTML5
- CSS3 (Grid, variáveis CSS, media query)
- JavaScript (ES6)
- Fontes: Fraunces e Archivo (Google Fonts)
- Dados: [TVmaze](https://www.tvmaze.com)
