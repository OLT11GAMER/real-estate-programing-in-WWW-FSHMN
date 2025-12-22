/* 
 * CLIENT-SERVER MODEL UNDERSTANDING:
 * This code runs on the CLIENT side (browser). When the user scrolls, the browser
 * (client) sends scroll events to our JavaScript code. The server doesn't process
 * these events - they are handled entirely in the browser. This demonstrates the
 * client-server separation: client handles UI interactions, server handles data
 * requests/responses via HTTP/HTTPS protocols.
 */

// Using const and arrow function (modern JS)
const scrollHeader = () => {
  const header = document.getElementById("header");
  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};
window.addEventListener("scroll", scrollHeader);

/* SWIPER POPULAR*/
var swiper = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPreview: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* VALUE ACCORDION */
const toggleItem = (item) => {
  const accordionContent = item.querySelector(".value__accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

const accordionItems = document.querySelectorAll(".value__accordion-item");
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".value__accordion-header");
  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");
    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});
/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (sectionId) {
      const navLink = document.querySelector(".nav__menu a[href*=" + sectionId + "]");
      if (navLink) {
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add("active-link");
    } else {
          navLink.classList.remove("active-link");
        }
      }
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*SHOW SCROLL UP */
function scrollUP() {
    const scrollUp = document.getElementById('scroll-up');
    if (!scrollUp) return;

    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUP);

const scrollUpButton = document.getElementById('scroll-up');
if (scrollUpButton) {
scrollUpButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
}


/* DARK LIGHT THEME */

const themeButton = document.getElementById('theme-button');
if (themeButton) {
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const toggleTheme = () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', document.body.classList.contains(darkTheme) ? 'dark' : 'light');
    localStorage.setItem('selected-icon', themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun');
};

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', toggleTheme);
}

/* 
 * MODERN JAVASCRIPT FEATURES DEMONSTRATION
 * This section showcases ES6+ features including:
 * - Template literals
 * - Destructuring
 * - Spread/rest operators
 * - Array methods (map, filter, reduce)
 * - Fetch API with async/await
 * - Arrow functions
 */

// Template literals for string interpolation
const createPropertyCard = (property) => {
  const { name, price, location } = property; // Destructuring
  return `
    <div class="property-card">
      <h3>${name}</h3>
      <p>Price: €${price.toLocaleString()}</p>
      <p>Location: ${location}</p>
    </div>
  `;
};

// Array methods: map, filter, reduce
const properties = [
  { name: "Rezidenca Arbëria", price: 69000, location: "Prishtinë", type: "apartment" },
  { name: "Kompleksi i Ri", price: 85000, location: "Prishtinë", type: "apartment" },
  { name: "Bregu i Diellit", price: 120000, location: "Prishtinë", type: "villa" }
];

// Using map() to transform data
const propertyNames = properties.map(prop => prop.name);
console.log('Property names:', propertyNames);

// Using filter() to find specific properties
const affordableProperties = properties.filter(prop => prop.price < 100000);
console.log('Affordable properties:', affordableProperties);

// Using reduce() to calculate total value
const totalValue = properties.reduce((sum, prop) => sum + prop.price, 0);
console.log(`Total value: €${totalValue.toLocaleString()}`);

// Spread operator example
const moreProperties = [
  ...properties, // Spread existing properties
  { name: "New Property", price: 95000, location: "Prishtinë", type: "house" }
];

// Rest operator in function
const calculateAverage = (...prices) => {
  const sum = prices.reduce((acc, price) => acc + price, 0);
  return sum / prices.length;
};

const avgPrice = calculateAverage(69000, 85000, 120000, 95000);
console.log(`Average price: €${Math.round(avgPrice).toLocaleString()}`);

