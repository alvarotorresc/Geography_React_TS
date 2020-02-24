import React from 'react'

const Footer: React.FC = () => {
    return (
        <div className="d-flex flex-column">
        <footer className="footer bg-dark">
          <div>
            <a href="https://coreui.io">CoreUI</a>
            <span>&copy; 2020 creativeLabs.</span>
          </div>
          <div className="ml-auto">
            <span>Powered by</span>
            <a href="https://coreui.io">CoreUI</a>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer;