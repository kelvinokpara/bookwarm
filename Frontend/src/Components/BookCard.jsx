const BookCard = () => {
  return (
    <div className="my-10 max-w-[300px]">
      <div className="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
        <div className="flex h-60 flex-col justify-between overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZpZGVvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className="group-hover:scale-110 h-full w-full object-cover duration-200"
          />
        </div>
        <div className="flex-1 overflow-hidden bg-white px-6 py-8">
          <h6 className="group-hover:text-indigo-600 mb-4 text-lg font-bold">
            Video 6: Learn more about marketing
          </h6>
          <p className="mb-8 text-gray-600 text-sm">
            Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi.
          </p>
          <div className="flex justify-between">
            <button>read</button>
            <div className="max-w-full flex-none lg:px-4">
              <h5 className="text-lg font-bold">Video 6</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