// Fetch API with async/await for client-server communication
// This demonstrates HTTP requests from client to server
const fetchProperties = async () => {
  try {
    // Check if we're running from file:// protocol (local file)
    const isLocalFile = window.location.protocol === 'file:';
    
    if (isLocalFile) {
      // Skip fetch for local files - use localStorage or default data
      console.log('Running from local file, using default properties');
      const defaultProperties = [
        { name: "Rezidenca Arbëria", price: 69000, location: "Prishtinë", type: "apartment" },
        { name: "Kompleksi i Ri", price: 85000, location: "Prishtinë", type: "apartment" },
        { name: "Bregu i Diellit", price: 120000, location: "Prishtinë", type: "villa" }
      ];
      localStorage.setItem('properties', JSON.stringify(defaultProperties));
      return defaultProperties;
    }
    
    // In a real application, this would make an HTTP request to a server
    // The server would process the request and send back a response
    const response = await fetch('/api/properties.json'); // GET request to server
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Server sends JSON response, client parses it
    const data = await response.json();
    console.log('Properties from server:', data);
    
    // Store in localStorage (client-side storage)
    localStorage.setItem('properties', JSON.stringify(data));
    
    return data;
  } catch (error) {
    console.warn('Error fetching properties:', error);
    // Fallback: use local data if server request fails
    const localData = JSON.parse(localStorage.getItem('properties') || '[]');
    if (localData.length === 0) {
      // Use default data if nothing in localStorage
      const defaultProperties = [
        { name: "Rezidenca Arbëria", price: 69000, location: "Prishtinë", type: "apartment" },
        { name: "Kompleksi i Ri", price: 85000, location: "Prishtinë", type: "apartment" },
        { name: "Bregu i Diellit", price: 120000, location: "Prishtinë", type: "villa" }
      ];
      return defaultProperties;
    }
    return localData;
  }
};

// Form validation with modern JS features
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission (page reload)
    
    // Destructuring form data
    const formData = new FormData(contactForm);
    const formObject = Object.fromEntries(formData);
    
    // Client-side validation before sending to server
    const { fullname, email, message } = formObject;
    
    if (!fullname || !email || !message) {
      alert('Ju lutem plotësoni të gjitha fushat e detyrueshme.');
      return;
    }
    
    // In a real application, this would send a POST request to the server
    // The server would process the form data and send back a response
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject) // Send data to server
      });
      
      if (response.ok) {
        const result = await response.json();
        alert(`Faleminderit ${fullname}! Mesazhi juaj u dërgua me sukses.`);
        contactForm.reset();
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback: store in localStorage if server unavailable
      const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
      submissions.push({ ...formObject, timestamp: new Date().toISOString() });
      localStorage.setItem('formSubmissions', JSON.stringify(submissions));
      alert('Mesazhi juaj u ruajt lokal. Do të kontaktoheni së shpejti.');
    }
  });
}

// Using setTimeout for animations (demonstrates timers)
const animateCounter = (element, target, duration = 2000) => {
  let current = 0;
  const increment = target / (duration / 16); // 60fps
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = `${Math.round(target).toLocaleString()}+`;
      clearInterval(timer);
    } else {
      element.textContent = `${Math.round(current).toLocaleString()}+`;
    }
  }, 16);
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Fetch properties from server (or localStorage fallback)
  fetchProperties();
  
  // Animate counters
  const counters = document.querySelectorAll('.home__value-number');
  counters.forEach(counter => {
    const text = counter.textContent;
    const number = parseInt(text.replace(/\D/g, ''));
    if (number) {
      counter.textContent = '0+';
      setTimeout(() => animateCounter(counter, number), 500);
    }
  });
});

// Using Promise with .then()/.catch() as alternative to async/await
const loadUserPreferences = () => {
  return new Promise((resolve, reject) => {
    const preferences = localStorage.getItem('userPreferences');
    if (preferences) {
      resolve(JSON.parse(preferences));
    } else {
      reject(new Error('No preferences found'));
    }
  });
};

loadUserPreferences()
  .then(prefs => {
    console.log('User preferences loaded:', prefs);
  })
  .catch(error => {
    console.log('Using default preferences');
  });

// 3D View Interactive Rotation
const view3dBox = document.getElementById('view3d');
if (view3dBox) {
  let isDragging = false;
  let startX, startY;
  let currentRotationX = 10;
  let currentRotationY = 0;

  view3dBox.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    view3dBox.style.animationPlayState = 'paused';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    
    currentRotationY += deltaX * 0.5;
    currentRotationX = Math.max(-30, Math.min(30, currentRotationX - deltaY * 0.1));
    
    view3dBox.style.transform = `rotateY(${currentRotationY}deg) rotateX(${currentRotationX}deg)`;
    
    startX = e.clientX;
    startY = e.clientY;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch support for mobile
  view3dBox.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    view3dBox.style.animationPlayState = 'paused';
  });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const deltaX = e.touches[0].clientX - startX;
    const deltaY = e.touches[0].clientY - startY;
    
    currentRotationY += deltaX * 0.5;
    currentRotationX = Math.max(-30, Math.min(30, currentRotationX - deltaY * 0.1));
    
    view3dBox.style.transform = `rotateY(${currentRotationY}deg) rotateX(${currentRotationX}deg)`;
    
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
  });
}

