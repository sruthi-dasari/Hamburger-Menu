import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import './index.css'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

const Header = () => {
  const overlayStyles = {
    backgroundColor: '#ffff',
  }

  return (
    <div className="header-container">
      <Link to="/">
        <button type="button" className="logo-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="website-logo-img"
          />
        </button>
      </Link>
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <button
              type="button"
              className="hamburger-btn"
              data-testid="hamburgerIconButton"
            >
              <GiHamburgerMenu className="hamburger-img" />
            </button>
          }
          overlayStyle={overlayStyles}
          className="popup-content"
        >
          {close => (
            <div className="popup-outer-box">
              <button
                type="button"
                className="trigger-button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose className="close-icon" />
              </button>
              <ul className="links-box">
                <Link
                  to="/"
                  className="home-about-link"
                  onClick={() => close()}
                >
                  <li className="box-container">
                    <AiFillHome className="home-about-icon" />
                    <h1 className="home-about-text">Home</h1>
                  </li>
                </Link>
                <Link
                  to="/about"
                  className="home-about-link"
                  onClick={() => close()}
                >
                  <li className="box-container">
                    <BsInfoCircleFill className="home-about-icon" />
                    <h1 className="home-about-text">About</h1>
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}
export default Header
