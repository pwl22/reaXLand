import React from 'react'
import { motion } from 'framer-motion'

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
            Discover how machine learning powers informed decisions in real estate 
            investing—minimizing risks and maximizing returns.
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
              Investing in real estate can be daunting—especially for newcomers. 
              Property prices, market volatility, and complex regulations often 
              leave first-time investors overwhelmed. Even seasoned investors find 
              it challenging to consistently identify profitable opportunities 
              amidst changing economic conditions.
            </p>
            <p className="text-gray-700">
              Without the right insights, it's easy to pour time and money into 
              ventures that don't yield the expected returns. Understanding these 
              challenges is the first step to making informed and confident decisions.
            </p>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
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
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800"
              alt="Multiple Approaches"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Approaches to Real Estate Investing
            </h2>
            <p className="text-gray-700 mb-4">
              There isn’t a one-size-fits-all method for real estate investing. 
              Some investors focus on flipping properties for quick profit, 
              others prefer long-term rental income, while some invest in 
              REITs (Real Estate Investment Trusts) to diversify their portfolios.
            </p>
            <p className="text-gray-700 mb-4">
              For instance, you might choose <strong>house flipping</strong> if 
              you’re interested in renovating properties for substantial, 
              shorter-term gains. Alternatively, 
              <strong> rental properties</strong> can provide steady cash flow over time. 
              And for those who want a more hands-off approach, <strong>REITs</strong> 
              offer real estate exposure without direct property management.
            </p>
            <p className="text-gray-700">
              Each approach has its pros, cons, and different levels of risk. 
              Understanding these factors helps you select the strategy 
              that aligns best with your goals and experience.
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
              Finding the Ideal Approach with Machine Learning
            </h2>
            <p className="text-gray-700 mb-4">
              Advances in <strong>reinforcement learning</strong>, simulation, 
              and predictive analytics have transformed how we evaluate real 
              estate investments. By analyzing historical data, market trends, 
              and even economic indicators, ML models can simulate multiple 
              investment strategies in parallel.
            </p>
            <p className="text-gray-700 mb-4">
              This allows you to see how each strategy might perform in 
              different market conditions, providing clear performance metrics 
              and risk assessments before you commit any real capital. 
              In other words, machine learning lets you test the waters 
              without taking a financial plunge.
            </p>
            <p className="text-gray-700">
              With robust simulations and real-time data analysis, 
              you can refine your approach and make smarter, more 
              confident investments that align with your risk tolerance 
              and financial goals.
            </p>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1589904087868-7cdb172f3b36?auto=format&fit=crop&q=80&w=800"
              alt="Machine Learning & Real Estate"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Problem
