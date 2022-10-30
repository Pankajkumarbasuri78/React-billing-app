import React from 'react'
import { BillList } from '../../components/bill-list/BillList';
import { TopBar } from '../../components/top-bar/TopBar.jsx';

import './home.css'

export const Home = () => {
  return (
    <div className='home'>
      <TopBar />
      <BillList />
    </div>
  )
}
