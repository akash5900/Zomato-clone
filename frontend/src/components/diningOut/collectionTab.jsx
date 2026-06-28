import { VscTriangleRight } from "react-icons/vsc";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Collectontabs = () => {
  const [collection, setcollection] = useState([]);

  const scrollRef = useRef(null);

  useEffect(() => {
    getCollections();
  }, []);

  const getCollections = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/collection/place");
      setcollection(res.data.collections);
    } catch (error) {
      console.log(error);
    }
  };

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 350;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 350;
  };

  return (
    <div className="py-2 pb-10 bg-gray-100 flex flex-col gap-5 text-gray-700">
      <h1 className="px-32 py-5 text-3xl text-gray-800">Collections</h1>
      <section className="flex flex-col gap-2">
        <section className=" px-31 flex items-center justify-between">
          <p className="text-lg font-thin ">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Jalandhar, based on trends
          </p>

          <div className="flex items-center gap-2 cursor-pointer">
            <h1 className="text-lg font-thin text-red-400">
              All collections in location
            </h1>
            <VscTriangleRight color="red" />
          </div>
        </section>

        <section className="relative">
          <div className="px-32 overflow-hidden">
            <button
              onClick={scrollLeft}
              className="absolute left-26 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 cursor-pointer"
            >
              <FaChevronLeft />
            </button>
            <div
              className="flex gap-4 overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide flex-nowrap  "
              ref={scrollRef}
            >
              {collection.map((col) => {
                return (
                  <CollectionsItem
                    key={col._id}
                    img={col.image}
                    label={col.title}
                  />
                );
              })}
            </div>
            <button
              onClick={scrollRight}
              className="absolute right-29 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 cursor-pointer"
            >
              <FaChevronRight />
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

function CollectionsItem({ img, label }) {
  return (
    <div className=" relative flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer">
      <img src={img} alt="" className=" h-80 w-65 rounded-lg object-cover" />
      <p className="absolute bottom-4 text-white text-lg ">{label}</p>
    </div>
  );
}

export default Collectontabs;
