function calculateReadingTime() {
  const articleText = document.querySelector('article').innerText;
  const wordCount = articleText.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / 200);
  const readingTimeSpan = document.getElementById('readingTime');
  
  if (readingTimeSpan) {
    readingTimeSpan.textContent = `${readingTimeMinutes} min read`;
  }
}

calculateReadingTime();
