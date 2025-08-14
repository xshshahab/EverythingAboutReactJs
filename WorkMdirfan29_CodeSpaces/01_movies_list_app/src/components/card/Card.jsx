const Card = ({ img, title, name, desc, rating }) => {
  return (
    <div className="w-80 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={img} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <h3 className="text-sm text-gray-600 italic">{name}</h3>
        <p className="text-sm text-gray-700 mt-2 line-clamp-3">{desc}</p>
        <p className="mt-2 text-yellow-600 font-semibold">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default Card;
