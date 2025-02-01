
type Props = {
  params: { id: string };
};

export default async function product({ params }: Props) {
  const { id } = await params;

  // Mock Data (Replace with API call or database fetch)
  const products = [
    { id: "1", name: "Laptop", price: "$999" },
    { id: "2", name: "Smartphone", price: "$699" },
  ];
  
  const product = products.find((p) => p.id === id);
  return (
    <div>
      <h1>{product?.name}</h1>
      <p>Price: {product?.price}</p>
    </div>
  );
}
