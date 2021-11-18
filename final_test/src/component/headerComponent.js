/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { NavLink } from 'react-router-dom';
function Header () {
    return(
        <div>
                <div className="nav">
                    <div>
                        <NavLink to='/home' >home</NavLink>
                    </div>
                    <div>
                        <NavLink to='/menu' >menu</NavLink>
                    </div>
                    <div>
                        <NavLink to='/about' >about</NavLink>
                    </div>
                    <div>
                        <NavLink to='/contact' >contact</NavLink>
                    </div>
                </div>
        </div>
    )
}

export default Header;