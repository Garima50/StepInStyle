// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Trending This Week</h2>
      <div className="row">
        <div className="col-4">
          <Link to="/prod14">
            <img src="Imagess/Jc/p14jc4.webp" className="nail" alt="Black Luxe" />
            <h4 className="shoename">Black Luxe</h4>
          </Link>
        </div>

        <div className="col-4">
          <Link to="/prod13">
            <img src="Imagess/Jc/p13jc6.webp" className="nail" alt="Luxe Elegance" />
            <h4 className="shoename">Luxe Elegance</h4>
          </Link>
        </div>

        <div className="col-4">
          <Link to="/prod27">
            <img src="Imagess/Jc/p27jc4.webp" className="nail" alt="Luxe Pastels" />
            <h4 className="shoename">Luxe Pastels</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
