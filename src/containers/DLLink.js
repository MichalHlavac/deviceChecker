import React, { useContext } from "react";
import { Link } from "react-router-dom";

export default () => (
  <Link className='devList' to='/devicelist'>
    <button>SEZNAM ZAŘÍZENÍ</button>
  </Link>
);
