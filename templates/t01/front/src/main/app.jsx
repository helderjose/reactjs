import React from 'react'
import { Link } from 'react-router'
// import { PrimaryButton, SecondaryButton } from '../components/buttons/buttons'

import '../common/common.css'

export default props => (
  <div>
    <h1>src/main/app.jsx</h1>
    <Link to='login'>Login</Link><br />
    <Link to='register'>Register</Link><br />
    <Link to='about'>About</Link><br />
    <Link to='todo'>Todo</Link>
    {props.children}
  </div>
)