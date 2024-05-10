import toast, { Toaster } from "react-hot-toast";
import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const notify = () => toast.error("Please enter a search term!");
  const handleSubmit = (values) => {
    if (values.search === "") {
      notify();
      return;
    }

    onSearch(values.search);
  };

  return (
    <header className={css.header}>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label>
            <Field
              className={css.field}
              type="text"
              name="search"
              placeholder="Search images and photos"
            />
          </label>
          <button className={css.button} onClick={notify} type="submit">
            Search
          </button>
          <Toaster position="top-left" reverseOrder={false} />
        </Form>
      </Formik>
    </header>
  );
}
