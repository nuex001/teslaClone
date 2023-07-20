import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <footer>
    <Link to="/" target='_blank'>
    Tesla © 2023
    </Link>
    <Link to="" target='_blank'>
    Privacy & Legal
    </Link>
    <Link to="" target='_blank'>
    Vehicle Recalls
    </Link>
    <Link to="" target='_blank'>
    News
    </Link>
   </footer>
  )
}

export default Footer