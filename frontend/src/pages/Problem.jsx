import React from 'react'
import { motion } from 'framer-motion'
import imageSaleSign from '../assets/House-and-man.jpeg'
import Beng from '../assets/Bengaluru-house-data.jpeg'
import economicterms from '../assets/economic-term.jpeg'
import flowchart from '../assets/Flowchart.jpeg'
import handcoin from '../assets/hand-coins.jpeg'
import nn from '../assets/NN.jpeg'
import rlml from '../assets/RL-ML.jpeg'
// Make sure you have react-router-dom installed and configured for your routes
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Section: Address & Basic Legal Info */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Imperial College London</h2>
            <p className="text-sm">
              Exhibition Rd, South Kensington
              <br />
              London SW7 2BX, United Kingdom
            </p>
            <p className="mt-2 text-xs text-gray-600">
              © {new Date().getFullYear()} LeftMove. All rights reserved.
              <br />
              All information is provided for educational purposes and does not
              constitute legal or financial advice.
            </p>
          </div>

          {/* Right Section: Link to Contact */}
          <div>
            <Link
              to="/contact"
              className="inline-block px-4 py-2 text-sm bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Problem() {
  return (
    <div className="w-full">

      {/* Hero / Title Section */}
      <header
        className="relative flex items-center justify-center h-screen bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200')",
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Title and pitch text */}
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Real Estate Investing Made Simple
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Discover how machine learning can enable investors to make informed decisions with their real estate investments. Our aim is to minimise the risks involved and maximise returns.
          </motion.p>
        </div>
      </header>

      {/* Section 1: Current Challenges */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-gray-100"
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Challenges in Real Estate
            </h2>
            <p className="text-gray-700 mb-4">
            Investing in real estate can be overwhelming especially for beginners. Property prices, market volatility and complex regulations make this process extremely daunting especially for first time investors. People with little experience in this industry often lack the intuition and skills required to make returns on their investment (ROI).  It can be very easy to spend lots of time and money to develop these skills but this comes with a substantial risk. Understanding these challenges is the first step in making informed and reliable decisions
            
            </p>

          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src={imageSaleSign}
              alt="Challenges in Real Estate"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Section 2: Multiple Approaches */}
      <motion.section
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Image on left for this section (reverse order on mobile if you prefer) */}
          <div className="order-1 md:order-2">
            <img
              src= {economicterms}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Investment Approach
            </h2>
            <p className="text-gray-700 mb-4">
            There isn't one correct way of investing in real estate. Some investors focus on flipping houses for a quick profit while others prefer to buy and hold a property until they are satisfied with their returns. Each approach has its advantages and disadvantages but knowing when to take a specific approach is a key factor in making this process as profitable as possible.
            </p>

          </div>
        </div>
      </motion.section>

      {/* Section 3: Reinforcement Learning & ML */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-gray-100"
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Risk Free Environments
            </h2>
            <p className="text-gray-700 mb-4">
            Investors can research market trends, historic data and economic indicators as much as possible but at the end of the day they are taking a risk with their investment. This can be a costly mistake if you make the wrong decision. Currently there is not a risk free environment available for users to practice their investment strategies without the burden of investing real money. LeftMove aims to build a machine learning model that incorporates reinforcement learning to transform how users can evaluate their real estate investments and employ their new found skills in the real world. Try our simulation now!
            </p>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src={handcoin}
              alt="Machine Learning & Real Estate"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Problem
