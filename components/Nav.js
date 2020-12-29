import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center">
        <li>
          <Link href="/">
            <img src="/logo.svg" className="w-10" />
          </Link>
        </li>
        <div className="flex">
          <li className="ml-2">
            <Link href="/">
              <h5 className="text-orange">Posts</h5>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/">
              <h5 className="text-orange">Doodles</h5>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
