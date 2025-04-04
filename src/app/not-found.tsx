import Link from "next/link";

// import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">404</h1>
      <h2 className="mt-4 text-xl font-semibold sm:text-2xl">Page Not Found</h2>
      <p className="mt-2 text-muted-foreground">
        {`The page you are looking for doesn't exist or has been moved.`}
      </p>
      <button
        //   asChild
        className="mt-8"
      >
        <Link href="/">Return to Home</Link>
      </button>
    </div>
  );
}
