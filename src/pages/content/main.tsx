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
import {Badge, Chip, Divider, IconButton, InputBase, Paper} from "@mui/material";
import {Menu, Search, Directions, Favorite, Face} from "@mui/icons-material";
import MiniDrawer from "@/components/drawer";
import {useState} from "react";
import MainModal from "@/components/modal/mainModal";
import * as React from "react";

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
    const [count, setCount]  = useState(1)

    const onIncrease = () => {
        setCount(count + 1);
    }

    const handleClick = (...rest: any[]) => {
        const index = rest[0]
        console.info("clicked ")
        // dispatch(increaseTagCount(index))
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
                    paddingLeft: '2rem'
                }}>
                    <img src={"/logo.png"} style={{
                        width: 120,
                        height: 120,
                        margin: 20
                    }}/>
                    <Typography variant="h6" gutterBottom>
                        소소식탁
                    </Typography>
                    <MainModal/>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '10px'
                    }}>
                        <Badge badgeContent={count} color="primary" style={{
                            margin: 10
                        }}>
                            <Chip
                                icon={<Face />}
                                label="팥붕"
                                onClick={onIncrease}
                                onDelete={handleDelete}
                            />
                        </Badge>
                        <Badge badgeContent={count} color="primary" style={{
                            margin: 10
                        }}>
                            <Chip
                                label="데이먼스 이어"
                                onClick={onIncrease}
                                onDelete={handleDelete}
                            />
                        </Badge>
                        <Badge badgeContent={4} color="primary" style={{
                            margin: 10
                        }}>
                            <Chip
                                label="매운거"
                                onClick={handleClick}
                                onDelete={handleDelete}
                            />
                        </Badge>
                        <Badge badgeContent={4} color="primary" style={{
                            margin: 10
                        }}>
                            <Chip
                                label="운동"
                                onClick={handleClick}
                                onDelete={handleDelete}
                            />
                        </Badge>
                        <Badge badgeContent={4} color="primary" style={{
                            margin: 10
                        }}>
                            <Chip
                                label="초콜렛"
                                onClick={handleClick}
                                onDelete={handleDelete}
                            />
                        </Badge>
                        <Badge badgeContent={4} color="primary" style={{
                            margin: 10
                        }}>
                            <Chip
                                label="INFJ"
                                onClick={handleClick}
                                onDelete={handleDelete}
                            />
                        </Badge>
                        {
                            info.tag.map((element: Info | any, index: number) => (
                                <Badge
                                    badgeContent={element.count}
                                    color="primary"
                                    key={index}
                                    style={{
                                        margin: 10
                                    }}>
                                    <Chip
                                        label={element.value}
                                        onClick={() => handleClick(index)}
                                        onDelete={() => handleDelete(index)}
                                    />
                                </Badge>
                            ))
                        }
                    </Box>

                </Box>
            </main>
        </>
    )
}
