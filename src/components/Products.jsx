import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";
import ProductCard from "../components/ProductCard";
import { FadeIn } from "../components/Animations";

const Products = () => {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.get("/products").then((res) => res.data),
  });

  if (isLoading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-secondary mb-8">Trending Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <FadeIn key={product._id}>
            <ProductCard product={product} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Products;