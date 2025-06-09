import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Home />
    </>
  )
}

export default App


// React Homework Assignment
// Hey everyone! As part of your practice, please create a simple Fest App using React. Below are the requirements:

// 🎯 Title: Fest App
// 📋 Fields to Capture:

// Event Name

// Student Name

// Stream

// Year (Dropdown)

// Email

// Phone Number

// ➕ Add a button labeled "Add Student Data" to save the entered data (you can store it in a state array for now).

// ✅ Use proper JSX, components, and state management (useState).
// ✅ Bonus: Try validating the form and clearing it after submission.
// ✅ Bonus: Style the app using Tailwind CSS.