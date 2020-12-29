import Footer from "./Footer";
import Nav from "./Nav";
import SEO from "./SEO";

export default function Layout({ children }) {
  return (
    <div className="bg-white pr-6 pl-6 pt-11 pb-11">
      <SEO />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
