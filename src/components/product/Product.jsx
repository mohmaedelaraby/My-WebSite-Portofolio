import "./product.css";

const Product = ({img,link,title,code}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div><a href={code} target="_blank" rel="noreferrer" >{title}</a></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="projecr" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
