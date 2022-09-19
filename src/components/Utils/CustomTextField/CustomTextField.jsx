import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
  "& label":{
    right: "0"
  },
  '& label.Mui-focused': {
    right:"-25px"
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
      width: "100%",
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


export default function CustomTextField(props) {
  const {text} = props
  return (
<>
<CssTextField dir="rtl" label={text} id="custom-css-outlined-input" />
</>
  );
}
