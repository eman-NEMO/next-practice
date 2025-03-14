import axios from "axios";
import '@/app/globals.css';
import Image from "next/image";
import { notFound } from "next/navigation";

async function productById(id: string) {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    await new Promise((resolve) => setTimeout(resolve, 1000)); 
    return response.data;
  } catch (error) {
    return null;
  }
}


export default async function ProductPage({params}: {params: Promise<{ id: string }>}) {
  const { id } = await params; 

  const product = await productById(id);

  if (!product) {
    return notFound(); 
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 py-8 bg-white rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              width={500}
              height={500}
              src={product.image}
              alt={product.title}
              priority
              className="w-full max-w-md h-96 object-contain rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-center text-center">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-500 text-lg mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-gray-600 mb-5">{product.category}</p>
            <p className="text-2xl font-bold text-gray-500 mb-6">${product.price}</p>

            <button className="bg-gray-500 text-white px-20 py-3 font-semibold rounded-md hover:bg-gray-400 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
