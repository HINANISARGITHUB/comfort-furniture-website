// dynamic routing of product details

// import AddToBag from "@/app/components/addToBag";
// import CheckoutNow from "@/app/components/checkoutNow";
// import ImageGallery from "@/app/components/imageGallery";
import AddToBag from "@/app/components/addToBag";
import { fullProduct } from "@/app/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import Image from "next/image";

async function getData(slug: string) {
  /* query 3*/

  const Query = `*[_type == "product" && slug.current == "${slug}"][0] {
  _id,
    titleImage,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    }`;

  const data = await client.fetch(Query);

  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);
  return (
    <div className="mx-auto  px-12 md:px-16 mt-16">
      <div className="grid gap-8 md:grid-cols-2">
        {/* imgesGallery */}
        <div className="relative overflow-hidden  ">
          <Image
            src={urlFor(data.titleImage).url()}
            alt="fashion photo"
            width={500}
            height={500}
            className="w-[500px] h-[520px] object-cover object-center cursor-pointer rounded-lg"
          />
        </div>

        {/* images category-name */}

        <div className="">
          <div className="mb-2 md:mb-3">
            <span className="mb-0.5 inline-block text-gray-500">
              {data.categoryName}
            </span>

            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
              {data.name}
            </h2>
          </div>

          {/* images botton with star*/}

          <div className="mb-6 flex items-center gap-3 md:mb-10">
            <Button className="rounded-full gap-x-3">
              <span className="text-sm">4.2</span>

              {/* snametar icon */}
              <Star className="h-5 w-5" />
            </Button>

            <span className="text-sm text-gray-500 transition  duration-100">
              56 Ratings
            </span>
          </div>

          {/* price */}

          <div className="mb-4">
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-gray-800">
                ${data.price}
              </span>

              <span className="mb-0.5 text-red-500 line-through ml-2">
                ${data.price + 30}
              </span>
            </div>

            {/* shipping */}

            <span className="text-sm text-gray-500">
              Incl. Vat plus shipping
            </span>
          </div>

          <div className="mb-6 flex items-center gap-2 text-gray-500">
            {/* Truck icon */}
            <Truck className="w-6 h-6" />
            <span className="text-sm">2-4 Days Shipping</span>
          </div>

          {/* buttons */}
          <div className="flex gap-2.5">
            <AddToBag 
             currency="USD"
             description={data.description}
             image={data.titleImage[0]}
             name={data.name}
             price={data.price}
             key={data._id}/>
            <Button variant={"secondary"}>CheckoutNow</Button>
          </div>

          {/* description */}

          <p className="mt-12 text-base text-gray-500 tracking-wide">
            {data.description}
          </p>
        </div>
      </div>
   </div>
  );
}
