import {Box, TextField, MenuItem} from "@mui/material";
import React, { useState } from "react";

export const MuiSelect=()=>{
    const [countries,setCountries]=useState<string[]>([]);
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const value=event.target.value;
        setCountries(typeof value==='string' ? value.split(","): value);
        console.log(countries)
    }
    return(
        <Box width="240px">
            <TextField label="Select the country" select value={countries} onChange={handleChange} fullWidth SelectProps={{multiple:true}} size="small" color="secondary" helperText='please select the counrty' >
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="AU">Australia</MenuItem>
                <MenuItem value="PK">Pakistan</MenuItem>

            </TextField>
        </Box>

    )
}