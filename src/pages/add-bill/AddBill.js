import React from 'react'
import { AddForm } from '../../components/add-form/AddForm';
import { TopBar } from '../../components/top-bar/TopBar'
import './addBill.css';

export const AddBill = () => {
  return (
    <div className="add-bill">
      <TopBar />
      <AddForm />
    </div>
  )
}
