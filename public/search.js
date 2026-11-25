(() => {
  const input = document.querySelector('#query');
  const list = document.querySelector('#search-results');
  const status = document.querySelector('#search-status');
  const query = new URLSearchParams(window.location.search).get('q') ?? '';
  input.value = query;
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  let count = 0;
  for (const item of list.children) {
    const words = item.textContent.toLowerCase();
    item.hidden = !terms.every(term => words.includes(term));
    if (!item.hidden) count += 1;
  }
  status.textContent = terms.length ? (count ? count + (count === 1 ? ' result' : ' results') : 'No products found. Try another search.') : 'Browse all styles.';
})();
