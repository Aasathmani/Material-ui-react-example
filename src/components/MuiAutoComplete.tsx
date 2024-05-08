import { Label } from "@mui/icons-material";
import {Stack,Autocomplete,TextField} from "@mui/material";
import { useState } from "react";

type Skill={
    id: number,
    label: string,
}

const skills=["HTML","CSS","JAVASCRIPT","TYPESCRIPT","REACT"];

const skillOptions=skills.map((skill,index)=>({
    id: index+1,
    label: skill,
}))

export const MuiAutoComplete=()=>{
    const [value,setValue]=useState<string | null>(null)
    const [skill,setSkill]=useState<Skill | null>(null)
    console.log(skill)
    console.log(value)
    return (
        <Stack>
            <Autocomplete options={skills} 
            renderInput={(params)=><TextField 
            {...params} label="skills"/>} 
            value={value} 
            onChange={(event: any,newValue: string | null)=>setValue(newValue)} 
            freeSolo/>
            <Autocomplete options={skillOptions} 
            renderInput={(params)=><TextField 
            {...params} label="skills"/>} 
            value={skill} 
            onChange={(event: any,newValue: Skill | null)=>setSkill(newValue)} 
            />
        </Stack>
    )
}
