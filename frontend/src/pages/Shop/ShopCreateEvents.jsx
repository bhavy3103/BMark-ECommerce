import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import CreateEvent from "../../components/Shop/CreateEvent";
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar';

const ShopCreateEvents = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className='800px:w-[22%]'>
          <DashboardSideBar active={6} />
        </div>
        <div className="w-[100%] justify-center flex">
          <CreateEvent />
        </div>
      </div>
    </div>
  )
}

export default ShopCreateEvents