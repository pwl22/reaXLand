import { useState } from 'react'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-12">
      <div className="container mx-auto px-4">
        {/* Single Column without a Contact link */}
        <div className="flex flex-col items-start md:items-center">
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
      </div>
    </footer>
  )
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission here
      console.log('Form submitted:', formData)
      // Reset form
      setFormData({ name: '', email: '', message: '' })
      alert('Thank you for your message! We will get back to you soon.')
    } else {
      setErrors(newErrors)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Main Contact Form Section */}
      <div className="container-custom py-12 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Have any questions about our machine learning solution? We'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 ${
                  errors.name ? 'border-red-500' : ''
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 ${
                  errors.message ? 'border-red-500' : ''
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Footer without link on the right */}
      <Footer />
    </div>
  )
}

export default Contact
