import React from 'react';

const Card = ({ profile }) => {
  // Helper to generate the colorful "exp" bars
  const renderExpBars = () => {
    const colors = [
      "bg-purple-500", "bg-purple-600", "bg-indigo-500", "bg-blue-500",
      "bg-green-400", "bg-yellow-400", "bg-orange-400", "bg-red-400",
      "bg-red-300", "bg-pink-300", "bg-gray-200", "bg-gray-200"
    ];
    return (
      <div className="flex items-end gap-[2px] h-4 ml-3">
        <span className="text-xs text-gray-500 font-medium mb-[1px] mr-1">exp.</span>
        {colors.map((color, idx) => (
          <div key={idx} className={`w-[2px] rounded-full ${color}`} style={{ height: `${Math.random() * 10 + 6}px` }}></div>
        ))}
      </div>
    );
  };

  return (
    // Removed 'my-10' and 'mx-auto' so the Grid in App.jsx handles layout
    <div className="w-full max-w-[340px] bg-white rounded-[35px] shadow-2xl overflow-hidden font-sans hover:scale-[1.02] transition-transform duration-300 ease-in-out">
      
      {/* --- Header Image Section --- */}
      <div className="relative h-32 w-full">
        <img 
          src={profile.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-black text-xs font-bold py-2 px-4 rounded-full shadow-sm hover:bg-white transition cursor-pointer">
          Follow +
        </button>
      </div>

      {/* --- Profile Avatar & Exp Section --- */}
      <div className="relative px-6 flex items-end">
        <div className="-mt-12 relative z-10">
          <img 
            src={profile.avatar} 
            alt={profile.name} 
            className="w-24 h-24 rounded-full border-[5px] border-white object-cover"
          />
        </div>
        <div className="mb-2">
          {renderExpBars()}
        </div>
      </div>

      {/* --- User Info --- */}
      <div className="px-6 pt-3 pb-6">
        <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
          {profile.role}
        </p>
      </div>

      {/* --- Stats Row --- */}
      <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center text-center">
        <div>
          <p className="text-lg font-bold text-gray-900">{profile.stats.likes}</p>
          <p className="text-xs text-gray-400 font-medium">Likes</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-900">{profile.stats.posts}</p>
          <p className="text-xs text-gray-400 font-medium">Posts</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-900">{profile.stats.views}</p>
          <p className="text-xs text-gray-400 font-medium">Views</p>
        </div>
      </div>

      {/* --- Social Footer --- */}
      <div className="bg-gray-50/50 py-4 px-6 border-t border-gray-100 grid grid-cols-3 gap-0">
        <div className="flex justify-center items-center border-r border-gray-200 cursor-pointer hover:bg-gray-100 transition">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </div>
        <div className="flex justify-center items-center border-r border-gray-200 cursor-pointer hover:bg-gray-100 transition">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
        </div>
        <div className="flex justify-center items-center cursor-pointer hover:bg-gray-100 transition">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
        </div>
      </div>
    </div>
  );
};

export default Card;