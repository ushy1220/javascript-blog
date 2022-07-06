'use strict';

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optTagsListSelector = '.tags .list',
  optArticleAuthorsSelector = '.post-author .list',
  optAuthorsListSelector = '.authors .list';

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

function generateTitleLinks(customSelector = ''){

  /* remove contents of titleList */
  let titles = document.querySelector(optTitleListSelector);
  titles.innerHTML = '';

  /* for each article */
  let articles = document.querySelectorAll(optArticleSelector + customSelector);
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

generateTags();
generateAuthors();

function tagClickHandler(event){            //SAMODZIELNIE

  /* prevent default action for this event */
  event.preventDefault();     //blokowanie domyslnych opcji przegladarki

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');

  /* find all tag links with class active */
  let tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */
  for(let tagLink of tagLinks){

    /* remove class active */
    tagLink.classList.remove('active');

  /* END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */
  let equalLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* START LOOP: for each found tag link */
  for(let equalLink of equalLinks){

    /* add class active */
    equalLink.classList.add('active');

  /* END LOOP: for each found tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

// koniec samodzielnosci :(

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

// SAMODZIELNIE- TAGI (TABLICA)

function generateTags(){

  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};

  /* find all articles */
  let articles = document.querySelectorAll('article');

  /* START LOOP: for every article: */
  for(let article of articles){

    /* find tags wrapper */
    let wrapper = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    let tagsString = article.getAttribute('data-tags');

    /* split tags into array */
    let tags = tagsString.split(' ');

    /* START LOOP: for each tag */
    for(let tag of tags){

      /* generate HTML of the link */
      let tmp = '<li><a href="#tag-'+tag+'">'+tag+'</a></li> ';

      /* add generated code to html variable */
      html +=  tmp;

      /* [NEW] check if this link is NOT already in allTags */
      if(!(tag in allTags)){      //jeśli allTags NIE MA klucza tag    
                                  
        /* [NEW] add generated code to allTags array */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;     //Jeśli ten tag już znajduje się w allTags, zwiększymy licznik wystąpień o 1
      }

    /* END LOOP: for each tag */
    }

    /* insert HTML of all the links into the tags wrapper */
    wrapper.innerHTML = html;

  /* END LOOP: for every article: */
  }


  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(optTagsListSelector);
  const tagsParams = calculateTagsParams(allTags);
  console.log('tagsParams:', tagsParams);

  /* [NEW] create variable for all links HTML code */
  let allTagsHTML = '';

  /* [NEW] START LOOP: for each tag in allTags */
  for(let tag in allTags){

    /* [NEW] generate code of a link and and add it to allTagsHTML */
    allTagsHTML += '<li><a href="#tag-'+tag+'">'+tag+'(' + allTags[tag] + ')</a></li>';

  /* [NEW] END LOOP: for each tag in allTags */
  }

  /* [NEW] add html from allTagsHTML to taglist */
  tagList.innerHTML = allTagsHTML;
}

function calculateTagsParams(tags){
  const params = {max: 0, min:99999};
  for(let tag in tags){ 
    if(tags[tag] > params.max){
      params.max = tags[tag];
    } else if(tags[tag] < params.min){
      params.min = tags[tag];
    }
  }
  return params;
}





// SAMODZIELNIE- Autorzy  (TABLICA)

function authorClickHandler(event){            //SAMODZIELNIE

  /* prevent default action for this event */
  event.preventDefault();     //blokowanie domyslnych opcji przegladarki

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

  /* make a new constant "author" and extract author from the "href" constant */
  const author = href.replace('#author-', '');

  /* find all author links with class active */
  let authorLinks = document.querySelectorAll('a.active[href^="#author-"]');

  /* START LOOP: for each active author link */
  for(let authorLink of authorLinks){

    /* remove class active */
    authorLink.classList.remove('active');

  /* END LOOP: for each active author link */
  }

  /* find all author links with "href" attribute equal to the "href" constant */
  let equalLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* START LOOP: for each found author link */
  for(let equalLink of equalLinks){

    /* add class active */
    equalLink.classList.add('active');

  /* END LOOP: for each found author link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-authors="' + author + '"]'); 
}




function addClickListenersToAuthors(){

  /* find all links to authors */
  let links = document.querySelectorAll('a[href^="#author-"]'); // (optArticleAuthorsSelector + ' a')

  /* START LOOP: for each link */
  for(let link of links){

    /* add authorClickHandler as event listener for that link */
    link.addEventListener('click', authorClickHandler);

  /* END LOOP: for each link */
  }
}

addClickListenersToAuthors();





function generateAuthors(){

  /* [NEW] create a new variable allAuthors with an empty object */
  let allAuthors = {};

  /* find all articles */
  let articles = document.querySelectorAll('article');

  /* START LOOP: for every article: */
  for(let article of articles){

    /* find authors wrapper */
    let wrapper = article.querySelector(optArticleAuthorsSelector);

    /* make html variable with empty string */
    let html = '';

    /* get authors from data-authors attribute */
    let authorsString = article.getAttribute('data-author');

    /* split authors into array */
    let authors = authorsString.split(' ');

    /* START LOOP: for each author */
    for(let author of authors){

      /* generate HTML of the link */
      let tmp = '<li><a href="#author-'+author+'">'+author+'</a></li> ';

      /* add generated code to html variable */
      html +=  tmp;

      /* [NEW] check if this link is NOT already in allAuthors */
      if(!(author in allAuthors)){      //jeśli allAuthors NIE MA klucza author    
                                  
        /* [NEW] add generated code to allAuthors array */
        allAuthors[author] = 1;
      } else {
        allAuthors[author]++;     //Jeśli ten autor już znajduje się w allAuthors, zwiększymy licznik wystąpień o 1
      }

    /* END LOOP: for each author */
    }

    /* insert HTML of all the links into the Authors wrapper */
    wrapper.innerHTML = html;

  /* END LOOP: for every article: */ 
  }

  /* [NEW] find list of Authors in right column */
  const authorList = document.querySelector(optAuthorsListSelector);
  const authorsParams = calculateAuthorsParams(allAuthors);
  console.log('authorsParams:', authorsParams);

  /* [NEW] create variable for all links HTML code */
  let allAuthorsHTML = '';

  /* [NEW] START LOOP: for each author in allAuthors */
  for(let author in allAuthors){

    /* [NEW] generate code of a link and and add it to allAuthorsHTML */
    allAuthorsHTML += '<li><a href="#author-'+author+'">'+author+'(' + allAuthors[author] + ')</a></li>';

  /* [NEW] END LOOP: for each author in allAuthors */
  }

  /* [NEW] add html from allAuthorsHTML to authorlist */
  authorList.innerHTML = allAuthorsHTML;
}


function calculateAuthorsParams(authors){
  const params = {max: 0, min:99999};
  for(let author in authors){ 
    if(authors[author] > params.max){
      params.max = authors[author];
    } else if(authors[author] < params.min){
      params.min = authors[author];
    }
  }
  return params;
}
