import { AppBar, Button, Toolbar, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <AppBar>
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Typography>Tasty Foods</Typography>
               <Button sx={{textTransform: 'capitalize'}} onClick={() => navigate('/')} variant="link">Home</Button>
            </Toolbar>

            
        </AppBar>
    );
}

export default Navbar;