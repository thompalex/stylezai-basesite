import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <section className="p-8 rounded-lg shadow-sm border border-[#2EC4B6]">
        <h1 className="text-3xl font-bold text-[#FDFFFC] mb-6">Contact Us</h1>
        <p className="text-[#FDFFFC] mb-8">
          Have questions about StyleZAI? We'd love to hear from you! Fill out the form below
          and we'll get back to you as soon as possible.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#FDFFFC]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-2 border-[#2EC4B6] shadow-sm focus:border-[#2EC4B6] focus:ring-[#2EC4B6] bg-[#011627] text-[#FDFFFC] placeholder-[#2EC4B6] p-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#FDFFFC]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-2 border-[#2EC4B6] shadow-sm focus:border-[#2EC4B6] focus:ring-[#2EC4B6] bg-[#011627] text-[#FDFFFC] placeholder-[#2EC4B6] p-2"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#FDFFFC]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-2 border-[#2EC4B6] shadow-sm focus:border-[#2EC4B6] focus:ring-[#2EC4B6] bg-[#011627] text-[#FDFFFC] placeholder-[#2EC4B6] p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#FF9F1C] text-[#011627] rounded-md hover:bg-[#FF9F1C]/80 hover:text-[#011627] focus:outline-none focus:ring-2 focus:ring-[#FF9F1C] focus:ring-offset-2 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact; 