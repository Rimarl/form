import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './nav.css'
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="" className="site-title">
        Point de vente Mobilis 
      </Link>
      <ul>
        {/* indiquer vers quel route aller quand on clique */}
   <CustomLink to="/home">Acceuil</CustomLink>
   <CustomLink to="/sim">Carte SIM</CustomLink>
   <CustomLink to="/carte">Carte Recharge</CustomLink>
   <CustomLink to="/stock">Mon stock </CustomLink>

      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}