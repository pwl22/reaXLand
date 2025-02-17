import { motion } from 'framer-motion'

function Problem() {
  const challenges = [
    {
      title: 'Market Volatility',
      description: 'Housing markets are highly dynamic, with prices fluctuating based on numerous factors including economic conditions, interest rates, and local market trends.',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Complex Valuations',
      description: 'Traditional property valuation methods often struggle to account for all relevant factors, leading to inconsistent and potentially inaccurate price estimates.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Data Accessibility',
      description: 'Limited access to comprehensive, up-to-date market data makes it difficult for buyers and sellers to make informed decisions.',
      image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800'
    }
  ]

  return (
    <div className="container-custom py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          The Challenge in House Price Prediction
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding and predicting house prices has become increasingly complex
          in today's dynamic real estate market.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={challenge.image}
              alt={challenge.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {challenge.title}
              </h3>
              <p className="text-gray-600">{challenge.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Problem