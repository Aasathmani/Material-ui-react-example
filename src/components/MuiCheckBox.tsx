import {Box,FormControlLabel,Checkbox, FormLabel,FormControl,FormGroup} from "@mui/material";
import { useState } from "react";
import BookMarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookMarkIcon from "@mui/icons-material/Bookmark";

export const MuiCheckBox=()=>{
    const [acceptTnC,setAcceptTnC]=useState(false);
    const [skills,setSkills]=useState<string[]>([]);
    console.log({skills})
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setAcceptTnC(event.target.checked);
    }
    const handleSkillsChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const index=skills.indexOf(event.target.value)
        if(index=== -1){
            setSkills([...skills,event.target.value])
        }
        else{
            setSkills(skills.filter((skill)=>skill !==event.target.value))
        }
    }
    return (
        <Box>
            <Box>
            <FormControlLabel label='i accept the terms and condition' control={<Checkbox  checked={acceptTnC} onChange={handleChange}/>} />
            </Box>
            <Box>
                <FormControl><FormLabel>Skills</FormLabel></FormControl>
                <FormGroup>
                <FormControlLabel label='HTML' value="html" control={<Checkbox  checked={skills.includes('html')} onChange={handleSkillsChange}/>} />
                <FormControlLabel label='CSS' value="css" control={<Checkbox  checked={skills.includes('css')} onChange={handleSkillsChange}/>} />
                <FormControlLabel label='JAVASCRIPT' value="javascript" control={<Checkbox  checked={skills.includes('javascript')} onChange={handleSkillsChange}/>} />
                </FormGroup>
            </Box>
        </Box>
    )
}
