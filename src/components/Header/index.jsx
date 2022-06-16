import { useContext, useState } from "react";
import logo_img from "../../assets/logo/logo.svg";
import menu_icon from "../../assets/icons/icon-menu.svg";
import close_icon from "../../assets/icons/icon-close.svg";
import cart_icon from "../../assets/icons/icon-cart.svg";
import avatar from "../../assets/avatar/image-avatar.png";

import {
  Bars,
  Box,
  BoxIcon,
  Cont,
  HeaderComponent,
  HeaderContainer,
  IconAvatar,
  IconCart,
  IconMenu,
  Logo,
  Menu,
  NavList,
  NavLink,
  Link,
} from "./style";
import { CartContext } from "../../context/providers/cart";
import Cart from "../Cart";

const Header = () => {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <HeaderComponent>
      <HeaderContainer>
        <Box>
          <Bars onClick={() => setIsOpen(!isOpen)}>
            <IconMenu src={isOpen ? close_icon : menu_icon} />
          </Bars>
          <Logo src={logo_img} />
          <Menu isOpen={isOpen}>
            <NavList isOpen={isOpen}>
              <NavLink>
                <Link href="#Collections">Collections</Link>
              </NavLink>
              <NavLink>
                <Link href="#Men">Men</Link>
              </NavLink>
              <NavLink>
                <Link href="#Women">Women</Link>
              </NavLink>
              <NavLink>
                <Link href="#About">About</Link>
              </NavLink>
              <NavLink>
                <Link href="#Contact">Contact</Link>
              </NavLink>
            </NavList>
          </Menu>
        </Box>
        <Box>
          <BoxIcon onClick={() => setShowCart(!showCart)}>
            <IconCart src={cart_icon} />
            {cart.length > 0 ? (
              <Cont>{cart.reduce((acc, item) => acc + item.quant, 0)}</Cont>
            ) : null}
          </BoxIcon>
          {showCart ? <Cart /> : ""}
          <IconAvatar src={avatar} />
        </Box>
      </HeaderContainer>
    </HeaderComponent>
  );
};
export default Header;