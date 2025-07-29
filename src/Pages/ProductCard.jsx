import { Star, ShoppingCart, Heart } from 'lucide-react';

const ProductCard = ({ item, onAddToCart, onToggleFavorite }) => {

  const { name, price, image, category, rating } = item;

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-white/10 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
      {/* Product Image */}
      <div className="relative h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="text-white text-4xl font-bold">{name.charAt(0)}</div>
        )}
        
        {/* Favorite Button */}
        <button
          onClick={() => onToggleFavorite && onToggleFavorite(item)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300"
        >
          <Heart size={16} />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-2 truncate">{name}</h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${
                i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
              }`}
            />
          ))}
          <span className="text-purple-200 text-sm ml-2">({rating})</span>
        </div>

        {/* Price and Category */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-white font-bold text-lg">${price}</span>
          <span className="text-purple-300 text-xs bg-purple-800/50 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart && onAddToCart(item)}
          className="w-full bg-white hover:bg-white/30 text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <ShoppingCart size={16} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
