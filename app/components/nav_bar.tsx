import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import Link from "next/link";
import {Button} from "@nextui-org/button";
import React from "react";

function Nav_bar(){
    return (

            <Navbar isBlurred  maxWidth="xl" position="sticky" className=" dark">
                <NavbarBrand>
                    <img
                        src="/images/justibot-logo.png"
                        alt="justibot-logo"
                        width={95}
                    />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-[40px]" justify="end">
                    <NavbarItem>
                        <Link color="foreground" href="/">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            About
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Contact
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link}  href="/login" variant="flat" className="text-customBrown border-customBrown border-2 font-bold"  >
                            Login
                        </Button>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">
                        <Button as={Link}  href="/signup" variant="solid" className="bg-white text-customBrown font-bold ">
                            Sign Up
                        </Button>
                    </NavbarItem>

                </NavbarContent>
            </Navbar>

    )
}
export default Nav_bar;