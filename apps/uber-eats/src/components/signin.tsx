import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';

import React from 'react';

export default function Login() {
  const Google = () => {
    window.open(`http://localhost:3001/api/v1/auth-service/auth/google`);
  }
  return (
    <main className="h-screen w-full banner">
    <div className="flex flex-col justify-center items-center pt-10">
        <div></div>
        <form className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-6">
                <input type="email" placeholder="Email" name="email" className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none glass transition duration-300 border border-gray-300 focus:shadow-xl" value="" />
                <input type="password" placeholder="Password" name="password" className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none glass transition duration-300 border border-gray-300 focus:shadow-xl" value="" />
            </div>
            <button className="w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 hover:bg-primary-dark poppins">Sign In</button>
            <Link to="/signup"><p className="text-base text-primary text-center my-6 hover:underline">Need an account ?</p></Link>
            <div className="border-t border-gray-200 mt-6" onClick={() => Google()}>
                <p className="text-center text-gray-400 py-4">OR</p>
                <div className="flex items-center space-x-3 justify-center border border-gray-300 rounded-lg w-full py-3 cursor-pointer hover:bg-gray-100"><span className="poppins">Sign In With Google</span></div>
            </div>
        </form>
    </div>
</main>
  )
}