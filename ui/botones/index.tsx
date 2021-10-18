import styled from 'styled-components';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export const TextButton =styled(Button).attrs((props)=> ({
  variant: "text",
}))`
  color: #ffffff;
  font-family: "Source Code Pro";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.015em;
  text-transform: capitalize;

`

export const OutlinedButton =styled(Button).attrs((props)=> ({
  variant: "outlined",
}))`
  color: #ffffff;
  font-family: Source Code Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.015em;
  text-transform: capitalize;
  border: 1.5px solid #ffffff;
  padding: 6px 16px;
  background-color: #000000;
  &.MuiButton-root:hover {
    border-color: #FF5E5C;
    color: #FF5E5C;
  }
`

export const OutlinedCoralButton = styled(Button).attrs((props)=> ({
  variant: "outlined",
}))`
  color: #000;
  font-family: Source Code Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.015em;
  text-transform: capitalize;
  border: 1.5px solid #ffffff;
  padding: 6px 16px;
  background-color: #FF5E5C;
  &.MuiButton-root:hover {
    border-color: #FF5E5C;
    color: #ffffff;
  }
`

export const OutlinedIconButton = styled(IconButton).attrs((props)=> ({
}))`
  color: #fff;
  border: 1.5px solid #ffffff;
  &.MuiIconButton-root:hover {
    border-color: #FF5E5C;
    color: #FF5E5C;
  }
`
