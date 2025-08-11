"use client";

const SearchFieldBlog = () => {
  return (
    <>
    <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            action="#"
            className="banner_search_form"
          >
            <input
              type="search"
              className="form-control"
              placeholder='Search ("/" to focus)'
            />
            <button type="submit">
              <i className="icon_search" />
            </button>
          </form>
    </>
  )
}

export default SearchFieldBlog