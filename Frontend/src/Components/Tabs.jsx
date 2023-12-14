const Tabs = () => {
  return (
    <div className="max-w-screen-sm mx-auto">
      <div className="rounded-lg border border-gray-300 bg-white py-2 px-3 flex justify-center items-center">
        <nav className="flex flex-wrap gap-4 max-sm:gap-0 justify-center">
          <a href="#" className="tabsNav">
            {" "}
            Account{" "}
          </a>

          <a href="#" className="tabsNav">
            {" "}
            Settings{" "}
          </a>

          <a href="#" className="tabsNav">
            {" "}
            Customs{" "}
          </a>

          <a href="#" className="tabsNav">
            {" "}
            Sales{" "}
          </a>

          <a href="#" className="tabsNav">
            {" "}
            Suppliers{" "}
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
