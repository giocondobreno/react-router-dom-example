import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  padding: 0 1.25rem;
`
export const Logo = styled.img`
  width: 4.25rem;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
`
export const MenuContainer = styled.ul``

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors['base-white']};
    font-weight: 600;
  }
`

export const HeaderSubmitButton = styled.button`
  background: transparent;
  border: 2px solid ${(props) => props.theme.colors['base-white']};
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors['base-white']};
  font-weight: 500;
  width: 9.375rem;
  height: 3.125rem;
  border-radius: 5px;
`
