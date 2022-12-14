import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { Button } from "react-bootstrap";
import Router from "next/router";
import cookie from "js-cookie";

const HeaderAdmin = () => {
  const handleLogOut = async () => {
    await cookie.remove("token");
    await cookie.remove("role");
    await cookie.remove("username");
    await Router.push({ pathname: "/" });
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="alpukat" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link href="/admin/dashboard">
            <a className="text-putih fs-4 fw-bold  text-decoration-none">
              <img
                style={{ width: 73, height: 90, marginRight: 6 }}
                src="https://cdn.discordapp.com/attachments/1017919526748299295/1025400140292444170/unknown.png"
                alt="logo"
              />
              Rhozok.CO
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Link href="/admin/kategori">
              <a className="text-putih fs-5 fw-bold text-decoration-none mx-3 mt-3 mt-lg-0 ">
                Kategori
              </a>
            </Link>
            <Link href="/admin/porter">
              <a className="text-putih fs-5 fw-bold text-decoration-none mx-3 mt-3 mt-lg-0">
                Porter
              </a>
            </Link>
            <Link href="/admin/produk">
              <a className="text-putih fs-5 fw-bold text-decoration-none mx-3 mt-3 mt-lg-0">
                Produk
              </a>
            </Link>
            <Link href="/admin/junk-station">
              <a className="text-putih fs-5 fw-bold text-decoration-none mx-3 mt-3 mt-lg-0">
                Junk Station
              </a>
            </Link>
            <Link href="/admin/transaksi">
              <a className="text-putih fs-5 fw-bold text-decoration-none mx-3 mt-3 mt-lg-0">
                Transaksi
              </a>
            </Link>

            <Button
              style={{ marginTop: -7 }}
              variant="alpukat"
              className=" text-putih fs-5 fw-bold text-decoration-none ms-3"
              onClick={() => handleLogOut()}
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderAdmin;
