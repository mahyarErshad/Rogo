import * as React from 'react';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import { Box } from '@mui/system';

export default function TicketSearchingRadioButton() {
  const [selectedValue, setSelectedValue] = React.useState("oneWay");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <>
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Radio {...controlProps('oneWay')} />
      <Radio {...controlProps('twoWays')} />
    </Box>
    </>
  );
}
