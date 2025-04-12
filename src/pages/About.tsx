import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-8">
      <section className="p-8 rounded-lg shadow-sm border border-[#2EC4B6]">
        <h1 className="text-3xl font-bold text-[#FDFFFC] mb-6">About StyleZAI</h1>
        <p className="text-[#FDFFFC] mb-4">
          StyleZAI is an innovative platform that combines artificial intelligence with fashion
          to help you discover your perfect style. Our mission is to make sustainable fashion
          accessible and personalized for everyone.
        </p>
        <p className="text-[#FDFFFC]">
          By leveraging advanced AI algorithms, we analyze your style preferences and match
          them with curated selections from various resale websites, helping you find unique
          pieces that truly reflect your personality.
        </p>
      </section>

      <section className="p-8 rounded-lg shadow-sm border border-[#2EC4B6]">
        <h2 className="text-2xl font-bold text-[#FDFFFC] mb-6">How It Works</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2EC4B6] flex items-center justify-center text-[#011627] font-bold mr-4">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#FDFFFC] mb-2">Tell Us Your Style</h3>
              <p className="text-[#FDFFFC]">
                Share your style preferences, favorite colors, and budget with our AI.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2EC4B6] flex items-center justify-center text-[#011627] font-bold mr-4">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#FDFFFC] mb-2">AI-Powered Search</h3>
              <p className="text-[#FDFFFC]">
                Our AI scans multiple resale websites to find items that match your style.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2EC4B6] flex items-center justify-center text-[#011627] font-bold mr-4">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#FDFFFC] mb-2">Get Personalized Recommendations</h3>
              <p className="text-[#FDFFFC]">
                Receive curated outfit suggestions that align with your preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 