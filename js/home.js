const blog = document.querySelector(".cards");

const userId = localStorage.getItem("userId");
async function fitchBlock() {
  let id = JSON.parse(localStorage.getItem("id"));
  try {
    let res = await fetch("http://localhost:3000/posts");
    let data = await res.json();
    let filteredData = data.slice(data.length - 3, data.length);
    displayTodos(filteredData);
  } catch (error) {
    console.log(error);
  }
}
fitchBlock();

console.log(userId);

function displayTodos(todos) {
  let str = "";

  todos.map((todo) => {
    str += `
    <a href="./all-posts.html">
    <div class="card">
    <div class="img"><img src="${todo.image}" alt=""></div>
   <div class="t">
   <span>${todo.author}</span>
   <h3>${todo.title}</h3>
   <p>${todo.description}Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo.  non.</p>
   </div>
  </div>
    </a>
        `;
  });
  blog.innerHTML = str;
}
