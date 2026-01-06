import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import ContinueWatching from "./components/ContinueWatching";
import YouMightLike from "./components/YouMightLike";

function App() {
  return (
    <div className="bg-[#0f0f1a] text-white">
      
      {/* Fixed Sidebar (desktop only) */}
      <aside
        className="
          hidden md:block
          fixed top-0 left-0
          h-screen w-64
        "
      >
        <Sidebar />
      </aside>

      {/* Main content */}
      <main
        className="
          min-h-screen
          md:ml-64
          overflow-y-auto
          overflow-x-hidden
          p-4 md:p-8
          space-y-8
        "
      >
        <TopBar />
        <Hero />
        <ContinueWatching />
        <YouMightLike />
      </main>
    </div>
  );
}

export default App;
