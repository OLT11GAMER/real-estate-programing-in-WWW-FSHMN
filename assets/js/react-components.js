// React Components for Property Filter
// This demonstrates React integration in a vanilla HTML/CSS/JS project

const { useState, useEffect } = React;

// Property data - simulating data that might come from an API
const initialProperties = [
  {
    id: 1,
    name: "Rezidenca Arbëria",
    price: 69000,
    location: "Prishtinë",
    type: "apartment",
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    image: "assets/img/popular1.jpg"
  },
  {
    id: 2,
    name: "Kompleksi i Ri - Emshir",
    price: 85000,
    location: "Prishtinë",
    type: "apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: 95,
    image: "assets/img/popular2.jpg"
  },
  {
    id: 3,
    name: "Bregu i Diellit",
    price: 120000,
    location: "Prishtinë",
    type: "villa",
    bedrooms: 4,
    bathrooms: 3,
    area: 150,
    image: "assets/img/popular3.jpg"
  },
  {
    id: 4,
    name: "Vila Premium",
    price: 150000,
    location: "Prishtinë",
    type: "villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 200,
    image: "assets/img/home.jpg"
  },
  {
    id: 5,
    name: "Apartament Modern",
    price: 55000,
    location: "Prishtinë",
    type: "apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    image: "assets/img/popular1.jpg"
  }
];

// PropertyCard Component - Child component receiving props
function PropertyCard({ property, onSelect }) {
  // Destructuring props
  const { name, price, location, type, bedrooms, bathrooms, area, image } = property;
  
  return (
    <article className="react-property-card" onClick={() => onSelect(property)}>
      <figure>
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
      <div className="react-property-data">
        <h3 className="react-property-price">€{price.toLocaleString()}</h3>
        <h4 className="react-property-title">{name}</h4>
        <p className="react-property-location">{location}</p>
        <div className="react-property-features">
          <span>{bedrooms} Dhoma</span>
          <span>{bathrooms} Banjo</span>
          <span>{area}m²</span>
        </div>
        <span className="react-property-type">{type}</span>
      </div>
    </article>
  );
}

// PropertyFilter Component - Main component with state and hooks
function PropertyFilter() {
  // useState hook for component state
  const [properties, setProperties] = useState(initialProperties);
  const [filteredProperties, setFilteredProperties] = useState(initialProperties);
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState(200000);
  const [propertyType, setPropertyType] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect hook for side effects (data fetching simulation)
  useEffect(() => {
    // Simulate fetching data on component mount
    setIsLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      console.log('Properties loaded');
    }, 500);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []); // Empty dependency array = run once on mount

  // useEffect to filter properties when filters change
  useEffect(() => {
    const filtered = properties.filter(property => {
      const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           property.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = property.price <= maxPrice;
      const matchesType = propertyType === 'all' || property.type === propertyType;
      
      return matchesSearch && matchesPrice && matchesType;
    });
    
    setFilteredProperties(filtered);
  }, [searchTerm, maxPrice, propertyType, properties]);

  // Event handlers
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePriceChange = (e) => {
    setMaxPrice(Number(e.target.value));
  };

  const handleTypeChange = (e) => {
    setPropertyType(e.target.value);
  };

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
    // Scroll to property details
    setTimeout(() => {
      const element = document.getElementById('selected-property-details');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form submitted:', { searchTerm, maxPrice, propertyType });
    // In a real app, this would send data to a server
  };

  const handleReset = () => {
    setSearchTerm('');
    setMaxPrice(200000);
    setPropertyType('all');
    setSelectedProperty(null);
  };

  // Conditional rendering
  return (
    <div className="react-filter-container">
      {/* Controlled form component */}
      <form onSubmit={handleFormSubmit} className="react-filter-form">
        <div className="react-form-group">
          <label htmlFor="search">Kërko:</label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Emri ose lokacioni..."
            className="react-input"
          />
        </div>

        <div className="react-form-group">
          <label htmlFor="price">Çmimi maksimal: €{maxPrice.toLocaleString()}</label>
          <input
            type="range"
            id="price"
            min="30000"
            max="200000"
            step="5000"
            value={maxPrice}
            onChange={handlePriceChange}
            className="react-range"
          />
        </div>

        <div className="react-form-group">
          <label htmlFor="type">Lloji:</label>
          <select
            id="type"
            value={propertyType}
            onChange={handleTypeChange}
            className="react-select"
          >
            <option value="all">Të gjitha</option>
            <option value="apartment">Apartament</option>
            <option value="villa">Vila</option>
            <option value="house">Shtëpi</option>
          </select>
        </div>

        <div className="react-form-actions">
          <button type="submit" className="button">Kërko</button>
          <button type="button" onClick={handleReset} className="button button-secondary">
            Reset
          </button>
        </div>
      </form>

      {/* Conditional rendering based on loading state */}
      {isLoading ? (
        <p className="react-loading">Duke ngarkuar...</p>
      ) : (
        <>
          <div className="react-results-count">
            U gjetën {filteredProperties.length} pron{filteredProperties.length !== 1 ? 'a' : 'ë'}
          </div>

          {/* Rendering list using map() with unique keys */}
          <div className="react-properties-grid">
            {filteredProperties.length > 0 ? (
              filteredProperties.map(property => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onSelect={handlePropertySelect}
                />
              ))
            ) : (
              <p className="react-no-results">Nuk u gjetën rezultate.</p>
            )}
          </div>

          {/* Conditional rendering for selected property */}
          {selectedProperty && (
            <div id="selected-property-details" className="react-selected-property">
              <h3>Prona e Zgjedhur:</h3>
              <div className="react-selected-details">
                <p><strong>Emri:</strong> {selectedProperty.name}</p>
                <p><strong>Çmimi:</strong> €{selectedProperty.price.toLocaleString()}</p>
                <p><strong>Lokacioni:</strong> {selectedProperty.location}</p>
                <p><strong>Dhoma:</strong> {selectedProperty.bedrooms}</p>
                <p><strong>Banjo:</strong> {selectedProperty.bathrooms}</p>
                <p><strong>Sipërfaqja:</strong> {selectedProperty.area}m²</p>
              </div>
              <button onClick={() => setSelectedProperty(null)} className="button">
                Mbyll
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// Mount React PropertyFilter component if root exists
const reactRoot = document.getElementById('react-property-filter');
if (reactRoot) {
  ReactDOM.createRoot(reactRoot).render(<PropertyFilter />);
}

