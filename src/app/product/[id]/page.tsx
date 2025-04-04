import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Star } from "lucide-react";

import { footwearProducts } from "@/lib/data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
// import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card";

export function generateStaticParams() {
  return footwearProducts.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = footwearProducts.find((p) => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }

  // Get 4 related products (excluding current product)
  const relatedProducts = footwearProducts
    .filter(
      (p) => p.id.toString() !== params.id && p.category === product.category
    )
    .slice(0, 4);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-6 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to all products
          </Link>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                {product.name}
              </h1>

              <div className="mt-2 flex items-center">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < product.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="mt-4 text-2xl font-bold">
                ${product.price.toFixed(2)}
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Colors</h3>
                <div className="mt-2 flex space-x-2">
                  {product.colors.map((color) => (
                    <div
                      key={color}
                      className="relative h-8 w-8 cursor-pointer rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Sizes</h3>
                <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-6">
                  {product.sizes.map((size) => (
                    <div
                      key={size}
                      className="flex cursor-pointer items-center justify-center rounded-md border border-gray-300 px-3 py-2 text-sm hover:border-gray-700"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-gray-700">{product.description}</p>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                <button
                  // size="lg"
                  className="flex-1"
                >
                  Add to Cart
                </button>
                <button
                  // size="lg"
                  // variant="outline"
                  className="flex-1"
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-2xl font-bold">You may also like</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
