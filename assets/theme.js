(() => {
  const root = document.documentElement;
  const button = document.createElement('button');

  button.className = 'theme-toggle';
  button.type = 'button';
  button.innerHTML = [
    '<span class="theme-icon theme-icon-sun" aria-hidden="true">&#9728;</span>',
    '<span class="theme-icon theme-icon-moon" aria-hidden="true">&#9789;</span>'
  ].join('');

  const updateLabel = () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    const label = `Switch to ${nextTheme} mode`;
    button.setAttribute('aria-label', label);
    button.title = label;
  };

  button.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', root.dataset.theme);
    updateLabel();
  });

  updateLabel();
  document.body.prepend(button);
})();
