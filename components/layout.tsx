import { ComponentProps } from "../lib/type";
import Nav from "./nav";
import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ children }: ComponentProps) {
  return (
    <>
      <div className="min-h-screen bg-primary-color">
        <div className="h-16">
          <Nav></Nav>
        </div>
        <Alert />
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </>
  );
}
