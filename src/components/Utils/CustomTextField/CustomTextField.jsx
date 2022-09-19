import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


export default function CustomTextField(props) {
  const {text, inputWidth} = props
  const CssTextField = styled(TextField)({
    "& label":{
      right: "10px"
    },
    '& label.Mui-focused': {
      right:"-25px",
      color:"red"
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
        width: inputWidth,
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        border: "2px red solid",
        borderRadius: "8px",
      },
    },
  });
  return (
<>
<CssTextField dir="rtl" label={text} id="custom-css-outlined-input" />
</>
  );
}
