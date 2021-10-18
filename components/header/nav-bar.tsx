import React from 'react'
import { StyledAppBar, StyledToolbar, LogoAppBar, StyledTextButton, GridItem, StyledOutlinedButton, StyledOutlinedCoralButton, StyledIconButton } from './nav-bar.styled'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function NavBar() {
  return (
    <StyledAppBar position="static">
        <StyledToolbar>
          <GridItem>
            <LogoAppBar src="images/apx-logo.png" />
            <StyledTextButton>Subí tu Recurso</StyledTextButton>
            <StyledTextButton>Equipo</StyledTextButton>
          </GridItem>
          <GridItem>
            <StyledIconButton>
              <SearchOutlinedIcon />
            </StyledIconButton>
            <StyledOutlinedButton>Ingresá</StyledOutlinedButton>
            <StyledOutlinedCoralButton>Registrate</StyledOutlinedCoralButton>
          </GridItem>
        </StyledToolbar>
      </StyledAppBar>
  )
}

