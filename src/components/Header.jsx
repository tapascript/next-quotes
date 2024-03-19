import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between bg-slate-900 text-white p-2">
      <h1 className="text-3xl mx-2">QuoteFeed</h1>
      <Link href="/login" className="m-2">Login</Link>
    </nav>
  )
}

export default Header