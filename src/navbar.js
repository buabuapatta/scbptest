import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: '#A569BD' }}>
        <h1 className='p-2 mx-2'>
          <i className="fa-solid fa-dragon"></i>
          CRUD</h1>
      </nav>
    </div >
  );
}

export default Navbar;