import React from "react";
import {AiFillDelete} from "react-icons/ai";
import { FaBullseye } from "react-icons/fa";
import "./card.css";
import moment from "moment";

import { useDispatch } from "react-redux";
import { deleteBill } from "../../redux/actions/Actions";

export const Card = ({ item , notifySuccess}) => {
  
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  const handleDelete = () => {
    notifySuccess();
    dispatch(deleteBill(item));
  };

  return (
    <div
      className="card"
      style={{ borderRight: `6px solid ${item.category.color}` }}
    >
      <div className="card-image-container">
        <FaBullseye size={25} />
      </div>
      <div className="card-info">
        <label className="card-title">{item.title}</label>
        <label className="card-time">{time}</label>
      </div>
      <div className="card-right">
        <div>
          <label className="card-amount">₹ {item.amount}</label>
        </div>
        <div className="delete-icon" onClick={handleDelete}>
          <div className="delete">
          <AiFillDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

