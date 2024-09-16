import React from 'react';
import bufferGraph from "../assets/bufferGraph.jpeg";
import agrilens from "../assets/agrilens.png"

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-green-100 flex">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gradient-to-b from-green-500 to-green-200 text-white py-8 px-4 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">AgriVise</h1>
          <div className="flex justify-center space-x-4 mb-8">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
          </div>
          <p className="text-sm font-semibold">Welcome to AgriVise</p>
        </div>

        <nav className="space-y-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 transition text-white w-full py-3 rounded-lg text-left px-4 flex items-center shadow-md">
            <i className="fas fa-tachometer-alt mr-2"></i> Dashboard
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 transition text-white w-full py-3 rounded-lg text-left px-4 flex items-center shadow-md">
            <i className="fas fa-file-download mr-2"></i> Download Report
          </button>
          <button className="bg-white hover:bg-gray-100 transition text-gray-700 w-full py-3 rounded-lg text-left px-4 flex items-center shadow-md">
            <i className="fas fa-user mr-2"></i> Profile
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="w-4/5 bg-green-50">
        {/* Top Bar */}
        <header className="bg-gray-100 py-4 px-8 flex justify-between items-center shadow-sm">
          <h2 className="text-2xl font-semibold">Welcome to AgriVise</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-green-400"
            />
            <i className="fas fa-search text-gray-500"></i>
          </div>
        </header>

        <div className="flex">
          {/* Left Side: Buffer Stock Analysis and Stock History */}
          <main className="w-2/3 p-8">
            <div className="bg-white shadow-lg rounded-md p-6 mb-6">
              <h3 className="text-2xl font-bold mb-4">Buffer Stock Analysis</h3>
              <label htmlFor="commodity" className="block text-lg font-semibold mb-2">
                Select Commodity
              </label>
              <select
                id="commodity"
                className="mb-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-green-400"
              >
                <option>Potato</option>
                <option>Rice</option>
                <option>Wheat</option>
              </select>

              <div className="bg-gray-100 rounded-md p-4 mb-4">
                {/* Graph placeholder with new size (better alignment) */}
                <img
                  src={bufferGraph}
                  alt="Graph"
                  className="mx-auto rounded-lg shadow-md"
                />
              </div>

              <button className="bg-green-500 hover:bg-green-600 transition text-white py-2 px-6 rounded-md shadow-md">
                Release
              </button>
            </div>

            {/* Stock History with Tabular Data */}
            <div className="bg-white shadow-lg rounded-md p-6">
              <h4 className="text-lg font-bold mb-4">Stock History</h4>
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="border-b px-4 py-2 text-left text-gray-700">Year</th>
                    <th className="border-b px-4 py-2 text-left text-gray-700">Commodity</th>
                    <th className="border-b px-4 py-2 text-left text-gray-700">Stock</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100">
                    <td className="border-b px-4 py-2">2020</td>
                    <td className="border-b px-4 py-2">Potato</td>
                    <td className="border-b px-4 py-2">500 Tons</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="border-b px-4 py-2">2019</td>
                    <td className="border-b px-4 py-2">Rice</td>
                    <td className="border-b px-4 py-2">450 Tons</td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="border-b px-4 py-2">2018</td>
                    <td className="border-b px-4 py-2">Wheat</td>
                    <td className="border-b px-4 py-2">600 Tons</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>

          {/* Right Side: Agrilens and Agribot */}
          <aside className="w-1/3 p-8 flex flex-col space-y-8">
            {/* Agrilens with Image */}
            <div className="bg-white shadow-lg rounded-md p-6 text-center">
              <h4 className="text-xl font-bold mb-4">Agrilens</h4>
              <img
                src={agrilens}
                alt="Agrilens Image"
                className="mx-auto mb-4 rounded-lg shadow-sm"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 transition text-white py-2 px-6 rounded-md">
                Try Now
              </button>
            </div>

            {/* Agribot Section */}
            <div className="bg-white shadow-lg rounded-md p-6">
              <h4 className="text-lg font-bold mb-4">Agribot</h4>
              <div className="bg-gray-100 rounded-md p-4 mb-4">
                <p className="text-green-600 font-semibold mb-2">What are seasonal crops?</p>
                <p className="text-gray-600">
                  Seasonal crops are those crops whose life cycle is completed
                  in a single season. There are three cropping seasons in
                  India: Kharif, Rabi, and Zaid.
                </p>
              </div>
              <input
                type="text"
                placeholder="Message..."
                className="mt-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
              />
              <button className="bg-green-500 hover:bg-green-600 transition text-white py-2 px-6 mt-4 rounded-md w-full shadow-md">
                Ask Me Anything ➔
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
