import Card from "./components/Card";


const App = () => {
  // 10 Dummy Users
  const users = [
  {
    id: 1,
    name: "Noah Thompson",
    role: "Product Designer who focuses on simplicity & usability.",
    coverImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=2000&q=80",
    avatar: "https://i.pravatar.cc/150?img=12",
    stats: { likes: "72.9K", posts: "828", views: "342.9K" }
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "UX Researcher passionate about user-centric design patterns.",
    coverImage: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=2000&q=80",
    avatar: "https://i.pravatar.cc/150?img=32",
    stats: { likes: "45.2K", posts: "302", views: "1.2M" }
  },
  {
    id: 3,
    name: "Mike Chen",
    role: "Frontend Developer specializing in React and animations.",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80",
    avatar: "https://i.pravatar.cc/150?img=45",
    stats: { likes: "12.4K", posts: "150", views: "89.1K" }
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Digital Artist creating surreal landscapes and characters.",
    coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80",
    avatar: "https://i.pravatar.cc/150?img=47",
    stats: { likes: "98.1K", posts: "1.2K", views: "500K" }
  },
  {
    id: 5,
    name: "David Ross",
    role: "Tech Blogger and Gadget Reviewer.",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
    avatar: "https://i.pravatar.cc/150?img=52",
    stats: { likes: "33.5K", posts: "440", views: "210K" }
  },
  {
    id: 6,
    name: "Jessica Lee",
    role: "Mobile App Developer (iOS & Swift).",
    coverImage: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=2000&q=80",
    avatar: "https://i.pravatar.cc/150?img=65",
    stats: { likes: "8.9K", posts: "95", views: "45K" }
  },
  {
    id: 7,
    name: "Tom Wilson",
    role: "SEO Specialist and Content Strategist.",
    coverImage: "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=2000&q=80",
    avatar: "https://i.pravatar.cc/150?img=68",
    stats: { likes: "110K", posts: "2.1K", views: "4.5M" }
  },
  {
    id: 8,
    name: "Sophia Martinez",
    role: "Brand Identity Designer & Illustrator.",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80",
    avatar: "https://i.pravatar.cc/150?img=49",
    stats: { likes: "22.3K", posts: "310", views: "180K" }
  },
  {
    id: 9,
    name: "James White",
    role: "Cloud Architect (AWS / Azure).",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80",
    avatar: "https://i.pravatar.cc/150?img=59",
    stats: { likes: "5.6K", posts: "42", views: "12K" }
  },
  {
    id: 10,
    name: "Olivia Brown",
    role: "Social Media Manager & Copywriter.",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80",
    avatar: "https://i.pravatar.cc/150?img=24",
    stats: { likes: "67.2K", posts: "900", views: "880K" }
  }
];


  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center max-w-7xl mx-auto">
        {users.map((user) => (
          <Card key={user.id} profile={user} />
        ))}
      </div>
    </div>
  );
};

export default App;