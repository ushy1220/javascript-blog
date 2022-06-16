'use strict';

function titleClickHandler(event){
  const clickedElement = this;
  event.preventDefault();         //moje moje moje 
  console.log('Link was clicked!');
  console.log(event);

  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* [IN PROGRESS] add class 'active' to the clicked link */

for(let link of links) {                         //MOJE
  link.classList.add('active');         //MOJE
}

  console.log('clickedElement:', clickedElement);

  /* remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts a.active');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */

  const articlesSelector = document.getElementsBy('href');   //MOJE
  for(let article of articles){        //MOJE
    articleSelector.classList.add('active');  //MOJE
  }
  article.classList.remove('active');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
} 