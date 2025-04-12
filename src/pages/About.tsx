import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section className="bg-white p-8 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About StyleZAI</h1>
        <p className="text-gray-600 mb-4">
          StyleZAI is an innovative platform that combines artificial intelligence with fashion
          to help you discover your perfect style. Our mission is to make sustainable fashion
          accessible and personalized for everyone.
        </p>
        <p className="text-gray-600 mb-4">
          Using advanced AI algorithms, we analyze your style preferences and match them with
          curated selections from various resale websites. This not only helps you find unique
          pieces that match your taste but also promotes sustainable fashion by giving pre-loved
          clothing a new life.
        </p>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">1</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Tell Us Your Style</h3>
              <p className="text-gray-600">
                Share your style preferences, favorite colors, and budget range.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">2</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes your preferences and searches through curated resale websites.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">3</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Get Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized outfit suggestions that match your style and budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 