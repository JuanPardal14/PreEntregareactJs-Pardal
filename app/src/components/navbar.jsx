import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <div>
      <nav>
        <h1>
          <Link to="/">Mercadito de Juan</Link>
        </h1>

        <ul>
          <li>
            <NavLink to="/category/phones">Teléfono</NavLink>
          </li>
          <li>
            <NavLink to="/category/tablets">Tablets</NavLink>
          </li>
          <li>
            <NavLink to="/category/notebooks">Notebooks</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </div>
  );
};

export default Navbar;
