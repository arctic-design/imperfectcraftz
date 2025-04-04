import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="500"
        />
        {product.isNew && (
          <div className="absolute left-2 top-2 rounded-full bg-black px-2 py-1 text-xs font-medium text-white">
            New
          </div>
        )}
        {product.discount > 0 && (
          <div className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
            {product.discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 md:text-base">
          {product.name}
        </h3>
        <div className="mt-1 flex items-center">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 md:h-4 md:w-4 ${
                  i < product.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="ml-1 text-xs text-gray-500">
            ({product.reviewCount})
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-900 md:text-base">
              ₹{product.price.toFixed(2)}
            </span>
            {product.originalPrice > 0 && (
              <span className="ml-2 text-xs text-gray-500 line-through md:text-sm">
                ₹{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex space-x-1">
            {product.colors.slice(0, 3).map((color) => (
              <div
                key={color}
                className="h-3 w-3 rounded-full border border-gray-300 md:h-4 md:w-4"
                style={{ backgroundColor: color }}
              />
            ))}
            {product.colors.length > 3 && (
              <div className="flex h-3 w-3 items-center justify-center rounded-full border border-gray-300 text-[8px] text-gray-500 md:h-4 md:w-4 md:text-[10px]">
                +{product.colors.length - 3}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
