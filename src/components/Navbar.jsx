import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      const name = localStorage.getItem("username");
      setUser(loggedIn ? name : null);
    };

    checkUser();
    window.addEventListener("storage", checkUser); // Syncs when login happens
    return () => window.removeEventListener("storage", checkUser);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
    window.dispatchEvent(new Event("storage"));
  };

  const linkStyle = ({ isActive }) =>
    `font-black uppercase text-sm tracking-widest px-4 py-2 border-2 border-transparent transition-all ${
      isActive ? "bg-black text-white border-black" : "hover:bg-[#FF4500] hover:text-white"
    }`;

  return (
    <nav className="w-full border-b-8 border-black bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="text-3xl font-black italic uppercase tracking-tighter">
          DO<span className="text-[#FF4500]">IT.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          
          {/* ONLY SHOW IF LOGGED IN */}
          {user && (
            <>
              <NavLink to="/dashboard" className={linkStyle}>Dashboard</NavLink>
              <NavLink to="/todo" className={linkStyle}>Main Todo</NavLink>
            </>
          )}

          <div className="h-8 w-1 bg-black mx-2"></div>

          {user ? (
            <div className="flex items-center gap-4">
              <span className="font-black italic text-[#FF4500]">WELCOME, {user.toUpperCase()}</span>
              <button onClick={handleLogout} className="bg-black text-white px-4 py-2 font-black text-xs uppercase border-2 border-black hover:bg-white hover:text-black transition-all">
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="font-black uppercase text-sm px-4">Login</Link>
              <Link to="/signup" className="bg-[#FF4500] text-white border-4 border-black px-6 py-2 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Join
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden font-black border-4 border-black px-2">
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b-8 border-black p-6 flex flex-col gap-4">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={linkStyle}>Home</NavLink>
          {user && (
            <>
              <NavLink to="/dashboard" onClick={() => setIsOpen(false)} className={linkStyle}>Dashboard</NavLink>
              <NavLink to="/todo" onClick={() => setIsOpen(false)} className={linkStyle}>Main Todo</NavLink>
            </>
          )}
          {user ? (
            <button onClick={handleLogout} className="bg-black text-white py-3 font-black uppercase">Logout</button>
          ) : (
            <Link to="/login" className="text-center font-black border-4 border-black py-3 uppercase">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
}