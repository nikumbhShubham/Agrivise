import React from 'react';
import signup from "../assets/signup.png"
import { useNavigate } from 'react-router-dom';


const SignupPage = () => {
    const navigate=useNavigate();
    const handleSignup=()=>{
        navigate('/dashboard');
    }


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
            {/* Navbar */}
            <nav className="w-full px-8 py-4 bg-white shadow-sm flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img src="logo.png" alt="AgriVise Logo" className="h-8" />
                    <h1 className="text-2xl font-bold text-green-600">AgriVise</h1>
                </div>
                <div className="space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Commodities</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Additional Features</a>
                </div>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">Go To Marketplace</button>
            </nav>

            <div className="flex items-center justify-center flex-wrap w-full max-w-7xl mx-auto mt-12">
                {/* Form Section */}
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Get Started Now</h2>

                    <form className="space-y-6">
                        <div>
                            <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                                placeholder="Name"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                                placeholder="Email address"
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                                placeholder="Password"
                            />
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-green-500 focus:ring-green-500 rounded"
                            />
                            <label className="ml-2 text-sm text-gray-700">
                                I agree to the <a href="#" className="text-green-600 underline">terms & policy</a>
                            </label>
                        </div>

                        <button 
                        onClick={handleSignup}
                            // type="submit"
                            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                        >
                            Signup
                        </button>
                    </form>

                    <div className="mt-4 text-center text-sm">
                        <p>Have an account? <a href="#" className="text-green-600 font-medium">Sign In</a></p>
                    </div>
                </div>

                {/* Illustration Section */}
                <div className="hidden lg:block lg:w-1/2">
                    
                    <h3 className="text-3xl font-semibold text-gray-700 mt-4 text-center">Get Predictions and sell data faster,</h3>
                    <h3 className="text-3xl font-semibold text-green-600 text-center">With AgriVise.</h3>
                    <div className="flex items-center justify-center">
                        <img src={signup} alt="Fresh Vegetables" className="w-96 h-auto" />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="w-full flex justify-center items-center mt-8">
                <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">
                        Sign in with Google
                    </button>
                    <button className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">
                        Sign in with Apple
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
