import {Box} from "@mui/material";
import { height } from "@mui/system";


export const MuiResponsivess=()=>{
    return(
        <Box sx={{
            height: '300px',
            width:{
                xs: 100,
                sm: 200,
                md: 300,
                lg: 400,
                xl: 500,
            },
            bgcolor: 'primary.main'
        }
        }>

        </Box>
    )
}