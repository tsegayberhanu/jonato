"use client"
import React, { useContext } from 'react'
import { AppUserContext } from '../Contexts/AppUserProvider';
const UserInfoCard = () => {
    const { first_name } = useContext(AppUserContext);
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-white">{first_name ? first_name : "user"}</div>
    </div>
  )
}
export default UserInfoCard