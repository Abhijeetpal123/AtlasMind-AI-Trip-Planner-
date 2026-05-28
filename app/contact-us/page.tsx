export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50/50 px-4 py-20">
      
      {/* Header */}
      <div className="text-center mb-12 space-y-4">
        <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
          📬 Contact Us
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] tracking-tight">
          Get in Touch
        </h1>
        <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed">
          Have a question or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Form */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-[#1a1a2e]">Send a Message</h2>
          
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-500">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-500">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-500">Message</label>
            <textarea
              rows={4}
              placeholder="Write your message here..."
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
            />
          </div>

          <button className="w-full bg-[#1a1a2e] text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-[#2d2d4e] transition-all duration-150 cursor-pointer">
            Send Message →
          </button>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-2">
            <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center">
              <span className="text-lg">📧</span>
            </div>
            <h3 className="text-sm font-semibold text-[#1a1a2e]">Email Us</h3>
            <p className="text-xs text-gray-400">support@atlasmind.com</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-2">
            <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center">
              <span className="text-lg">⏰</span>
            </div>
            <h3 className="text-sm font-semibold text-[#1a1a2e]">Response Time</h3>
            <p className="text-xs text-gray-400">We reply within 24 hours</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-2">
            <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center">
              <span className="text-lg">📍</span>
            </div>
            <h3 className="text-sm font-semibold text-[#1a1a2e]">Location</h3>
            <p className="text-xs text-gray-400">India 🇮🇳</p>
          </div>
        </div>

      </div>
    </div>
  );
}