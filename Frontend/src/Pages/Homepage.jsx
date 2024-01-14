import { useEffect } from "react";
import BookCard from "../Components/BookCard";
import Search from "../Components/Inputs/Search";
// import Navbar from "../Components/Navbar";
import Tabs from "../Components/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { getBooksAction } from "../Redux/Actions/booksAction";
// import { LOGGED } from "../Redux/Constants";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Homepage = () => {
  const { getBooks } = useSelector((state) => state);
  const dispatch = useDispatch();

  const userStatus = localStorage.getItem("userInfo");
  console.log(userStatus);

  useEffect(() => {
    dispatch(getBooksAction());
  }, []);

  getBooks.success ? console.log(getBooks, "gb") : console.log(null);

  const { Books } = getBooks;
  return (
    <div className="pb-20">
      {/* <Navbar /> */}

      {/*  */}
      <div>
        <section className="overflow-x-hidden bg-gray-800">
          <div className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
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
      <div className="px-10 max-md:px-4 py-10">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 4, 900: 5 }}>
          <Masonry>
            {getBooks.success &&
              Books.map((book, index) => (
                <BookCard key={index} bookData={book} />
              ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Homepage;
