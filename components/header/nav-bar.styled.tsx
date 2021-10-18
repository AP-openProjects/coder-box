import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { TextButton, OutlinedButton, OutlinedCoralButton, OutlinedIconButton } from '../../ui/botones';

export const StyledAppBar = styled(AppBar)`
  height: 64px;
  background-color: #060500;
  padding: 0 88px;
  width: 100%;
  `
export const StyledToolbar = styled(Toolbar)`
padding: 12px 0;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const GridItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LogoAppBar = styled.img`
  height: 40px;
  width: 110px;
  margin: 0 12px;
`

export const StyledTextButton = styled(TextButton)`
  margin: 0 12px;
`

export const StyledOutlinedButton = styled(OutlinedButton)`
  margin: 0 12px;
  height: 32px;

`

export const StyledOutlinedCoralButton = styled(OutlinedCoralButton)`
  margin: 0 12px;
  height: 32px;
`

export const StyledIconButton = styled(OutlinedIconButton).attrs({
})`
  margin: 0 12px;
  height: 32px;
  width: 32px;
`