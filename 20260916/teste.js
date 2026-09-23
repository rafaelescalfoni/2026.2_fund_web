const produtos = [
    { nome: "Teclado", estoque: 8, preco: 120 },
    { nome: "Mouse", estoque: 0, preco: 80 },
    { nome: "Monitor", estoque: 3, preco: 950 },
    { nome: "Webcam", estoque: 5, preco: 250 }
];

let total = 0;
let quantidade = 0;

for (let i = 0; i < produtos.length; i++) {

    if (produtos[i].estoque > 0) {
        quantidade += produtos[i].estoque;
        total += produtos[i].estoque * produtos[i].preco;
    }
}

console.log(quantidade);
console.log(total);



let values = [4, 7, 2, 9, 5];

values = valores.map(val => (val %2 === 0)? val*2: val-1)
console.log(values)
for (let i = 0; i < valores.length; i++) {

    if (valores[i] % 2 === 0) {
        valores[i] *= 2;
    } else {
        valores[i] -= 1;
    }
}

console.log(valores);
console.log(novosValores)

const alunos = [
    { nome: "Ana", idade: 19, media: 8.5, faltas: 2 },
    { nome: "Bruno", idade: 17, media: 9.0, faltas: 1 },
    { nome: "Carlos", idade: 20, media: 6.5, faltas: 8 },
    { nome: "Daniela", idade: 18, media: 7.5, faltas: 3 },
    { nome: "Eduardo", idade: 21, media: 8.0, faltas: 6 }
];

const selecionados = alunos.filter(aluno =>
    aluno.media >= 7 &&
    aluno.faltas <= 5
);

console.log(selecionados);

const vendas = [
    { produto: "Notebook", valor: 3500, quantidade: 2 },
    { produto: "Mouse", valor: 80, quantidade: 5 },
    { produto: "Teclado", valor: 150, quantidade: 3 },
    { produto: "Monitor", valor: 900, quantidade: 4 }
];

const funcionarios = [
    { nome: "Ana", salario: 2500 },
    { nome: "Bruno", salario: 3200 },
    { nome: "Carlos", salario: 4100 },
    { nome: "Daniela", salario: 2800 }
];

[
    { nome: "...", salario: ..., novoSalario: ... },
    ...
]

const livros = [
    { isbn: "101", titulo: "JavaScript", disponivel: true },
    { isbn: "102", titulo: "HTML e CSS", disponivel: false },
    { isbn: "103", titulo: "Banco de Dados", disponivel: true },
    { isbn: "104", titulo: "Redes", disponivel: true }
];

function buscarLivro(isbn) {
    // complete
}

function analisarAluno(aluno) {

    // complete
}

{
    nome: "Marcos",
    notas: [7, 8, 6],
    faltas: 3
}

const pedidos = [
    { cliente: "Ana", valor: 120 },
    { cliente: "Bruno", valor: 80 },
    { cliente: "Ana", valor: 250 },
    { cliente: "Carlos", valor: 100 },
    { cliente: "Bruno", valor: 300 }
];

const resultado = pedidos.reduce((acumulador, pedido) => {

    if (!acumulador[pedido.cliente]) {
        acumulador[pedido.cliente] = 0;
    }

    acumulador[pedido.cliente] += pedido.valor;

    return acumulador;

}, {});

console.log(resultado);


const produtos = [
    { nome: "Caneta", preco: 5 },
    { nome: "Caderno", preco: 20 },
    { nome: "Mochila", preco: 100 }
];

const novosProdutos = produtos.map(produto => {
    produto.preco = produto.preco * 1.1;
    return produto;
});
console.log(produtos)
console.log(novosProdutos)

const transacoes = [
    { tipo: "entrada", valor: 500 },
    { tipo: "saida", valor: 100 },
    { tipo: "entrada", valor: 250 },
    { tipo: "saida", valor: 80 },
    { tipo: "entrada", valor: 300 }
];

let total = 100;

