
const newsCategory = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategory(data.data.news_category))
}

const displayCategory = (categories) => {
    //console.log(categories.category_name)
    const mobileContainer = document.getElementById("nav-container");
 

    categories.forEach((category) => {
    const phoneCard = document.createElement("nav");
    phoneCard.classList.add("nav");
    phoneCard.innerHTML = `
    
    <a onclick="newsDetails('${category.category_id}')" class="nav-link"  href="#">${category.category_name}</a>
  
          `;
    mobileContainer.appendChild(phoneCard);
  });

}

const newsDetails = (id) => {
    const url =` https://openapi.programming-hero.com/api/news/category/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.data))
}

const displayNews = (newses) => {
    const newsContainer = document.getElementById('news-container');
    newsContainer.textContent = ''
    //newsContainer.innerText = news.title
        
    newses.forEach(news => {
        const newsCol = document.createElement('div');
    newsCol.classList.add('col-md-4');
    newsCol.innerHTML = `
    <img src="${news.thumbnail_url}" class="img-fluid rounded-start mt-4" alt="...">
    `
    newsContainer.appendChild(newsCol);
    
    //const newsBody = document.getElementById('news-body');
    const cardBody = document.createElement('div');
    cardBody.classList.add('col-md-8');
    cardBody.innerHTML = `
    <div class="card-body mt-3">
    <h5 class="card-title">${news.title}</h5>
              <p class="card-text">'${news.details.slice(0,250)}'</p>
              <div class= 'd-flex justify-content-end mt-4'> 
              
              <p class="card-text"><small class="text-muted me-3">${news.author.name ? news.author.name : 'Unknown' }</small></p>
              <img src="${news.author.img}" class="img-fluid rounded-circle" style="width: 50px; height: 50px;" alt="...">
              </div>
             </div> 
    `

   newsContainer.appendChild(cardBody)
    });
    

}

newsCategory();
newsDetails('01');


    