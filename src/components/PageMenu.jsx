import React, { useState, useEffect } from 'react';

const PageMenu = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('all'); // Default to 'all' items
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const url =
          category === 'all'
            ? 'http://localhost:3000/api/items'
            : `http://localhost:3000/api/items/category/${category}`;
        const response = await fetch(url);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `Failed to fetch items for category: ${category}`);
        }

        const data = await response.json();
        setItems(data);
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [category]);

  return (
    <div className="min-h-screen bg-customHue-darker text-customHue-lightest font-sans">
      {/* Navigation */}
      <nav className="bg-customHue-dark py-4 px-6 flex justify-center gap-4 rounded-lg mx-6">
        {['Semua Menu', 'Nasi', 'Minuman', 'Non-Nasi', 'Snack'].map((cat, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCategory(cat.toLowerCase());
              setError(null);
            }}
            className={`px-4 py-2 text-sm font-medium rounded-full transition duration-200 ${
              category === cat.toLowerCase()
                ? 'bg-customHue-lighter text-customHue-darkest'
                : 'bg-customHue-light text-customHue-lightest hover:bg-customHue-lighter hover:text-customHue-dark'
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Content Section */}
      <main className="p-6">
        {/* Loading State */}
        {loading && (
          <div className="text-center text-customHue-light">Loading...</div>
        )}

        {/* Error Message */}
        {error && (
          <div className="text-center text-red-500 mb-4">{error}</div>
        )}

        {/* No Items State */}
        {items.length === 0 && !error && !loading && (
          <div className="text-center text-customHue-light">
            Tidak ada item untuk kategori "{category}".
          </div>
        )}

        {/* Items Grid */}
        {items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-customHue-lightest rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg"
              >
                <div className="p-4 text-center">
                  <img
                    src={item.link_foto}
                    alt={item.name}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h2 className="text-lg font-semibold text-customHue-darker">
                    {item.name}
                  </h2>
                  <p className="text-sm text-customHue-dark">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer Button */}
      <footer className="flex justify-center py-6">
        <button className="px-8 py-3 bg-customHue-light text-customHue-darker font-bold rounded-full shadow-md hover:bg-customHue-lighter transition duration-200">
          Recommend me!
        </button>
      </footer>
    </div>
  );
};

export default PageMenu;