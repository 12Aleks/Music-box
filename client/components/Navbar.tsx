import React, {FC, useState} from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import {useRouter} from "next/router";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined';
import HomeIcon from '@mui/icons-material/Home';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
    open?:boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const menuItems = [
    {page: 'Home', path: '/'},
    {page: 'Track list', path: '/tracks'},
    {page: 'Album List', path: '/albums'},
];

const Navbar = () => {
    const router = useRouter();
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Music box <MusicNoteOutlinedIcon/>
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div>
                    <IconButton onClick={handleDrawerOpen}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <List>
                    {menuItems.map(({page, path}, index) => (
                        <ListItem key={path} onClick={() => router.push(path)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {
                                        !index ? <HomeIcon/> : index === 2 ? <MusicVideoOutlinedIcon/> :
                                            <MusicNoteOutlinedIcon/>
                                    }
                                </ListItemIcon>
                                <ListItemText primary={page}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};
export default Navbar;
