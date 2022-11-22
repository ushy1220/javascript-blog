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
 
  class Booklist {
    constructor(){
      const thisBookList = this;

      thisBookList.initData();
      thisBookList.getElements();
      thisBookList.render();
      thisBookList.initActions();
      thisBookList.determineRatingBgc();
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
      thisBookList.favoriteBooks = [];
      thisBookList.filters = []; // jakie filtry są aktualnie wybrane
    }
    /*
    1. utworzenie i wywołanie funkcji, która przejdzie po wszystkich książkach z dataSource.books i wyrenderuje dla nich reprezentacje HTML w liście .books-list
    */
    render(){ 
      const thisBookList = this;

      for(let book of thisBookList.data){ // przejdź po każdym elemencie z dataSource.books
        const ratingBgc = thisBookList.determineRatingBgc(book.rating);
        book.ratingBgc = ratingBgc;

        const ratingWidth = book.rating*10;
        book.ratingWidth = ratingWidth;

        const generatedHTML = templates.bookTemplate(book); // wygenerowanie kodu HTML na podstawie szablonu oraz danych o konkretnej książce.
        const generatedDOM = utils.createDOMFromHTML(generatedHTML); // Na postawie tego kodu HTML wygeneruj element DOM
        thisBookList.bookListContainer.appendChild(generatedDOM); // Wygenerowany element DOM dołącz jako nowe dziecko DOM do listy .books-list  
      }    
    }
    
    initActions(){
      const thisBookList = this;

      const allElems = thisBookList.bookListContainer;

      allElems.addEventListener('dblclick', function(event){
        event.preventDefault();

        if(event.target.offsetParent.classList.contains('book__image')){ 
          const clickedElement = event.target.offsetParent;
          const bookId = clickedElement.getAttribute('data-id');

          console.log(bookId);
          if(!thisBookList.favoriteBooks.includes(bookId)){
            clickedElement.classList.add('favorite');  
            thisBookList.favoriteBooks.push(bookId);
          } else {
            clickedElement.classList.remove('favorite');
            const index = thisBookList.favoriteBooks.indexOf(bookId);
            thisBookList.favoriteBooks.splice(index, 1);
          }    
        }
      });
      const filters = thisBookList.filtersContainer;
      filters.addEventListener('click', function(event){

        const clickedElement = event.target;
        if(clickedElement.tagName == 'INPUT' && clickedElement.type == 'checkbox' && clickedElement.name == 'filter'){
          if(clickedElement.checked == true){
            thisBookList.filters.push(clickedElement.value);
          } else {
            const index = thisBookList.filters.indexOf(clickedElement.value);
            thisBookList.filters.splice(index, 1);
          }
          thisBookList.filteredBooks();
        }
      });
      
    }
    
    filteredBooks(){
      const thisBookList = this;
      
      for(let book of thisBookList.data){
        let shouldBeHidden = false;
        for(let filter of thisBookList.filters){
          if(!book.details[filter]){ // sprawdź, czy dana właściwość, której nazwa to wartość filter jest false
            shouldBeHidden = true;
            break;
          }
        }
        const bookElem = document.querySelector('.book__image[data-id="'+book.id+'"]'); //element o klasie book_image i atrybucie data-id zgodnym z id książki (book.id jest odniesieniem do JSa)
        
        if(shouldBeHidden == true){
          bookElem.classList.add('hidden');
        } else {
          bookElem.classList.remove('hidden');
        }
      }
    }

    determineRatingBgc(rating){
      
      if(rating < 6){
        return 'linear-gradient(to bottom, #fefcea 0%, #f1da36 100%)';
      } else if(rating > 6 && rating <= 8){
        return 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)';
      } else if(rating > 8 && rating <= 9){
        return 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
      } else if(rating > 9){
        return 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)';
      }
    }    
  }
  new Booklist();
}