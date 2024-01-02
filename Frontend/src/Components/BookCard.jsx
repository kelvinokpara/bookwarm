const BookCard = ({ bookData = {} }) => {
  return (
    <div className="my-8 max-w-[250px]">
      <div className="group cursor mx-2 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
        <div className="flex h-50 flex-col justify-between overflow-hidden">
          <img
            src={bookData.image}
            className="group-hover:scale-110 h-full w-full object-cover duration-200"
          />
        </div>
        <div className="flex-1 flex flex-col overflow-hidden bg-white px-4 py-6 gap-y-4">
          <h6 className="group-hover:text-indigo-600 text-base font-bold">
            {bookData.title}
          </h6>
          <p className="text-gray-600 text-xs">{bookData.authors}</p>

          <a href={bookData.url} target="_blank">
            <button className="btn1">Add to library</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
