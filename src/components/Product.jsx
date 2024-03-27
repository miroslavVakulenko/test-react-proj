export const Product = props => {
  // const prise = 99;
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.imgUrl} alt={props.name} width="480" />
      <p>Price: {props.price} credits</p>
    </div>
  );
};

// export default Product;
