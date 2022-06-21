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
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){

  /* remove contents of titleList */
  let titles = document.querySelector(optTitleListSelector);
  titles.innerHTML = '';
  /* for each article */
  let articles = document.querySelectorAll(optArticleSelector);
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
  link.addEventListener('click', titleClickHandler);    //od const link do konca skopiowac i wstawic na koncu pracy v
} 

// MODUŁ 6

function generateTags(){
  /* find all articles */
  let articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for(let article of articles){
    /* find tags wrapper */
    let wrapper = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    let tagsString = article.getAttribute('data-tags');
    /* split tags into array */
    let tags = tagsString.split(' ');   /* dziele tagi na pojedyncze elementy za pomocą spacji */
    /* START LOOP: for each tag */
    for(let tag of tags) {
    /* generate HTML of the link */
      let tmp = '<li><a href="#tag-'+tag+'">'+tag+'</a></li> '
    /* add generated code to html variable */
      html +=  tmp;
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    wrapper.innerHTML = html;
    /* END LOOP: for every article: */
  }
}

generateTags();

function tagClickHandler(event){

  /* prevent default action for this event */
  event.preventDefault
  /* make new constant named "clickedElement" and give it the value of "this" */

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  /* make a new constant "tag" and extract tag from the "href" constant */

  /* find all tag links with class active */

  /* START LOOP: for each active tag link */

    /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

        // Wstawic TU!!!!

        
function addClickListenersToTags(){
  /* find all links to tags */
  let links = document.querySelectorAll('a[href^="#tag-"]'); // (optArticleTagsSelector + ' a')
  /* START LOOP: for each link */
  for(let link of links){
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
  }
}

addClickListenersToTags();