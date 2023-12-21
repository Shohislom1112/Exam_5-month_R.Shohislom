// const postDiv = document.querySelector(".posts");

// async function getPostsAPI() {
//   try {
//     let res = await fetch(`http://localhost:3000/posts`);
//     let data = await res.json();
//     pushPosts(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getPostsAPI();

// function pushPosts(users) {
//   let str = "";

//   users.map((user) => {
//     str += `
//               <a href="./blog-post.html" onclick="getPost(${user.id})" class="post">
//                 <div class="card">
//                 <div class="post_img">
//                   <img src="${user.image}" alt="">
//                 </div>
//                 <div class="post_text">
//                   <span>${user.category}</span>
//                   <h2>${user.title}</h2>
//                   <p>${user.description}</p>
//                   <h3>${user.author}</h3>
//                 </div>
//                 </div>
//               </a>
//           `;
//   });
//   postDiv.innerHTML = str;
// }

const postCard = document.querySelector(".cards");
const infosList = document
  .getElementById("cards")
  .getElementsByClassName("post");

async function getPosts() {
  try {
    let rest = await fetch("http://localhost:3000/posts");
    let date = await rest.json();
    pushPosts(date);
  } catch (error) {
    console.log(error);
  }
}

getPosts();

function pushPosts(user) {
  let Str = "";

  user.map((u) => {
    Str += `
            <a href="./blog-post.html" onclick="getPost(${u.id})" class="post">
              <div class="post_img">
                <img src="${u.image}" alt="">
              </div>
              <div class="texts">
                <p class="category">${u.category}</p>
                <h2>${u.title}</h2>
                <p>${u.description}</p>
                <p class="job">${u.author}</p>
              </div>
            </a>
        `;
  });
  postCard.innerHTML = Str;
}

function getPost(id) {
  localStorage.setItem("userId", id);
  console.log(id);



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
