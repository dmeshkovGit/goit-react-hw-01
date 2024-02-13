import { useState } from 'react'
import styles from './App.module.css'
import { Profile } from '../Profile/Profile'
import userData from '../../userData.json'
import { TaskTitle } from '../TaskTitle/TaskTitle'

export const App = () => {
  return (
    <>
      <TaskTitle>Task №1</TaskTitle>
      <Profile userData={userData}/>
      <hr />
      <TaskTitle>Task №2</TaskTitle>
    </>
  )
}


