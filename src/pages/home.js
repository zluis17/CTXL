import React from 'react';
import logoFacebook from "../img/facebook-512.webp";
import logoGoogle from "../img/google_logo-google_icongoogle-512.webp";
import logoTwitter from "../img/1690643591twitter-x-logo-png.webp";
import logoInstagram from "../img/instagram-logo-instagram-icon-transparent-free-png.webp";

function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-3xl font-bold text-purple-500">App Name</h2>
        </div>
        <nav className="flex flex-col p-6 space-y-2">
          <a
            href="#home"
            className="p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Home
          </a>
          <a
            href="#profile"
            className="p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Profile
          </a>
          <a
            href="#settings"
            className="p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Settings
          </a>
          <a
            href="#logout"
            className="p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Logout
          </a>
        </nav>
        {/* Social Media Icons */}
        <div className="flex justify-center p-6 space-x-4 mt-auto">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300"
          >
            <img src={logoFacebook} alt="Facebook" className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300"
          >
            <img src={logoInstagram} alt="Instagram" className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300"
          >
            <img src={logoTwitter} alt="Twitter" className="w-6 h-6" />
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300"
          >
            <img src={logoGoogle} alt="Google" className="w-6 h-6" />
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-8">Welcome to the Dashboard</h1>
        <p className="text-lg">
          This is your main dashboard. Here you can navigate through the application using the sidebar.
        </p>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black text-white p-4 flex flex-col items-center">
        <div className="flex justify-between w-full max-w-6xl mb-2">
          <nav className="flex space-x-4">
            <a href="#about" className="hover:text-purple-500">About Us</a>
            <a href="#services" className="hover:text-purple-500">Services</a>
            <a href="#contact" className="hover:text-purple-500">Contact</a>
            <a href="#privacy" className="hover:text-purple-500">Privacy Policy</a>
          </nav>
        </div>
        <p className="text-center text-sm">
          © 2024 Your Company. All rights reserved. This application is designed to provide the best user experience and facilitate navigation through our services. If you have any questions, feel free to contact us!
        </p>
      </footer>
    </div>
  );
}

export default Home;