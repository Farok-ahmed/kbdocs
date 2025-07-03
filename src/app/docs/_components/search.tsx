import Select from "@/components/select";

export default function Search() {
    return (
        <div className="container custom_container">
            <form
                onSubmit={(e) => e.preventDefault()}
                className="banner_search_form banner_search_form_two"
            >
                <div className="input-group">
                    <input
                        type="search"
                        className="form-control"
                        placeholder='Search ("/" to focus)'
                    />
                    <div className="input-group-append">
                        <Select
                            id="inlineFormCustomSelect"
                            options={[
                                {
                                    value: "all-category",
                                    label: "All Category",
                                },
                                {
                                    value: "one",
                                    label: "One",
                                },
                                {
                                    value: "two",
                                    label: "Two",
                                },
                                {
                                    value: "three",
                                    label: "Three",
                                },
                            ]}
                        />
                    </div>
                    <button type="submit">
                        <i className="icon_search"></i>
                    </button>
                </div>
            </form>
        </div>
    );
}
