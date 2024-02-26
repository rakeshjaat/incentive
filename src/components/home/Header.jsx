import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navLogo from "../../assets/images/svg/logo.svg";
import { navLinks } from "../common/Helper";
import CustomButton from "../common/CustomButton";

function Header() {
  return (
    <Navbar expand="lg" className="bg-blue py-2 position-fixed top-0 end-0 start-0 z-3">
      <Container className="container_modified">
        <div className="nav_logo_parent">
          <Navbar.Brand className="py-0" href="#home">
            <img src={navLogo} alt="navLogo" />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="gap-4 gap-lg-5 justify-content-center align-items-center align-items-lg-start pt-4 pt-lg-0 my-4 my-lg-0">
            {navLinks.map((obj, index) => {
              return (
                <Nav.Link
                  className={`font-sm p-0 nav_hover transition_03s position-relative ${
                    index === 0 ? "nav_line text-orange" : "text-white"
                  }`}
                  key={index}
                  href={obj.url}
                >
                  {obj.link}
                </Nav.Link>
              );
            })}
            <CustomButton text="Login" btnStyle="nav_btn bg-orange d-lg-none w-100" />
          </Nav>
        </Navbar.Collapse>
        <div className="w-100 d-none d-lg-flex justify-content-end">
          <CustomButton text="Login" btnStyle="nav_btn bg-orange" />
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
