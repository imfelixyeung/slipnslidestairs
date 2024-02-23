import { typographyVariants } from "@/components/ui/typography";
import { products } from "../data";
import { Metadata } from "next";

const meta = {
  title:
    "Explore Our Exciting Collection - Slip n Slide Stairs Products for Every Adventure",
  description:
    "Discover a world of staircase excitement with Slip n Slide Stairs! Explore our diverse collection, including the Classic Joyful Descent, Fitness Challenge Ascend, Sleek Modern Elegance, Kids' Adventure Zone, Extreme Thrill Seeker, and more. Transform your home with our innovative designs, suitable for all ages. Find your perfect staircase adventure starting at just $699.99. Elevate your everyday with Slip n Slide Stairs today!",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
  },
};

/**
 * modified
 * v0 by Vercel.
 * @see https://v0.dev/t/C2mvJBOc049
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
function ListOfProducts() {
  return (
    <section className="@container">
      <div className="grid grid-cols-1 @lg:grid-cols-2 @2xl:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div className="flex flex-col" key={index}>
            <div className="rounded-lg overflow-hidden">
              <img
                alt={product.title}
                className="object-cover h-full max-h-80 aspect-video"
                src={product.image}
              />
            </div>
            <div className="flex-1 py-2 flex flex-col">
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {product.description}
                </p>
              </div>
              <div className="flex items-end grow mt-3">
                <h4 className="font-semibold text-lg md:text-xl">
                  ${product.price}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const Page = () => {
  return (
    <div className="container my-8">
      <h1 className={typographyVariants({ variant: "h1" })}>
        Welcome to the shop!
      </h1>
      <p className="text-lg mt-3 text-muted-foreground">
        Browse our products and find something you like. We have a wide range of
        products to choose from.
      </p>
      <div className="py-6">
        <ListOfProducts />
      </div>
    </div>
  );
};

export default Page;
