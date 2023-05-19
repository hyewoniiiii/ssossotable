import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useRouter} from 'next/router'
import { useAppDispatch, useAppSelector, setInfo, addTag, increaseTagCount } from "@/components/store";
import {Badge, Chip, Divider, IconButton, InputBase, ListItemAvatar, Paper} from "@mui/material";
import {Menu, Search, Directions, Favorite, Face} from "@mui/icons-material";
import MiniDrawer from "@/components/drawer";
import {useState} from "react";
import MainModal from "@/components/modal/mainModal";
import * as React from "react";
import FriendSearchModal from "@/components/modal/friendSearchModal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

const inter = Inter({ subsets: ['latin'] })

interface Info {
    id: string,
    password: string,
    nickname: string,
    tag: []
}

export default function Home() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const info: any | Info = useAppSelector(state => state.userInfo)

    const handleClick = (...rest: any[]) => {
        const index = rest[0]
        dispatch(increaseTagCount(index))
    };

    const handleDelete = (...rest: any[]) => {
        console.info('You clicked the delete icon.');
    };

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <MiniDrawer/>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    paddingTop: '4rem',
                    paddingLeft: '3rem'
                }}>
                    <FriendSearchModal/>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', mt: '10px' }}>
                        <ListItemButton alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="김감자"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >

                                        </Typography>
                                        {"_potato_kim"}
                                    </React.Fragment>
                                }
                            />
                        </ListItemButton>
                        <Divider variant="inset" component="li" />
                        <ListItemButton alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="왕고구마"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >

                                        </Typography>
                                        {"_big_sweet_potato"}
                                    </React.Fragment>
                                }
                            />
                        </ListItemButton>
                        <Divider variant="inset" component="li" />
                        <ListItemButton alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="이햇살"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >

                                        </Typography>
                                        {"sLee"}
                                    </React.Fragment>
                                }
                            />
                        </ListItemButton>
                        <Divider variant="inset" component="li" />
                    </List>
                </Box>
            </main>
        </>
    )
}
