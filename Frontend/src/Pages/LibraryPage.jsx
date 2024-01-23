import React, { useEffect } from "react";
import reader_vector from "../assets/reader-vector.png";
import BookCard from "../Components/BookCard";
import { useDispatch, useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  createLibraryAction,
  getUserLibraryAction,
} from "../Redux/Actions/libraryAction";

const LibraryPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createLibraryAction());
    dispatch(getUserLibraryAction());
  }, []);

  const { getLib } = useSelector((state) => state);
  return (
    <div>
      <div className="relative flex px_res md:py-14 py-8 gap-5 max-sm:gap-3 bg-gray-700 overflow-hidden">
        <div className="flex flex-col gap-5 max-sm:gap-3 text-white">
          <h1 className="font-worksans text-6xl max-md:text-4xl font-semibold leading-[110%] ">
            Your Library
          </h1>
          <p className="font-worksans text-xl max-md:text-base leading-[160%]">
            Check out top ranking NFT artists on the NFT Marketplace.
          </p>
        </div>
        <img
          src={reader_vector}
          alt=""
          width={350}
          height={350}
          className="absolute bottom-[-65px] right-12 max-md:hidden flex"
        />
      </div>
      {/*  */}
      <div className="px-10 max-md:px-4 py-10">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 4, 900: 5 }}>
          <Masonry>
            {/* {searchBooks.success && result.length < 1 ? (
              <h1 className="max-md:text-xl text-2xl font-bold text-center">
                Your search results:(0)
              </h1>
            ) : searchBooks.success && result.length > 0 ? (
              result.map((book, index) => (
                <BookCard key={index} bookData={book} />
              ))
            ) : (
              getBooks.success &&
              Books.map((book, index) => (
                <BookCard key={index} bookData={book} />
              ))
            )} */}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      {/*  */}
    </div>
  );
};

export default LibraryPage;
