import axios from "axios";
import Link from "next/link";
import Image from "next/image";

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
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return response.data;
}

export default async function ProductsPage() {
  const products: Product[] = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-600">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4 text-center">
          <Link
                href={`/products/${product.id}`}
               
              >
                 <div className="">
                 <Image 
  src={product.image} 
  alt={product.title} 
  width={400} 
  height={400} 
  className="w-full h-40 object-contain " 
  priority 
/>

          </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title.slice(0,20)}</h2>
              <p className="text-gray-500 text-sm">
                {product.description.slice(0, 55)}... 
              </p>
              <p className="text-xl font-bold text-gray-600">${product.price}</p>
             

             <button  className="inline-block mt-3 bg-gray-500 text-sm font-semibold text-white  px-4 py-2 rounded-md hover:bg-gray-400">
                    Add To Cart
             </button>
                </div>
              </Link>
          
          </div>
        ))}
      </div>
    </div>
  );
}
