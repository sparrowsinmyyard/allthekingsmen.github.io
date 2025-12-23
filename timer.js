function calculateReadingTime() {
  const articleText = document.querySelector('article').innerText;
  const wordCount = articleText.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / 200);
  
  // CREATE the reading time element
  const readingTimeDiv = document.createElement('div');
  readingTimeDiv.className = 'reading-time';
  readingTimeDiv.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
    <span>${readingTimeMinutes} min read</span>
  `;
  
  // INSERT it after the h1
  const h1 = document.querySelector('article h1');
  h1.insertAdjacentElement('afterend', readingTimeDiv);
}

calculateReadingTime();
