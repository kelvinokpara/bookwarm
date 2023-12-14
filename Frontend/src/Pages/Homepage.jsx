import BookCard from "../Components/BookCard";
import Search from "../Components/Inputs/Search";
import Navbar from "../Components/Navbar";
import Tabs from "../Components/Tabs";

const Homepage = () => {
  const bookArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="pb-20">
      <Navbar />

      {/*  */}
      <div>
        <section className="overflow-x-hidden bg-gray-800">
          <div className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0 min-h-[80vh]">
            <div className="shrink-0 from-white/40 absolute left-1/2 h-96 w-96 -translate-x-1/2 rounded-full border border-gray-500 bg-gradient-to-br"></div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="mt-5 text-3xl font-light leading-snug text-white sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-snug">
                  Increase <br className="sm:hidden" />
                  Knowledge With
                  <span className="relative inline-flex justify-center whitespace-nowrap font-bold">
                    {" "}
                    Books
                  </span>
                </h1>
                <p className="mx-auto mt-10 max-w-md text-base leading-7 text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  deleniti perferendis magnam.
                </p>
              </div>
            </div>
            {/*  */}
            <form action="#" method="POST" className="mt-10 mx-auto max-w-3xl ">
              <Search />
            </form>
          </div>
        </section>
      </div>

      {/*  */}
      <div className="mt-10">
        <Tabs />
      </div>
      {/*  */}
      <div className="px-10 max-md:px-4 py-10 flex justify-center flex-wrap">
        {bookArray.map((book) => (
          <BookCard key={book} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
