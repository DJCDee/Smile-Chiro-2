import { Link } from "@tanstack/react-router";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="grid text-3xl font-bold underline">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </header>
      <main>{children}</main>
      <footer>
        <p>Some Footer paragraph</p>
      </footer>
    </>
  );
}
