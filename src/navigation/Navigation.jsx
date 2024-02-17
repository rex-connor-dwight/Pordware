import React, { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false); // Scrolling down, hide the button
      } else {
        setIsVisible(true); // Scrolling up, show the button
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navigation ${isVisible ? '' : 'hidden'}`}>
      <button className='nav--button'>Pordware</button>
    </div>
  );
}

export default Navigation;
