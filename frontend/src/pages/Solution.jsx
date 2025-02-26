import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import imageSaleSign from '../assets/House-and-man.jpeg'
import Beng from '../assets/Bengaluru-house-data.jpeg'
import economicterms from '../assets/economic-term.jpeg'
import flowchart from '../assets/Flowchart.jpeg'
import handcoin from '../assets/hand-coins.jpeg'
import nn from '../assets/NN.jpeg'
import rlml from '../assets/RL-ML.jpeg'
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

function Solution() {
  // Steps data
  const steps = [
    {
      title: 'Step 1: Analyze & Clean the Dataset',
      description: `In this phase, we gather real estate data from various sources and 
      clean it by removing duplicates, handling missing values, and identifying 
      outliers. Data integrity is key to producing reliable predictions.`,
      image:
        Beng,
    },
    {
      title: 'Step 2: Build the Neural Network & Predict House Prices',
      description: `Using the cleaned data, we construct a neural network model 
      that processes features like location, square footage, and market trends 
      to output an estimated price for a given property.`,
      image:
        nn,
    },
    {
      title: 'Step 3: Simulation & Strategy for Investing',
      description: `We run simulations under different market conditions—factoring in 
      property location, number of bedrooms/bathrooms, public transport links, etc. 
      Users can customize strategies such as short-term flipping vs. long-term holding 
      to see potential outcomes.`,
      image:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Step 4: Apply Reinforcement Learning for Optimal Strategy',
      description: `Reinforcement learning algorithms observe and learn from both 
      historic and real-time market data. By simulating many investment decisions, 
      the model adapts to find the best approach for each user's specific goals 
      and risk preferences.`,
      image:
        rlml,
    },
    {
      title: 'Step 5: Performance Review',
      description: `Finally, we provide a detailed review of the investment performance: 
      overall profit or loss, what could have been optimized for greater returns, 
      and insights on location or property size. This feedback loop refines 
      future strategy recommendations.`,
      image:
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <div className="w-full">
      <div className="container-custom py-12">
        {/* Title & Flowchart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Solution</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our end-to-end methodology for real estate investment involves
            multiple steps, from cleaning data and building predictive models to
            simulating market conditions and refining strategies with
            reinforcement learning.
          </p>

          {/* Flowchart Image Placeholder */}
          <div className="mt-8 flex justify-center">
            <img
              src= {flowchart}
              alt="Flowchart"
              className="rounded-lg shadow-lg w-full max-w-3xl"
            />
          </div>
        </motion.div>

        {/* Steps Sections */}
        {steps.map((step, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`py-12 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center container mx-auto px-4">
              {/* Text */}
              <div
                className={`${
                  index % 2 === 0 ? 'order-1' : 'md:order-2'
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Image */}
              <div
                className={`${
                  index % 2 === 0 ? 'order-2' : 'md:order-1'
                }`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Solution
