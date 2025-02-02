function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => renderBooks(json));
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

// fetch('https://anapioficeandfire.com/api/characters')
//   .then(resp => resp.json())
//   .then(json => workWith(json));

// function workWith(json){
//   // let char = json[1030]
//   // console.log(char)
//   console.log(json)
// }
