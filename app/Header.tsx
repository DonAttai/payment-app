import NavLink from "./nav-link";

const Header = () => {
  return (
    <header className="font-bold text-lg flex items-center justify-between px-16 h-16">
      <div>Payment App</div>
      <div className="space-x-4">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/register">Register</NavLink>
        <NavLink href="/login">Login</NavLink>
      </div>
    </header>
  );
};

export default Header;
