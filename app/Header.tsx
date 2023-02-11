import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-slate-800 text-white font-bold text-lg flex items-center justify-between px-5 h-16">
      <div>Payment App</div>
      <ul className="flex gap-4 ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
