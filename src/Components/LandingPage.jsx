import React from "react";
import { Link } from 'react-router-dom';
// import './index.css'; // Assuming this is where your tailwind is compiled
import bgImg from "../assets/bgImg.jpeg"
import rice from "../assets/rice.png"
import wheat from "../assets/wheat.png"
import oil from "../assets/oil.png"
import milk from "../assets/milk.png"
const App = () => {
  return (
    <div className="App">
      {/* Top Header */}
      <header className="bg-gray-100 py-2">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
          <p className="text-sm">Welcome to AgriVise</p>
          <div className="space-x-4">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            {/* Add other icons as needed */}
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-600">AgriVise</h1>
          <ul className="flex space-x-8">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
            <li className="hover:text-green-600 cursor-pointer">About</li>
            <li className="hover:text-green-600 cursor-pointer">Commodities</li>
            <li className="hover:text-green-600 cursor-pointer">Check Prices</li>
          </ul>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
            Go To Marketplace
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-white" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            PREDICTING THE FUTURE OF AGRI-HORTICULTURAL COMMODITY PRICES WITH AI-ML
          </h1>
          <p className="max-w-xl mx-auto mb-6">
            The Department of Consumer Affairs relies on accurate price predictions to guide market interventions...
          </p>
          <div className="flex space-x-4 justify-center">
            {/* <button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600">Login</button>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600">Register</button> */}
            <Link to="/search" className="bg-green-400 text-white py-2 px-4 rounded-md mr-4">
              Search Prices
            </Link>
            <Link to="/signup" className="bg-yellow-500 text-white py-2 px-4 rounded-md mr-4">
              Signup
            </Link>
          </div>
        </div>
      </section>

      {/* Commodities Section */}
      <section className="my-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 shadow-lg rounded-md text-center">
            <img src={rice} alt="Rice" className="mb-4 w-full h-32 object-cover rounded-md" />
            <h4 className="font-bold text-lg">Rice</h4>
            <p>Yesterday: ₹40.57</p>
            <p>Today: ₹41.09</p>
            <p>Tomorrow: ₹40.88</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-md text-center">
            <img src={wheat} alt="Wheat" className="mb-4 w-full h-32 object-cover rounded-md" />
            <h4 className="font-bold text-lg">Wheat</h4>
            <p>Yesterday: ₹40.57</p>
            <p>Today: ₹41.09</p>
            <p>Tomorrow: ₹40.88</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-md text-center">
            <img src={oil} alt="Wheat" className="mb-4 w-full h-32 object-cover rounded-md" />
            <h4 className="font-bold text-lg">oil</h4>
            <p>Yesterday: ₹40.57</p>
            <p>Today: ₹41.09</p>
            <p>Tomorrow: ₹40.88</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-md text-center">
            <img src={milk} alt="Wheat" className="mb-4 w-full h-32 object-cover rounded-md" />
            <h4 className="font-bold text-lg">milk</h4>
            <p>Yesterday: ₹40.57</p>
            <p>Today: ₹41.09</p>
            <p>Tomorrow: ₹40.88</p>
          </div>
          {/* Add other commodity cards */}
        </div>
      </section>

      {/* All India Average Prices */}
      {/* All India Average Prices Section */}
      <section className="bg-gray-100 py-10">
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold">All India Average Price(₹/Qtl.)</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Grains and Pulses Card */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold text-center mb-4">Grains and Pulses</h3>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span>Rice</span>
                <span>₹3881.37</span>
              </p>
              <p className="flex justify-between">
                <span>Wheat</span>
                <span>₹2782.32</span>
              </p>
              <p className="flex justify-between">
                <span>Atta</span>
                <span>₹3186.43</span>
              </p>
              <p className="flex justify-between">
                <span>Gram Dal</span>
                <span>₹8290.71</span>
              </p>
              <p className="flex justify-between">
                <span>Tur/Arhar Dal</span>
                <span>₹15523.75</span>
              </p>
              <p className="flex justify-between">
                <span>Urad Dal</span>
                <span>₹11603.72</span>
              </p>
              <p className="flex justify-between">
                <span>Moong Dal</span>
                <span>₹10679.08</span>
              </p>
              <p className="flex justify-between">
                <span>Masoor Dal</span>
                <span>₹8151.05</span>
              </p>
            </div>
          </div>

          {/* Oils Card */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold text-center mb-4">Oils</h3>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span>Groundnut Oil</span>
                <span>₹17280.04</span>
              </p>
              <p className="flex justify-between">
                <span>Mustard Oil</span>
                <span>₹13186.36</span>
              </p>
              <p className="flex justify-between">
                <span>Vanaspati</span>
                <span>₹11347.68</span>
              </p>
              <p className="flex justify-between">
                <span>Soya Oil</span>
                <span>₹11013.62</span>
              </p>
              <p className="flex justify-between">
                <span>Sunflower Oil</span>
                <span>₹11198.67</span>
              </p>
              <p className="flex justify-between">
                <span>Palm Oil</span>
                <span>₹9264.71</span>
              </p>
            </div>
          </div>

          {/* Vegetables Card */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold text-center mb-4">Vegetables</h3>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span>Potato</span>
                <span>₹3031.76</span>
              </p>
              <p className="flex justify-between">
                <span>Onion</span>
                <span>₹3767.23</span>
              </p>
              <p className="flex justify-between">
                <span>Tomato</span>
                <span>₹3921.83</span>
              </p>
            </div>
          </div>

          {/* Others Card */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold text-center mb-4">Others</h3>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span>Sugar</span>
                <span>₹4167.12</span>
              </p>
              <p className="flex justify-between">
                <span>Gur</span>
                <span>₹4781.98</span>
              </p>
              <p className="flex justify-between">
                <span>Milk</span>
                <span>₹5572.62</span>
              </p>
              <p className="flex justify-between">
                <span>Tea Loose</span>
                <span>₹23951.39</span>
              </p>
              <p className="flex justify-between">
                <span>Salt Packed</span>
                <span>₹1858.62</span>
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-green-500">AgriVise</h1>
          <p className="text-sm my-4">Predicting the Future of Agri-Horticultural Commodity Prices with AI-ML</p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-green-500">Contact</a>
            <a href="#" className="hover:text-green-500">FAQs</a>
            <a href="#" className="hover:text-green-500">Terms & Condition</a>
            <a href="#" className="hover:text-green-500">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
