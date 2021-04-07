import React from "react";
import Item from "../Item/Item";
import SuperModal from "../Modal/SuperModal";
import "./List.css";

const List = (props) => {
  return (
    <div className="list">
      <div className="list-head">
        <span>Img</span>
        <span onClick={()=>{props.sort('name')}}>Name</span>
        <span>Description</span>
        <span onClick={()=>{props.sort('amount')}}>Amount</span>
        <SuperModal btn="add" modalType="add" />
      </div>

      {props.items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            imageUrl={item.imageUrl}
            name={item.name}
            description={item.description}
            amount={item.amount}
          />
        );
      })}
    </div>
  );
};

export default List;
