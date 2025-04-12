import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import NavbarMobile from './NavbarMobile';
import UndrawCat from '../../assets/illustrations/undraw_cat_lqdj.svg';

export default function Navbar() {
  const [scrolling, setScrolling] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full py-4 px-7 md:px-14 z-50 ${scrolling ? 'navbar-scroll' : ''}`}>
      <div className="flex justify-between items-center mx-auto ">
        <div className="flex space-x-10 justify-center items-center">
          <div className="inline-flex items-center space-x-2">
            <img
              className="size-16 md:size-20"
              src={UndrawCat}
              alt=""
              style={{ filter: 'invert(33%) sepia(100%) saturate(500%) hue-rotate(200deg) brightness(90%) contrast(85%)' }} // Adjust filter values to change color
            />
            <Link className="text-3xl md:text-4xl font-inter font-semibold text-primary" to="/">
              PFOLIO.
            </Link>
          </div>
          <div className="menu space-x-10 text-secondary hidden md:block text-base md:text-sm">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <HashLink smooth to="/#projects" className="nav-link">
              Projects
            </HashLink>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
        <div className="action hidden md:flex justify-center items-center gap-4">
          <Link className="btn-action text-xs md:text-xl bg-text-primary border-primary border-0 px-6 py-2 md:px-10 md:py-4 rounded-full text-primary font-bold hover:bg-primary hover:text-background1 border-b-[1px] text-center" to="/contact">
            LET'S TALK
          </Link>
        </div>
        <NavbarMobile />
      </div>
    </nav>
  );
}
