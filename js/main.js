// Main JavaScript file
function openModal(title) {
  const modal = document.getElementById('modal');
  if (modal) {
    const panel = modal.querySelector('.panel');
    if (panel && title) {
      panel.innerHTML = `
        <h2>${title}</h2>
        <p>Property details will be displayed here.</p>
        <button class="btn" onclick="closeModal()">Close</button>
      `;
    }
    modal.classList.add('open');
  }
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.classList.remove('open');
  }
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
});


