let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

// 1
console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama ‘' + leitor['livrosFavoritos'][0]['titulo'] +'’')

// 2
let HP = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }

leitor['livrosFavoritos'].push(HP)

// 3
console.log('Julia tem ' + leitor['livrosFavoritos'].length +' livros favoritos')