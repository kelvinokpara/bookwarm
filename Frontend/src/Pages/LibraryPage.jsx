import React, { useEffect } from "react";
import reader_vector from "../assets/reader-vector.png";
import BookCard from "../Components/BookCard";
import { useDispatch, useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  createLibraryAction,
  getUserLibraryAction,
} from "../Redux/Actions/libraryAction";
import {
  DECREMENT_LIBRARY_RESET,
  INCREMENT_LIBRARY_RESET,
} from "../Redux/Constants";

const LibraryPage = () => {
  const dispatch = useDispatch();

  const { getLib, incrementLib, decrementLib } = useSelector((state) => state);
  console.log(getLib.getLibrary.data, "get lib");
  // const { getLibrary } = getLib;

  const userLibrary = getLib.getLibrary.data?.library;

  useEffect(() => {
    dispatch(createLibraryAction());
    dispatch(getUserLibraryAction());
    if (incrementLib.success) {
      dispatch(getUserLibraryAction());
      dispatch({ type: INCREMENT_LIBRARY_RESET });
    }

    if (decrementLib.success) {
      dispatch({ type: DECREMENT_LIBRARY_RESET });
      dispatch(getUserLibraryAction());
      // setTimeout(() => {
      //   window.location.reload();
      // }, 3000);
      // window.location.reload();
    }
  }, [incrementLib.success, decrementLib.success, dispatch]);

  return (
    <div>
      <div className="relative flex px_res md:py-14 py-8 gap-5 max-sm:gap-3 bg-gray-700 overflow-hidden">
        <div className="flex flex-col gap-5 max-sm:gap-3 text-white">
          <h1 className="font-worksans text-6xl max-md:text-4xl font-semibold leading-[110%] ">
            Your Library
          </h1>
          <p className="font-worksans text-xl max-md:text-base leading-[160%]">
            Check out the various books you've saved in your library.
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
            {userLibrary && userLibrary.length < 1 ? (
              <h1 className="max-md:text-xl text-2xl font-bold text-center">
                You have no books in your library
              </h1>
            ) : getLib.success && userLibrary.length > 0 ? (
              userLibrary.map((book, index) => (
                <BookCard key={index} bookData={book} use={"library"} />
              ))
            ) : (
              ""
            )}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      {/*  */}
    </div>
  );
};

export default LibraryPage;
