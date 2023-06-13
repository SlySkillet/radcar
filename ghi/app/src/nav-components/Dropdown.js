import React, {useState} from "react";
import { salesDropdown } from "./NavItems";
import { NavLink} from "react-router-dom";

// see bootstrap documentation to style dropdown

function Dropdown() {
    const [dropdown, setDropdown] = useState(false);
    return(
        <ul className={dropdown ? "sales-submenu d-none" : "sales-submenu"}aria-labelledby="dropDownMenuLink" onClick={()=> setDropdown(!dropdown)}>
        { salesDropdown.map((item) => {
            return (
                <li key={item.id}  >
                    <NavLink to={item.path} className={item.className} onClick={()=> setDropdown(false)}>
                        {item.title}
                    </NavLink>
                </li>
            )
        })}

        </ul>
    )
}

// function Dropdown() {
//     const [dropdown, setDropdown] = useState(false);
//     return(
//         <div className="dropdown-menu" aria-labelledby="dropDownMenuButton" onClick={()=> setDropdown(!dropdown)}>
//         { salesDropdown.map((item) => {
//             return (
//                     <NavLink to={item.path} className={item.className} onClick={()=> setDropdown(false)}>
//                         {item.title}
//                     </NavLink>
//             )
//         })}

//         </div>
//     )
// }


export default Dropdown

// className="dropdown-item"
