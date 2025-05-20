// components/product/ProductCard.tsx

type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  
  export function ProductCard({ product }: { product: Product }) {
    return (
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <span className="text-md font-bold text-black">${product.price}</span>
      </div>
    );
  }
  