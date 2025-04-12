import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-20 bg-white rounded-lg shadow-sm">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Discover Your Perfect Style with AI
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          StyleZAI uses advanced artificial intelligence to help you find the perfect outfits
          that match your personal style preferences from various resale websites.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Personalized Style</h2>
          <p className="text-gray-600">
            Tell us your style preferences and let our AI find the perfect matches for you.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Sustainable Fashion</h2>
          <p className="text-gray-600">
            Shop from curated resale websites to find unique pieces while being eco-friendly.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Smart Recommendations</h2>
          <p className="text-gray-600">
            Get AI-powered outfit suggestions that match your style and budget.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="text-center py-12 bg-white rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're working hard to bring you an innovative way to discover and shop for fashion.
          Sign up to be notified when we launch!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Get Notified
        </button>
      </section>
    </div>
  );
};

export default Home; 