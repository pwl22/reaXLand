import React from 'react'
import { motion } from 'framer-motion'
import imageSaleSign from '../assets/House-and-man.jpeg'
import economicterms from '../assets/economic-term.jpeg'
import handcoin from '../assets/hand-coins.jpeg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
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

      {/* Hero Section with Reduced Height */}
      <header
        className="relative flex items-center justify-center h-[70vh] md:h-[50vh] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Real Estate Investing Made Simple
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Discover how machine learning can enable investors to make informed decisions with their real estate investments.
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
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Challenges in Real Estate
            </h2>
            <p className="text-gray-700 mb-4">
              Investing in real estate can be overwhelming especially for beginners. Property prices, market volatility, and complex regulations make this process daunting. It can be easy to spend lots of time and money to develop these skills, but this comes with a substantial risk.
            </p>
          </div>

          <div className="w-full">
            <img
              src={imageSaleSign}
              alt="Challenges in Real Estate"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Section 2: Investment Approach (Image on Left for Desktop) */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 md:gap-8 items-center">
          {/* Image on Left */}
          <div className="order-1 md:order-1 w-full">
            <img
              src={economicterms}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text on Right */}
          <div className="order-2 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Investment Approach
            </h2>
            <p className="text-gray-700 mb-4">
              There isn't one correct way of investing in real estate. Some investors flip houses for quick profits, while others hold onto properties for long-term gains. Understanding when to use each approach is key to maximizing returns.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Risk-Free Environments */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-gray-100"
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 md:gap-8 items-center">
          {/* Text First on Mobile */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Risk-Free Environments
            </h2>
            <p className="text-gray-700 mb-4">
              Investors can analyze trends, historic data, and economic indicators, but real estate always involves risk. Currently, no risk-free environment allows users to practice investment strategies without financial burden. LeftMove aims to change that using machine learning and reinforcement learning.
            </p>
          </div>

          {/* Image Second on Mobile */}
          <div className="order-1 md:order-2 w-full">
            <img
              src={handcoin}
              alt="Machine Learning & Real Estate"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

export default Problem
