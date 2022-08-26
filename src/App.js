import logo from './logo.svg';
import './App.css';
import {Outlet,NavLink} from 'react-router-dom'

function App() {
  return (
    <div>
      <div style={{borderBottom:"1px solid white"}}>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/">Bài Tập React</NavLink>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink 
                className={({isActive})=> isActive ? 'bg-light text-dark nav-link' : 'nav-link' } 
                to="/component">Bài tập Component <span className="visually-hidden">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link' : 'nav-link' } to="/glasses">Bài tập Glasses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link' : 'nav-link' } to="/exercisecart">Exercise Cart</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link' : 'nav-link' } to="/reactform">ReactJS Form</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link' : 'nav-link' } to="/bookingticket">Booking Ticket</NavLink>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">Action 1</a>
                  <a className="dropdown-item" href="#">Action 2</a>
                </div>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
      <div style={{ minHeight: 650 }}>
        <Outlet />
      </div>
      <footer className="bg-dark text-white text-center p-5" style={{borderTop:'1px solid white'}}>
        @BaiTapReact <span style={{fontSize:"20px"}}> Trần Hoàng Khải BC30</span>
      </footer>
    </div>
  );
}

export default App;
