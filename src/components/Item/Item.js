import "./Item.css";
import SuperModal from "../Modal/SuperModal";

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.imageUrl} className="item-img" alt="item" />
      <p className="item-name">{props.name}</p>
      <p className="item-description">{props.description}</p>
      <p className="item-amount">{props.amount}</p>
      <div className="item-deatails-btn-wrapper">
        <SuperModal item={props.item} btn="details" modalType="details" />
      </div>
      <div className="item-deatails-btn-wrapper">
        <SuperModal item={props.item} btn="delete" modalType="delete" />
      </div>
    </div>
  );
};
export default Item;
