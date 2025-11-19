// Main JavaScript file
// This will be used for database integration and dynamic property loading

// Placeholder for fetching properties from database
async function loadProperties() {
  // TODO: Replace with actual API call
  // const response = await fetch('/api/properties');
  // const properties = await response.json();
  // renderProperties(properties);
}

// Placeholder for rendering properties
function renderProperties(properties) {
  const grid = document.getElementById('properties-grid');
  if (!grid) return;
  
  // Clear existing properties
  grid.innerHTML = '';
  
  // Render each property
  properties.forEach(property => {
    const card = createPropertyCard(property);
    grid.appendChild(card);
  });
}

// Create property card element
function createPropertyCard(property) {
  const article = document.createElement('article');
  article.className = 'property-card';
  
  article.innerHTML = `
    <img src="${property.image}" alt="${property.title}" class="property-image" />
    <div class="property-body">
      <div class="property-header">
        <h3 class="property-title">${property.title}</h3>
        <div class="property-price">${property.price}</div>
      </div>
      <div class="property-location">${property.location}</div>
      <div class="property-features">
        <span class="feature-tag">${property.bedrooms} Bed</span>
        <span class="feature-tag">${property.bathrooms} Bath</span>
        <span class="feature-tag">${property.size} m²</span>
      </div>
    </div>
  `;
  
  return article;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Load properties when page is ready
  // loadProperties();

  initFilterToggles();
  initFilterModeButtons();
  initMapExpanders();
});

function initFilterToggles() {
  const toggles = document.querySelectorAll('.filters-toggle');
  if (!toggles.length) return;

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const filters = toggle.closest('.filters');
      if (!filters) return;

      const isExpanded = filters.getAttribute('aria-expanded') === 'true';
      const nextState = (!isExpanded).toString();
      filters.setAttribute('aria-expanded', nextState);
      toggle.setAttribute('aria-expanded', nextState);

      const labelEl = toggle.querySelector('.filters-toggle-label');
      const showLabel = toggle.getAttribute('data-label-show') || 'Show Filters';
      const hideLabel = toggle.getAttribute('data-label-hide') || 'Hide Filters';
      const target = labelEl || toggle;
      target.textContent = nextState === 'true' ? hideLabel : showLabel;
    });
  });
}

function initMapExpanders() {
  const mapCards = document.querySelectorAll('.map-card');
  if (!mapCards.length) return;

  mapCards.forEach(card => {
    const button = card.querySelector('.map-expand-btn');
    if (!button) return;

    button.addEventListener('click', () => {
      const isExpanded = card.getAttribute('data-expanded') === 'true';
      const nextState = (!isExpanded).toString();

      card.setAttribute('data-expanded', nextState);
      button.setAttribute('aria-expanded', nextState);
      button.textContent = nextState === 'true' ? 'Collapse Map' : 'Expand Map';
    });
  });
}

function initFilterModeButtons() {
  const groups = document.querySelectorAll('.filters-mode');
  if (!groups.length) return;

  groups.forEach(group => {
    const buttons = Array.from(group.querySelectorAll('.mode-button'));
    if (!buttons.length) return;

    const indicator = group.querySelector('.mode-indicator');
    group.style.setProperty('--mode-count', buttons.length.toString());

    const setActiveButton = targetButton => {
      buttons.forEach((btn, index) => {
        const isActive = btn === targetButton;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');

        if (isActive) {
          group.style.setProperty('--active-index', index.toString());
          group.dataset.activeMode = btn.dataset.mode || `mode-${index}`;
        }
      });

      if (indicator) {
        indicator.setAttribute('data-active', group.dataset.activeMode || '');
      }
    };

    const initialActive = buttons.find(btn => btn.classList.contains('is-active')) || buttons[0];
    setActiveButton(initialActive);

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        if (button.classList.contains('is-active')) return;
        setActiveButton(button);
      });
    });
  });
}

