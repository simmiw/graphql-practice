import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Launches</Link>
        </li>
        <li>
          <Link to="/ships">Ships</Link>
        </li>
      </ul>
    </nav>
  )
}
