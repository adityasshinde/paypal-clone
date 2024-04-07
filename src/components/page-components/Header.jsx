import React from 'react'
import OptionItem from './OptionItems';

const Header = () => {
  return (
    <div className="bg-white w-full py-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-center">
          <OptionItem>Account</OptionItem>
          <OptionItem>Security</OptionItem>
          <OptionItem>Data & Privacy</OptionItem>
          <OptionItem>Payments</OptionItem>
          <OptionItem>Notifications</OptionItem>
          <OptionItem active={true}>Seller tools</OptionItem>
          <OptionItem>Statements & taxes</OptionItem>
        </div>
      </div>
  )
}

export default Header;