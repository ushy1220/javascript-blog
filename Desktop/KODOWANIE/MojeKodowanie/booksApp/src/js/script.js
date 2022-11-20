{
  'use strict';

  /* REFERENCJE DO SZABLONÓW, LIST KSIĄŻEK(.books-list) ITP */
  const select = {
    templateOf: {
      books: '#template-book',
    },

    listOf: {
      booklist: '.books-list',
      filters: '.filters',
    },

    containerOf: {
      image: '.book__image',
    },

    imageParams: {
      id: '.book-id'
    }
  };

  const templates = {
    bookTemplate: Handlebars.compile(document.querySelector(select.templateOf.books).innerHTML),
  };

  const favoriteBooks = [];
 
  class Booklist {
    constructor(){
      const thisBookList = this;

      thisBookList.initData();
      thisBookList.getElements();
      thisBookList.render();
      thisBookList.initActions();
    }

    initData(){
      const thisBookList = this;

      thisBookList.data = dataSource.books;
    }

    getElements(){
      const thisBookList = this;

      thisBookList.bookListContainer = document.querySelector(select.listOf.booklist);
      thisBookList.filtersContainer = document.querySelector(select.listOf.filters);
      thisBookList.imageListContainer = document.querySelector(select.containerOf.image);
      thisBookList.paramsContainer = document.querySelector(select.imageParams.id);
    }
    /*
    1. utworzenie i wywołanie funkcji, która przejdzie po wszystkich książkach z dataSource.books i wyrenderuje dla nich reprezentacje HTML w liście .books-list
    */
    render(){ // nowa funkcja "render"
      const thisBookList = this;

      for(let book of thisBookList.data){ // przejdź po każdym elemencie z dataSource.books
        const generatedHTML = templates.bookTemplate(book); // wygenerowanie kodu HTML na podstawie szablonu oraz danych o konkretnej książce.
        const generatedDOM = utils.createDOMFromHTML(generatedHTML); // Na postawie tego kodu HTML wygeneruj element DOM
        thisBookList.bookListContainer.appendChild(generatedDOM); // Wygenerowany element DOM dołącz jako nowe dziecko DOM do listy .books-list
      }    
    }

    initActions(){
      const thisBookList = this;

      const allElems = thisBookList.bookListContainer;
      console.log(allElems);

      for(let elem of allElems){
        elem.addEventListener('dbclick', function(event){
          event.preventDefault();
          elem.classList.add('favorite');
          const bookId = elem.getAttribute('data-id');
          favoriteBooks.push(bookId); 
        });
      }
    }
  }

  new Booklist(); 
}
