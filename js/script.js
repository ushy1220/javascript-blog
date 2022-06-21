'use strict';

function titleClickHandler(event){
  const clickedElement = this;
  event.preventDefault();                        //moje moje moje 
  console.log('Link was clicked!');
  console.log(event);

  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [IN PROGRESS] add class 'active' to the clicked link */

  clickedElement.classList.add('active');                  //MOJE  podkreslenie linkow po kliknieciu

  console.log('clickedElement:', clickedElement);

  /* remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */

  let hrefAtr = clickedElement.getAttribute('href');

  /* find the correct article using the selector (value of 'href' attribute) */

  let articleValue = document.querySelector(hrefAtr);
  

  /* add class 'active' to the correct article */

  articleValue.classList.add('active');                        
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */
  let titles = document.querySelector(optTitleListSelector);
  titles.innerHTML = '';
  /* for each article */
  let articles = document.querySelectorAll(optArticleSelector)
  for(let article of articles) {
    /* get the article id */
    let id = article.getAttribute('id');
    /* find the title element */
    let title = article.querySelector(optTitleSelector).innerHTML;
    /* get the title from the title element */

    /* create HTML of the link */
    let html = '<li><a href="#'+id+'"><span>'+title+'</span></a></li>';
    /* insert link into titleList */
    titles.innerHTML += html;    /* titles.innerHTML = titles.innerHTML+html */
 }
}

generateTitleLinks();

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
} 

// MODUŁ 6

function generateTags(){
  /* find all articles */

  /* START LOOP: for every article: */

  /* find tags wrapper */

  /* make html variable with empty string */

  /* get tags from data-tags attribute */

  /* split tags into array */

  /* START LOOP: for each tag */

  /* generate HTML of the link */

  /* add generated code to html variable */

  /* END LOOP: for each tag */

  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();