// import Link from "next/link";
import Image from "next/image";
import { contactInfo, footwearProducts } from "@/lib/data";
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
          <div className="relative w-full overflow-hidden h-[35vh] sm:h-[65vh] md:h-[70vh] lg:h-[85vh] xl:h-[80vh] 2xl:h-[80vh]">
            <Image
              src="/bg.jpg?height=800&width=1600"
              alt="Women's footwear collection"
              fill
              priority
              className="object-cover"
              // width={1600}
              // height={800}
            />
            {/* <div className="absolute inset-0 bg-black/40" />
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
            </div> */}
          </div>
        </section>
        <section className="bg-green-50 py-4 text-center text-green-900 text-sm sm:text-base">
          Have questions about your order?{" "}
          <a
            href={`https://wa.me/${contactInfo.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-green-700 underline hover:text-green-800"
          >
            Chat with us on WhatsApp
          </a>
        </section>

        <a
          href={`https://wa.me/${contactInfo.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 rounded-full bg-green-500 p-3 text-white shadow-lg hover:bg-green-600 transition"
          aria-label="Chat with us on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path d="M12.04 2.004c-5.511 0-9.972 4.46-9.972 9.972a9.934 9.934 0 0 0 1.472 5.196l-1.588 5.805 5.957-1.565a9.938 9.938 0 0 0 4.131.928c5.511 0 9.972-4.46 9.972-9.972 0-5.51-4.461-9.971-9.972-9.971Zm5.702 13.807c-.239.673-1.39 1.326-1.932 1.376-.494.046-1.123.065-1.799-.112-.412-.104-.946-.308-1.637-.598-2.889-1.253-4.772-4.139-4.917-4.333-.144-.193-1.176-1.56-1.176-2.98s.743-2.12 1.006-2.414c.262-.293.58-.366.773-.366.194 0 .388.002.556.01.18.008.418-.067.655.497.239.572.815 1.973.887 2.113.072.14.119.307.024.498-.096.19-.144.307-.287.472-.144.165-.305.368-.437.494-.144.139-.295.29-.126.571.167.282.743 1.229 1.595 1.99 1.098.982 2.017 1.288 2.3 1.431.285.143.448.12.618-.072.167-.19.717-.834.909-1.12.191-.286.383-.239.648-.144.263.096 1.664.786 1.953.929.286.144.478.215.547.334.072.119.072.687-.167 1.36Z" />
          </svg>
        </a>

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
