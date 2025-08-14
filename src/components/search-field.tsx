"use client";

const SearchField = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="error_search">
        <input type="text" className="form-control" placeholder="Search" />
      </form>
    </>
  );
};

export default SearchField;
