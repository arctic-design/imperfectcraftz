import Link from "next/link";
import Image from "next/image";
import { footwearProducts } from "@/lib/data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[60vh] w-full overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Women's footwear collection"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
              <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                Imperfect Craftz
              </h1>
              <p className="mb-6 max-w-md text-base sm:text-lg md:max-w-lg md:text-xl">
                Discover our latest styles designed for comfort and fashion
              </p>
              <Link
                href="#products"
                className="rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-100 md:text-base"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Crafted for Comfort & Style
            </h2>
            <p className="mt-4 text-gray-600">
              {`Our footwear collection combines the latest fashion trends with
              exceptional comfort. Each pair is meticulously crafted using
              premium materials to ensure durability and all-day comfort.
              Whether you're looking for casual everyday shoes, elegant heels
              for special occasions, or supportive athletic footwear, our
              diverse range has something for every woman.`}
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="bg-gray-50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
              Our Collection
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {footwearProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
