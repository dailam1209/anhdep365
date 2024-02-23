import React from 'react'
import UserInfor from './userInfor'
import UserContent from './userContent'
import styles from './profileuser.module.css'

const ProfileUser = () => {
  return (
    <div id="profile-creator" className={styles.profile_creator}>
        <UserInfor/>
        <UserContent/>
    </div>
  )
}

export default ProfileUser