import { FC, useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface RadioButtonItem {
  value: string;
  label: string;
}
interface RadioButtonGroupProps {
  radioButtonGroupLabel: string;
  radioButtonList: RadioButtonItem[];
  defaultRadioButtonValue: string;
  changePointUseState: React.Dispatch<React.SetStateAction<string>>;
}

const RadioButtonGroup: FC<RadioButtonGroupProps> = ({
  radioButtonGroupLabel,
  radioButtonList,
  defaultRadioButtonValue,
  changePointUseState,
}: RadioButtonGroupProps) => {
  const [value, setValue] = useState('getPoint');
  useEffect(() => {
    changePointUseState(value);
  }, [value]);
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{radioButtonGroupLabel}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        row
        value={value}
        name="radio-buttons-group"
        onChange={(e: any) => {
          setValue(e.target.value);
        }}
      >
        {radioButtonList.map((e, index) => (
          <FormControlLabel key={index} value={e.value} control={<Radio />} label={e.label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default RadioButtonGroup;
