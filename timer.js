function calculateReadingTime() {
  const article = document.querySelector('article');
  if (!article) {
    console.log('no article found');
    return;
  }
  
  const articleText = article.innerText;
  const wordCount = articleText.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / 200);
  
  const readingTimeDiv = document.createElement('div');
  readingTimeDiv.className = 'reading-time';
  readingTimeDiv.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
    <span>${readingTimeMinutes} min read</span>
  `;
  
  const h1 = document.querySelector('article h1');
  if (h1) {
    h1.insertAdjacentElement('afterend', readingTimeDiv);
  }
}

// wait for page to load
document.addEventListener('DOMContentLoaded', calculateReadingTime);
