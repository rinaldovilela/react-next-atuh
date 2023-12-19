"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <Navbar  className="bg-green-200">
      <NavbarBrand>
        <a href="/" className="font-bold text-inherit">BEMVIVENDO</a>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link
            color="success"
            href="/"
            className={`link ${pathname === "/" ? "active" : ""}`}
          >
            Início
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            color="success"
            href="/cadastrareventos"
            aria-current="page"
            className={`link ${
              pathname === "/cadastrareventos" ? "active" : ""
            }`}
          >
            Cadastrar Eventos
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            color="success"
            href="/minhassenhas"
            className={`link ${pathname === "/minhassenhas" ? "active" : ""}`}
          >
            Minhas senhas
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login" color="success">Entrar</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="success" href="/cadastro" variant="flat">
            Cadastre-se
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
