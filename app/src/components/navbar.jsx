import { link, NavLink } from 'react-router-dom'

const navbar = () => {
    return (
        <div>
            <nav>
                <h1>
                    <link to="/">Mercadito de Juan</link>
                </h1>

                <ul>
                    <li>
                        <NavLink to="/category/phones">Telefono</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tablets">Tablets</NavLink>
                    </li>
                    <li>
                        <NavLink to="/notebooks">NoteBooks</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        );
    };