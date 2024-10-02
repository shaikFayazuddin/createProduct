// eslint-disable-next-line no-unused-vars
import React from "react"
import { Link } from "react-router-dom"
const Navbar = ()=>{

  return <div>

    <div>
      <Link to="/">Product Store</Link>
    </div>


    <div>
      {/* <div>
        <button onClick={handleChangeColor}>Color Mode</button>
      </div> */}

      <div>
      <Link to="/create">
          Create Product
      </Link>
      </div>
    </div>

  </div>
}

export default Navbar
