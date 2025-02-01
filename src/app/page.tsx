import Link from "next/link";

export default function Home() {
  const products = [
    { id: "1", name: "Laptop" },
    { id: "2", name: "Smartphone" },
  ];

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
