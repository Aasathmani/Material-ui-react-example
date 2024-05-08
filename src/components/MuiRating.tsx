import {Stack,Rating} from "@mui/material";
import React, { useState } from "react";

export const MuiRating=()=>{
    const [rating,setRating]=useState<number | null>(null);
    console.log(rating);
    const handleChange=(_event: React.ChangeEvent<{}>,newValue: number | null)=>{
        setRating(newValue)

    }
    
    return(
        <Stack><Rating value={rating} onChange={handleChange} precision={0.5}/></Stack>
    )
}