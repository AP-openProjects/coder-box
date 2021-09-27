import React from 'react'
import { OutlinedTextButton } from '../ui/botones'
import { Root } from './nav-bar.styled';
import Button from '@mui/material/Button';

export default function NavBar() {
  return (
    <Root>
      <OutlinedTextButton variant="outlined">Home</OutlinedTextButton>
      <Button variant="outlined" disabled>Home</Button>
    </Root>
  )
}

