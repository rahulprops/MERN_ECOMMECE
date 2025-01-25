import React from 'react'
import MainSection from './MainSection'
import ShopByCategory from '../../pages/ShopByCategory'
import FeatusProducts from './FeatusProducts'
import Account from '../../pages/Accout'
import Checkout from '../../pages/Checkout'

const ShowMainContent = () => {
  return (
    <div>
        <MainSection/>
        <ShopByCategory/>
        <FeatusProducts/>
        <Account/>
        <Checkout/>
    </div>
  )
}

export default ShowMainContent