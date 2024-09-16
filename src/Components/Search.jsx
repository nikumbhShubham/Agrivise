import React, { useState } from 'react';
import { FaSearch, FaCaretDown } from 'react-icons/fa';

const SearchPage = () => {
  // State for search form
  const [commodity, setCommodity] = useState('');
  const [date, setDate] = useState('');
  const [state, setState] = useState('');

  // State for modal visibility
  const [showModal, setShowModal] = useState(false);

  // Data to be shown in the modal (could be dynamically fetched)
  const [searchResult, setSearchResult] = useState({
    commodityName: 'Rice',
    date: '12-08-2024',
    state: 'Bihar',
    price: '42.233',
  });

  // Handle Search button click
  const handleSearch = () => {
    // Open modal and show search result
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-green-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="logo.png" alt="AgriVise" className="h-10" />
          <span className="text-3xl font-bold text-green-600">AgriVise</span>
        </div>
        <ul className="flex space-x-8 text-gray-600 font-medium">
          <li className="hover:text-green-500 cursor-pointer">Home</li>
          <li className="hover:text-green-500 cursor-pointer">About</li>
          <li className="hover:text-green-500 cursor-pointer">Commodities</li>
          <li className="hover:text-green-500 cursor-pointer">Features</li>
        </ul>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold transition duration-300">
            Go To Marketplace
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-100 to-green-200 text-center py-20">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Search Commodity Prices</h1>
        <h2 className="text-3xl font-bold text-purple-700 mb-6">With AgriVise.</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Easily search and filter commodity prices across different states, dates, and commodities.
          Make informed decisions by accessing accurate and up-to-date information on essential agri-horticultural products.
        </p>
      </div>

      {/* Search Form Section */}
      <div className="py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Select Commodity */}
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Select Commodity</label>
              <div className="relative">
                <select
                  value={commodity}
                  onChange={(e) => setCommodity(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none appearance-none"
                >
                  <option value="">Choose a commodity...</option>
                  <option value="Rice">Rice</option>
                  <option value="Wheat">Wheat</option>
                  <option value="Oil">Oil</option>
                </select>
                <FaCaretDown className="absolute top-4 right-4 text-gray-400" />
              </div>
            </div>

            {/* Select Date */}
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Select Date</label>
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Select State */}
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Select State</label>
              <div className="relative">
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none appearance-none"
                >
                  <option value="">Select State</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                </select>
                <FaCaretDown className="absolute top-4 right-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-10 text-center">
            <button
              onClick={handleSearch}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-10 py-3 rounded-full text-lg shadow-lg flex items-center justify-center gap-2 mx-auto transition duration-300"
            >
              <FaSearch className="text-lg" /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-green-100 p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Search Results</h2>
            <div className="text-left">
              <p className="text-lg"><strong>Commodity Name:</strong> {searchResult.commodityName}</p>
              <p className="text-lg"><strong>Date:</strong> {searchResult.date}</p>
              <p className="text-lg"><strong>State:</strong> {searchResult.state}</p>
              <p className="text-lg"><strong>Price (INR/kg):</strong> {searchResult.price}</p>
            </div>
            <div className="flex justify-around mt-6">
              <button
                onClick={handleCloseModal}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold transition duration-300"
              >
                Reset Filters
              </button>
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-semibold transition duration-300">
                Download Data
              </button>
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-semibold transition duration-300">
                View Charts
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 py-8 mt-16 text-center">
        <p className="text-sm">© 2024 AgriVise. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SearchPage;
