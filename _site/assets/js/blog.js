document.addEventListener('DOMContentLoaded', () => {
  const filter = document.getElementById('tag-filter');
  const posts = [...document.querySelectorAll('.post-card')];
  const empty = document.getElementById('empty-state');
  if (!filter) return;

  function applyTag(tag) {
    let visible = 0;
    posts.forEach(post => {
      const tags = (post.dataset.tags || '').split('|').map(t => t.trim());
      const show = tag === 'all' || tags.includes(tag.toLowerCase());
      post.hidden = !show;
      if (show) visible++;
    });
    filter.querySelectorAll('[data-tag]').forEach(button => {
      button.classList.toggle('active', button.dataset.tag.toLowerCase() === tag.toLowerCase());
    });
    if (empty) empty.hidden = visible !== 0;
    const hash = tag === 'all' ? '' : `#${encodeURIComponent(tag.toLowerCase())}`;
    history.replaceState(null, '', `${location.pathname}${hash}`);
  }

  filter.addEventListener('click', event => {
    const button = event.target.closest('[data-tag]');
    if (button) applyTag(button.dataset.tag);
  });
  document.querySelectorAll('.post-tag').forEach(button => {
    button.addEventListener('click', () => applyTag(button.dataset.tag));
  });

  const initialTag = decodeURIComponent(location.hash.slice(1));
  if (initialTag) applyTag(initialTag);
});
