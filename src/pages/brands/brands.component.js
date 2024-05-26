import { Link } from "react-router-dom";

const Brand = ({ data }) => {
  return (
    <div className="catalog--brands">
      <div className="brand">
        <h2 className="brand__h2">Brands</h2>
      </div>
      <div className="brands">
        <ul className="brand">
          {data?.map((item) => (
            <li key={item.id}>
              <Link to={`/brands/${item.id}`}>{item.brand}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Brand;
