import Link from 'next/link'
import styles from './styles.module.scss'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';


interface parametros {
    datos: string[]
}
const Page: React.FC<parametros> = ({ datos }) => {
    //
    //Logica JS TSX
    //
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar expand='md' fixed='top'  dark={true}>
        <NavbarBrand href="/">Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink href="/#inicio">
                Inicio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#servicios">
                Servicios
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                Portafolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                Acerca de
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                Contacto
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    )

}


export default Page