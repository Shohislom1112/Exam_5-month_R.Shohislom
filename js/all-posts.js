const postDiv = document.querySelector(".posts");

async function getPostsAPI() {
  try {
    let res = await fetch(`http://localhost:3000/posts`);
    let data = await res.json();
    pushPosts(data);
  } catch (error) {
    console.log(error);
  }
}

getPostsAPI();

function pushPosts(users) {
  let str = "";

  users.map((user) => {
    str += `
              <a href="./blog-post.html" onclick="getPost(${user.id})" class="post">
                <div class="card">
                <div class="post_img">
                  <img src="${user.image}" alt="">
                </div>
                <div class="post_text">
                  <span>${user.category}</span>
                  <h2>${user.title}</h2>
                  <p>${user.description}</p>
                  <h3>${user.author}</h3>
                </div>
                </div>
              </a>
          `;
  });
  postDiv.innerHTML = str;
}

// search /////////////////////////////////////////////////////////
const searchInput = document.getElementById("search");
const textList = document
  .getElementById("posts")
  .getElementsByClassName("post");

function qidirish() {
  const searchch = searchInput.value.toLowerCase();

  for (let i = 0; i < textList.length; i++) {
    const malumot = textList[i].textContent.toLowerCase();

    if (malumot.indexOf(searchch) > -1) {
      textList[i].style.display = "";
    } else {
      textList[i].style.display = "none";
    }
  }
}

searchInput.addEventListener("input", qidirish);
