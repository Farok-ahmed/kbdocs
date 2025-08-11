"use client"
const BlogListSearch = () => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle search logic here
    };
  return (
    <>
    <form className="banner_search_form" onSubmit={onSubmit}>
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

export default BlogListSearch