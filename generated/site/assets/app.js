(() => {
  const endpoint = './data/latest.json';
  fetch(endpoint).then(() => {
    // Static site intentionally keeps runtime logic minimal.
  }).catch(() => {
    // Ignore network failures; page content is already usable.
  });
})();