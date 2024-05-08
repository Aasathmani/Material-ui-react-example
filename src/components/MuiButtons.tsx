import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderLineIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

export const MuiButton = () => {
    const [formats,setFormats]=useState<string | null>(null)
    console.log(
        formats,
    )
    const handleFormatChange=(_event: React.MouseEvent<HTMLElement>,updatedFormats: string | null)=>{
        setFormats(updatedFormats)

    }
    return (
        <Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href="https://google.com">
                    Text
                </Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='contained'>Contained</Button>
            </Stack>
            <Stack direction="row">
                <ButtonGroup variant='contained' orientation="horizontal" size="small" color="secondary" aria-label="alignment button group">
                <Button onClick={()=>{
                    alert('left clicked')
                }} >left</Button>
                <Button >center</Button>
                <Button >right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction="row">
                <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} size="small" color="success" orientation="vertical" exclusive>
                <ToggleButton value="bold" aria-label="bold">
                        bold
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                    italic
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label='underline'>
                    underline
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    );
};

