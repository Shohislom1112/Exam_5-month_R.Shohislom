const blog = document.querySelector(".cards");

const userId = localStorage.getItem("userId");
async function fitchBlock() {
  let id = JSON.parse(localStorage.getItem("id"));
  try {
    let res = await fetch("http://localhost:3000/posts");
    let data = await res.json();
    let filteredData = data.slice(data.length - 1);
    displayPosts(filteredData);
  } catch (error) {
    console.log(error);
  }
}
fitchBlock();

console.log(userId);

function displayPosts(post) {
  let str = "";

  post.map((post) => {
    str += `
            <div class="card">
              <div class="img">
              <img src="${post.image}" alt=""></div>
              <div class="text">
              <span>${post.author}</span>
              <h1>${post.title}</h1>
              <p>${post.description}Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
              <p>${post.description}Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
              </div>
            </div>
        `;
  });
  blog.innerHTML = str;
}
