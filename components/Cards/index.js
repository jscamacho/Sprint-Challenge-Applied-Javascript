// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(data => {
  console.log('Major Success!', data);
  const cards = document.querySelector('.cards-container');
  cards.appendChild(createCard(data.data));
})
.catch(err => {
  console.log('Major Error: ', err);
})

function createCard(articles){
 
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const byAuthor = document.createElement('span');
   
  
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(byAuthor);
    imgContainer.appendChild(authorImg);
    
    headline.textContent = articles.headline;
    authorImg.src = articles.authorPhoto;
    byAuthor.textContent = articles.authorName;

    return card;
}