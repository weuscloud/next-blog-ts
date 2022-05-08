import { ComponentProps } from "../lib/type";
import Nav from "./nav";
import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ children }: ComponentProps) {
  return (
    <>
    <Meta/>
      <div className="min-h-screen bg-gray-1">
        <Nav/>
        <Alert />
        <main>{children}</main>
      </div>
     
    </>
  );
}
