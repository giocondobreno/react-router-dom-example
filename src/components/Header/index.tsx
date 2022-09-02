import {
  HeaderContainer,
  HeaderSubmitButton,
  ImageContainer,
  Logo,
  MenuContainer,
  MenuList,
} from './styles'
import logo from '../../assets/img/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <ImageContainer>
        <Logo src={logo} alt="" />
        <MenuContainer>
          <MenuList>
            <NavLink to="/">Vector</NavLink>
            <NavLink to="/photos">Photos</NavLink>
            <NavLink to="/psd">PSD</NavLink>
            <NavLink to="/videos">Vídeos</NavLink>
          </MenuList>
        </MenuContainer>
      </ImageContainer>

      <HeaderSubmitButton>+ Submit</HeaderSubmitButton>
    </HeaderContainer>
  )
}
