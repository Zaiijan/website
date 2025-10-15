let currentPage = 1;

function showPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.add('hidden');
  });
  document.getElementById(`page${pageNumber}`).classList.remove('hidden');
  currentPage = pageNumber;
}

function nextPage(pageNumber) {
  showPage(pageNumber);
}

function prevPage(pageNumber) {
  showPage(pageNumber);
}
