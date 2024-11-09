import { useFetch } from "../hooks/useFetch";
import Image from "../components/Image";

function WCLothe() {
  const { data, isPending, error } = useFetch(
    "https://dummyjson.com/products?limit=190"
  );

  return (
    <>
      <h1 className="text-3xl md:text-5xl lg:tex-7xl font-bold text-violet-950 text-center mt-10">
        Women's clothes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-5 my-10 px-[3%]">
        {data &&
          data.products
            .filter((prod) => prod.category == "womens-dresses")
            .map((product) => {
              return (
                <div>
                  <Image product={product} />
                </div>
              );
            })}
      </div>
    </>
  );
}

export default WCLothe;
