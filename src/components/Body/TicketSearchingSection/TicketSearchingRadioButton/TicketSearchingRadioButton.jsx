import { Box } from '@mui/system';
import React from 'react';
import "../../../../styles/radioButton/radiobutton.css"

export default function TicketSearchingRadioButton() {

  return (
    <>
    <Box dir="rtl" sx={{display:"flex",flexDirection:"row"}}>
    <Box>
        <Box component="input" id="radio-1" className="radio-custom" name="radio-group" type="radio" checked />
            <label for="radio-1" className="radio-custom-label">یک طرفه</label>
        </Box>
    <Box>
        <Box component="input" id="radio-2" className="radio-custom"name="radio-group" type="radio" />
            <label for="radio-2" className="radio-custom-label">رفت و برگشت</label>
        </Box>
    </Box>
        </>
  );
}
