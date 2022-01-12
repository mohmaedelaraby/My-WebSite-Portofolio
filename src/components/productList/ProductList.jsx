import "./productList.css";
import Product from "../product/Product";


const ProductList = ({head,desc,data}) => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">{head}</h1>
        <p className="pl-desc">
          {desc}.
        </p>
      </div>
      <div className="pl-list">
        {data.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} code={item.code} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
