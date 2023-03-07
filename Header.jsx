import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css"
import {FaUserAlt, FaShoppingCart, FaHome} from "react-icons/fa"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Header = ({cartItems}) => {
    const [header,setHeader ] = useState(false)
    return (
        <header className={styles.header}>
        <div>
            <h1>
                <Link to="/" className={styles.logo}>
                    Sally's Kitchen Solution Shop
                    </Link>              
            </h1>
        </div>
        <div className={styles.headerlink}>
        <ul className={header ? [styles.menu , styles.active].join(" ") : [styles.menu]}>
                <li>
                    <Link to="/"><FaHome/></Link>
                </li>
            
            
                <li>
                    <Link to="/sign Up" className={styles.user}><FaUserAlt/>
                        </Link>
                </li>

                <li>
                    <Link to="/cart" className={styles.cart}><FaShoppingCart/>
                    <span className= {styles.cartnumber}>
                        {cartItems.length === 0 ? "" : cartItems.length}
                    </span>
                    </Link>
                </li>
            </ul>
            </div>
            <div onClick={() => setHeader(!header)} className={styles.mobile_btn}>
                    {header ? <AiOutlineClose  size={23}/> : <AiOutlineMenu  size={23}/>}
                    </div>
                   
        
                   
        </header>
    );
}

export default Header;
