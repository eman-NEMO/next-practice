import axios from "axios";
import Link from "next/link";
import './globals.css'
type Product = {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
};

async function getProducts() {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
}

export default async function ProductsPage() {
  const products: Product[] = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4 text-center">
          <div className="">
          <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain "
            />
          </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title.slice(0,20)}</h2>
              <p className="text-gray-500 text-sm">
                {product.description.slice(0, 55)}... 
              </p>
              <p className="text-xl font-bold text-gray-600">${product.price}</p>
              <Link
                href={`/products/${product.id}`}
                className="inline-block mt-3 bg-gray-500 text-sm text-white  px-4 py-2 rounded-md hover:bg-green-600"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
