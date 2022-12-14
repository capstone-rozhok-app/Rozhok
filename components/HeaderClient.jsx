import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { Button } from "react-bootstrap";
import cookie from "js-cookie";
import Router from "next/router";
// import Cookies from "js-cookie";

const HeaderClient = () => {
    const handleLogOut = async () => {
        await cookie.remove("token");
        Router.push({ pathname: "/client" });
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="alpukat" sticky="top">
            <Container>
                <Navbar.Brand>
                    <Link href="/client/dashboard">
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
                        <Link href="/client/toko">
                            <a className="text-putih fs-5 fw-bold text-decoration-none mx-3 mt-3 mt-lg-0 ">Toko</a>
                        </Link>
                        <Link href="/client/toko/cart">
                            <a className="text-putih fs-5 fw-bold text-decoration-none mx-3 mt-3 mt-lg-0">Keranjang</a>
                        </Link>
                        <Link href="/client/jual-rosok">
                            <a className="text-putih fs-5 fw-bold text-decoration-none mx-3 mt-3 mt-lg-0">Jual Rosok</a>
                        </Link>
                        <Link href="/client/transaksi">
                            <a className="text-putih fs-5 fw-bold text-decoration-none mx-3 mt-3 mt-lg-0">Transaksi</a>
                        </Link>
                        <Link href="/client/profile">
                            <a className="text-putih fs-5 fw-bold text-decoration-none mx-3 mt-3 mt-lg-0">Profile</a>
                        </Link>

                        <Button style={{ marginTop: -7 }} variant="alpukat" className=" text-putih fs-5 fw-bold text-decoration-none ms-3" onClick={() => handleLogOut()}>
                            Logout
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderClient;
