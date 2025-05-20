import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/product/ProductCard";
import products from "@/data/products";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-8 space-y-16">
      <Hero />

      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Productos destacados</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
