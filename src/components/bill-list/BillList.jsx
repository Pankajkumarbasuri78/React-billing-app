import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from './Card';
import "./billList.css";
import { toast,ToastContainer } from "react-toastify";


export const BillList = () => {
  const {billList: list, query } = useSelector((state) => state.bills);
  const filteredList = list.filter((item) => item.title.includes(query));
  const notifySuccess = () => toast.success("Bill Deleted!");


  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length ? filteredList.map((item) => (
         <Card item={item} notifySuccess={notifySuccess}/>
      )) : 
      <div className="empty-state">
          <img
            src='../../assets/photo.jpg'
            alt="No Expenses"
            className="empty-image"
          />
          <label>Your bill list is empty.</label>
        </div>
      }
  
      {/* {filteredList.length ? (
        filteredList.map((item) => (
          <Card item={item} notifySuccess={notifySuccess} />
        ))
      ) : (
        <div className="empty-state">
          <img
            src={require("../../assets/images/empty.png").default}
            alt="No Expenses"
            className="empty-image"
          />
          <label>Uh Oh! Your expense list is empty.</label>
        </div>
      )} */}
    </div>
  )
}
