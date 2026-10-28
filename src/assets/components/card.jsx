const cards = [
  {
    id: 1,
    title: "Mountain Escape",
    description: "Discover breathtaking mountains surrounded by beautiful natural landscapes.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
  },
  {
    id: 2,
    title: "Tropical Paradise",
    description: "Experience crystal-clear water and the beauty of tropical islands.",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800",
  },
  {
    id: 3,
    title: "Enchanted Forest",
    description: "Explore a peaceful forest filled with tall trees and fresh air.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
  },
  {
    id: 4,
    title: "Alpine Lake",
    description: "Enjoy a beautiful mountain lake surrounded by stunning peaks.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800",
  },
  {
    id: 5,
    title: "Green Valley",
    description: "Discover rolling green hills and breathtaking countryside views.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800",
  },
  {
    id: 6,
    title: "Waterfall Wonders",
    description: "Experience the beauty of a spectacular waterfall in nature.",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800",
  },
  {
    id: 7,
    title: "Golden Beach",
    description: "Relax on a sandy beach and enjoy the peaceful ocean waves.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
  },
  {
    id: 8,
    title: "Snowy Mountains",
    description: "Admire majestic mountains covered in beautiful white snow.",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800",
  },
  {
    id: 9,
    title: "Autumn Forest",
    description: "Enjoy colorful autumn leaves in a peaceful forest.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
  },
  {
    id: 10,
    title: "Desert Adventure",
    description: "Explore golden sand dunes and the extraordinary desert landscape.",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800",
  },
  {
    id: 11,
    title: "Peaceful Countryside",
    description: "Escape the busy city and enjoy peaceful green countryside views.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
  },
  {
    id: 12,
    title: "Ocean Cliffs",
    description: "Discover dramatic cliffs overlooking a beautiful blue ocean.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
  },
  {
    id: 13,
    title: "Cherry Blossom Garden",
    description: "Enjoy beautiful pink blossoms in a peaceful spring garden.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800",
  },
  {
    id: 14,
    title: "River Valley",
    description: "Discover a beautiful river winding through green hills.",
    image: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?w=800",
  },
  {
    id: 15,
    title: "Misty Mountains",
    description: "Admire mysterious mountain peaks hidden behind morning mist.",
    image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800",
  },
  {
    id: 16,
    title: "Wildflower Meadow",
    description: "Explore a meadow filled with beautiful flowers and greenery.",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=800",
  },
  {
    id: 17,
    title: "Hidden Waterfall",
    description: "Find a hidden waterfall surrounded by lush green vegetation.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800",
  },
  {
    id: 18,
    title: "Sunset Paradise",
    description: "Enjoy a breathtaking sunset over a stunning natural landscape.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
  },
];

export default function Card({ currentPage = 1 }) {
  const cardsPerPage = 6;
  const startIndex = (currentPage - 1) * cardsPerPage;

  const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">{visibleCards.map((item) => (
      <div key={item.id} className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-2xl">
        <div className="h-56 overflow-hidden">
          <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="p-5">
          <h2 className="mb-2 text-xl font-bold text-gray-800">{item.title}</h2>
          <p className="text-sm leading-6 text-gray-600">{item.description}</p>
        </div>
      </div>
    ))}
    </div>


  );
}
