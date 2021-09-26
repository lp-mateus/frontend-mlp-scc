import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { red } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  fontFamily: '"Segoe UI"',
  borderRadius: '1rem',
  color: "whitesmoke",
  backgroundColor: red[300],
  '&:hover': {
    backgroundColor: red[700],
  },
}));

export default function CustomizedButtons(props) {
  // Váriavel de estado - Hook useState
  const [count, setCount] = useState(0);

  // Método complexo que utiliza o setCount (Atualiza o estado)
  function incrementar(){
    setCount(count + 1);
    console.log(count);
  }

  return (
    <Stack spacing={2} direction="row">
      <ColorButton variant="contained" onClick={incrementar}>{props.name}</ColorButton>
    </Stack>
  );
}
