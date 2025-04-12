import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="space-y-12 p-8">
      {/* Hero Section */}
      <section className="text-center py-20 rounded-lg shadow-sm border border-[#2EC4B6]">
        <h1 className="text-4xl font-bold text-[#FDFFFC] mb-4">
          Discover Your Perfect Style with AI
        </h1>
        <p className="text-xl text-[#FDFFFC] max-w-2xl mx-auto">
          StyleZAI uses advanced artificial intelligence to help you find the perfect outfits
          that match your personal style preferences from various resale websites.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-lg shadow-sm border border-[#2EC4B6]">
          <h2 className="text-xl font-semibold mb-3 text-[#FDFFFC]">Personalized Style</h2>
          <p className="text-[#FDFFFC]">
            Tell us your style preferences and let our AI find the perfect matches for you.
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-sm border border-[#2EC4B6]">
          <h2 className="text-xl font-semibold mb-3 text-[#FDFFFC]">Sustainable Fashion</h2>
          <p className="text-[#FDFFFC]">
            Shop from curated resale websites to find unique pieces while being eco-friendly.
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-sm border border-[#2EC4B6]">
          <h2 className="text-xl font-semibold mb-3 text-[#FDFFFC]">Smart Recommendations</h2>
          <p className="text-[#FDFFFC]">
            Get AI-powered outfit suggestions that match your style and budget.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="text-center py-12 rounded-lg shadow-sm border border-[#2EC4B6]">
        <h2 className="text-2xl font-bold text-[#FDFFFC] mb-4">Coming Soon</h2>
        <p className="text-[#FDFFFC] max-w-2xl mx-auto">
          We're working hard to bring you an innovative way to discover and shop for fashion.
          Sign up to be notified when we launch!
        </p>
        <button className="mt-6 px-6 py-3 bg-[#FF9F1C] text-[#011627] rounded-lg hover:bg-[#FF9F1C]/80 hover:text-[#011627] transition-colors">
          Get Notified
        </button>
      </section>
    </div>
  );
};

export default Home; 