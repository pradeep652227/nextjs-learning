import React from 'react';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-5xl font-extrabold text-white animate-bounce">
                    Welcome to Our Application
                </h1>
                <p className="mt-4 text-lg text-white animate-fade-in">
                    Your one-stop solution for all your needs.
                </p>
            </div>
            <div className="mt-10 flex space-x-4">
                <a href="/auth/signin"
                    className="transform transition duration-500 hover:scale-110 bg-indigo-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign In
                </a>
                <a href="/auth/signup"
                    className="transform transition duration-500 hover:scale-110 bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Sign Up
                </a>
            </div>
        </div>
    );
}