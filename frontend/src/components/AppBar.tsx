/* src/components/AppBar.tsx
   Fixed top nav with MapleMigrant logo + Home / Blog links
---------------------------------------------------------------- */
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';

/* -------------- helper for active link colour -------------- */
function NavLink({
  to,
  label,
}: {
  to: string;
  label: string;
}) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Link
      to={to}
      className={`px-4 py-2 text-m font-medium ${
        isActive
          ? 'text-white'
          : 'text-neutral-700 hover:text-white'
      } transition-colors`}
    >
      {label}
    </Link>
  );
}

/* -------------- app bar -------------- */
export default function AppBar() {
  return (
    <header className="bg-red-700  sticky top-0 z-30  border-b border-black/20 shadow-sm ">
      <nav className=" max-w-[1100px] mx-auto flex items-center justify-between px-6 h-14">
        {/* logo */}
        <Link to="/" className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faCanadianMapleLeaf}
            style={{ color: 'white', fontSize: '26px' }}
          />
          <span className="text-lg font-semibold text-white">
            MapleMigrant
          </span>
        </Link>

        {/* nav links */}
        <div className="flex items-center gap-1">
          <NavLink to="/" label="Home" />
          <NavLink to="/blogs" label="Blog" />
        </div>
      </nav>
    </header>
  );
}
