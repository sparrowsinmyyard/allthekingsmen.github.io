// sort essays by date (newest first)
const latestEssays = essays
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 5);

const postsContainer = document.getElementById("posts");

latestEssays.forEach(essay => {
  const post = document.createElement("div");
  post.className = "post";

  post.innerHTML = `
    <h2><a href="${essay.file}">${essay.title}</a></h2>
    <p>${essay.preview}</p>
  `;

  postsContainer.appendChild(post);
});
