import {Stack, TextField , InputAdornment} from "@mui/material";
import { useState } from "react";

export const MuiTextField=()=>{
    const [value, setValue]=useState('');
    return(
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <TextField label="name" variant="outlined"></TextField>
                <TextField label="name" variant="filled"></TextField>
                <TextField label="name" variant="standard"></TextField>
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField label="small secondary" size="small" variant="outlined" color="secondary"></TextField>
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField label="form input" required value={value} onChange={(e)=>setValue(e.target.value)} error={!value} helperText={!value? "Required":"do not distrub"} ></TextField>
                <TextField label="password" type="password" helperText="do not share you text to anyone" disabled></TextField>
                <TextField label="read only" InputProps={{readOnly: true}}></TextField>
            </Stack>
            <Stack direction="row" spacing={3}>
                <TextField label="Amount" InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }
                }></TextField>
                <TextField label="weight" InputProps={{
                    endAdornment: <InputAdornment position="end">kg</InputAdornment>
                }}></TextField>
            </Stack>
        </Stack>

    )

}