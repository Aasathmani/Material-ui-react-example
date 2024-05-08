import { Box, FormControl,FormLabel,FormControlLabel,RadioGroup,Radio} from "@mui/material";
import { useState } from "react";

export const MuiRadioButton=()=>{
    const [value,setValue]=useState('');
    console.log({value})
    const radioButtonChanged=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    
    }
    return (
        <Box>
            <FormControl>
                <FormLabel id='job-experience-group-label'>
                    Year of experience
                </FormLabel>
                <RadioGroup value={value} onChange={radioButtonChanged} row>
                    <FormControlLabel control={<Radio size="small" color="secondary"/>} label="0-2" value="0-2"/>
                    <FormControlLabel control={<Radio size="small" color="secondary"/>} label="2-4" value="2-4"/>
                    <FormControlLabel control={<Radio size="small" color="secondary"/>} label="4-6" value="4-6"/>
                </RadioGroup>
            </FormControl>
        

        </Box>
    )
}