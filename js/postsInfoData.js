getPosts();
const postsInfoData = JSON.parse(localStorage.getItem("postsInfo"));
function postRender(postsInfoData) {
  postsInfoData.forEach((e) => {
    const Card = document.createElement("card");
    Card.className = "card";
    Card.innerHTML = `
        <a href="./blog-post.html">
        <div class="card-img" >
        <img src="${e.image}" alt="image of ${e.name}"/>
        <h3>$      {e.title}</h3>
        </div>
        </a>
        
        `;
    postDiv.appendChild(Card);
  });
  postRender(postsInfoData);
  console.log(postsInfoData);
}