function calcular() {

    let total = 50;

    function adicionar(valor) {
        total += valor;
    }

    adicionar(20);

    return total;
}

console.log(calcular());
console.log(total);


let valores = [10, 20, 30];

function alterar() {

    let valores = [1, 2];

    valores.push(3);

    console.log(valores);
}

alterar();

console.log(valores);

function calcularPedido(pedido) {
    // complete
}

{
    cliente: "João",
    itens: [
        { produto: "Caneta", preco: 5, quantidade: 3 },
        { produto: "Caderno", preco: 20, quantidade: 2 },
        { produto: "Mochila", preco: 100, quantidade: 1 }
    ]
}

{
    cliente: "João",
    subtotal: 155,
    desconto: 15.5,
    total: 139.5
}


function processar(alunos) {

    let x = [];

    for (let i = 0; i < alunos.length; i++) {

        if (alunos[i].n >= 7 && alunos[i].f <= 5) {
            x.push({
                n: alunos[i].nome,
                m: alunos[i].n
            });
        }
    }

    return x;
}

const produtos = [
    { id: 1, nome: "Mouse", estoque: 10 },
    { id: 2, nome: "Teclado", estoque: 5 },
    { id: 3, nome: "Monitor", estoque: 2 }
];

function venderProduto(id, quantidade) {
    // complete
}

venderProduto(2, 3);
venderProduto(3, 5);
venderProduto(8, 1);

function analisar(valores) {

    for (let i = 0; i < valores.length; i++) {

        if (valores[i] < 0) {
            return "Valor inválido";
        }
    }

    return valores.reduce((total, valor) => total + valor, 0);
}

console.log(analisar([10, 20, 5]));
console.log(analisar([10, -2, 5]));

function processarAlunos(alunos) {

    let aprovados = [];

    for (let i = 0; i < alunos.length; i++) {

        let soma = 0;

        for (let j = 0; j < alunos[i].notas.length; j++) {
            soma += alunos[i].notas[j];
        }

        let media = soma / alunos[i].notas.length;

        if (media >= 7 && alunos[i].faltas <= 5) {
            aprovados.push(alunos[i].nome);
        }
    }

    console.log("Quantidade:", aprovados.length);
    console.log("Aprovados:", aprovados);
}
calcularMedia(...)

alunoAprovado(...)

const vendas = [
    { vendedor: "Ana", valor: 1200 },
    { vendedor: "Carlos", valor: 800 },
    { vendedor: "Ana", valor: 600 },
    { vendedor: "Bruno", valor: 1500 },
    { vendedor: "Carlos", valor: 400 },
    { vendedor: "Bruno", valor: 300 }
];

{
    Ana: 1800,
    Carlos: 1200,
    Bruno: 1800
}

const livros = [
    {
        titulo: "JavaScript Essencial",
        genero: "Programação",
        ano: 2022,
        disponivel: true
    },
    {
        titulo: "Redes de Computadores",
        genero: "Tecnologia",
        ano: 2019,
        disponivel: false
    },
    {
        titulo: "Banco de Dados",
        genero: "Tecnologia",
        ano: 2023,
        disponivel: true
    },
    {
        titulo: "HTML e CSS",
        genero: "Web",
        ano: 2021,
        disponivel: true
    }
];

listarDisponiveis()

listarPorGenero(genero)

listarTitulosDisponiveis()

existeLivroIndisponivel()

buscarLivro(titulo)


const alunos = [
    {
        nome: "Ana",
        notas: [8, 7, 9],
        faltas: 2
    },
    {
        nome: "Bruno",
        notas: [6, 5, 7],
        faltas: 4
    },
    {
        nome: "Carlos",
        notas: [9, 8, 10],
        faltas: 1
    },
    {
        nome: "Daniela",
        notas: [5, 4, 6],
        faltas: 8
    }
];

gerarRelatorio(alunos)

[
    {
        nome: "Ana",
        media: 8,
        faltas: 2,
        situacao: "Aprovado"
    },
    ...
]

{
    nome,
    media,
    faltas,
    situacao
}