import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const CodeArea = ()=> {
  const [language, setLanguage] = useState('C++');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
        <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
        <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={language}
            onChange={handleChange}
            style={{ backgroundColor: 'white'}}
            >
            <MenuItem value="C++"> <em> C++</em></MenuItem>
            <MenuItem value="Java">Java</MenuItem>
            <MenuItem value="Python">Python</MenuItem>
            <MenuItem value="C">C</MenuItem>
        </Select>
        </FormControl>
        <textarea name="" className='bg-gray-200 rounded-lg p-3' id="" cols="60" rows="40"></textarea>
    </div>
  );
}
export default CodeArea