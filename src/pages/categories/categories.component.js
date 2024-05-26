import { Link } from "react-router-dom";

const Categories = ({ data }) => {
  return (
    <div className="catalog--categories">
      <div className="catalog">
        <h2 className="catalog__h2">Category</h2>
      </div>
      <div className="categories">
        <ul className="category" style={{ display: "block" }}>
          {data?.map((item) => (
            <li key={item.id}>
              <Link to={`/categories/${item.id}`}>{item.category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
