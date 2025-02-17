import { motion } from 'framer-motion'

function Solution() {
  const solutions = [
    {
      title: 'Advanced Machine Learning',
      description: 'Our solution employs state-of-the-art machine learning algorithms to analyze vast amounts of real estate data and identify patterns that human analysts might miss.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Comprehensive Data Analysis',
      description: 'We process multiple data points including location, property features, market trends, and economic indicators to provide accurate predictions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Real-Time Updates',
      description: 'Our system continuously updates predictions based on the latest market data, ensuring you always have access to current valuations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
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
          Our Innovative Solution
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Leveraging cutting-edge technology to revolutionize house price prediction
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Solution