(() => {
  'use strict';
  const root = document.getElementById('channels-gallery');
  if (!root) return;
  const grid = root.querySelector('#channelsGrid');
  const search = root.querySelector('#channelsSearch');
  const filters = root.querySelector('#channelsFilters');
  const count = root.querySelector('#channelsCount');
  const more = root.querySelector('#channelsMore');
  const all = root.querySelector('#channelsAll');
  const controls = root.querySelector('.channels-pagination');
  const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
  const pageSize = 48;
  let channels = [];
  let category = 'Todos';
  let limit = pageSize;
  let query = '';
  const categoryOrder = ['Todos', 'Abertos e variedades', 'Esportes', 'Filmes e séries', 'Notícias', 'Infantil', 'Documentários', 'Música', 'Cultura e educação', 'Religiosos', 'Públicos', 'Compras'];

  function makeCard(channel) {
    const card = document.createElement('article');
    card.className = 'catalog-channel';
    card.setAttribute('role', 'listitem');
    const logo = document.createElement('span');
    logo.className = 'catalog-logo-art';
    logo.setAttribute('role', 'img');
    logo.setAttribute('aria-label', 'Logo de ' + channel.name);
    logo.style.backgroundImage = 'url("' + channel.sheet + '")';
    logo.style.backgroundSize = '800% ' + (channel.rows * 100) + '%';
    logo.style.backgroundPosition = (channel.x / 7 * 100) + '% ' + (channel.rows > 1 ? channel.y / (channel.rows - 1) * 100 : 0) + '%';
    const caption = document.createElement('h3');
    caption.textContent = channel.name;
    const group = document.createElement('p');
    group.textContent = channel.category;
    card.append(logo, caption, group);
    return card;
  }

  function matches() {
    return channels.filter(c => (category === 'Todos' || c.category === category) && (!query || c.searchText.includes(query)));
  }

  function render() {
    const found = matches();
    const visible = found.slice(0, limit);
    const fragment = document.createDocumentFragment();
    visible.forEach(c => fragment.append(makeCard(c)));
    if (!found.length) {
      const empty = document.createElement('p');
      empty.className = 'catalog-empty';
      empty.textContent = 'Não encontramos esse canal nesta seleção. Tente outro nome ou escolha “Todos”.';
      fragment.append(empty);
    }
    grid.replaceChildren(fragment);
    count.textContent = found.length ? visible.length + ' de ' + found.length + (found.length === 1 ? ' logo' : ' logos') + (category === 'Todos' ? ' no catálogo' : ' em ' + category.toLocaleLowerCase('pt-BR')) : 'Nenhum canal encontrado';
    controls.hidden = visible.length >= found.length;
    more.textContent = 'Mostrar mais ' + Math.min(pageSize, found.length - visible.length) + ' logos';
    all.textContent = 'Ver todas (' + found.length + ')';
    filters.querySelectorAll('button').forEach(button => {
      const active = button.dataset.category === category;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('active', active);
    });
  }

  function buildFilters() {
    const totals = new Map();
    channels.forEach(c => totals.set(c.category, (totals.get(c.category) || 0) + 1));
    categoryOrder.filter(c => c === 'Todos' || totals.has(c)).forEach(c => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.category = c;
      button.setAttribute('aria-pressed', String(c === 'Todos'));
      button.append(document.createTextNode(c));
      const amount = document.createElement('span');
      amount.textContent = String(c === 'Todos' ? channels.length : totals.get(c));
      amount.setAttribute('aria-hidden', 'true');
      button.append(amount);
      button.addEventListener('click', () => { category = c; limit = pageSize; render(); });
      filters.append(button);
    });
  }

  search.addEventListener('input', () => { query = normalize(search.value.trim()); limit = pageSize; render(); });
  more.addEventListener('click', () => {
    const previouslyVisible = grid.children.length;
    limit += pageSize;
    render();
    const firstNewLogo = grid.children[previouslyVisible];
    if (firstNewLogo) { firstNewLogo.tabIndex = -1; firstNewLogo.focus({ preventScroll: true }); }
  });
  all.addEventListener('click', () => { limit = channels.length; render(); grid.tabIndex = -1; grid.focus({ preventScroll: true }); });

  fetch('assets/channels/catalog.json', { credentials: 'omit' })
    .then(response => { if (!response.ok) throw new Error('catalog'); return response.json(); })
    .then(data => {
      if (!Array.isArray(data) || !data.length) throw new Error('empty catalog');
      channels = data.filter(c => c && typeof c.name === 'string' && typeof c.id === 'string' && typeof c.category === 'string' && /^assets\/channels\/channel-sheet-\d+\.webp$/.test(c.sheet) && Number.isInteger(c.x) && c.x >= 0 && c.x < 8 && Number.isInteger(c.y) && c.y >= 0 && c.y < c.rows && Number.isInteger(c.rows) && c.rows > 0 && c.rows <= 10).map(c => ({ ...c, searchText: normalize([c.name, ...(Array.isArray(c.aliases) ? c.aliases : [])].join(' ')) }));
      if (!channels.length) throw new Error('invalid catalog');
      buildFilters();
      render();
      root.querySelector('.channels-tools').hidden = false;
      root.querySelector('.channels-total').textContent = channels.length + ' logos para explorar';
      root.dataset.loaded = 'true';
    })
    .catch(() => {
      count.textContent = 'Não foi possível carregar o catálogo completo. As logos em destaque continuam disponíveis.';
      root.dataset.loaded = 'error';
    });
})();
