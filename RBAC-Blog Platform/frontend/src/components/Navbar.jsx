import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="navbar">
      <span><a href="/">RBAC Blog</a></span>
      <div>
        {user ? (
          <>
            <span>Hello, {user.name}</span>
            {user.role === "admin" && <a href="/admin">Admin</a>}
            <button onClick={logout} style={{ marginLeft: '12px' }}>Logout</button>
          </>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/signup" style={{ marginLeft: '12px' }}>Signup</a>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
