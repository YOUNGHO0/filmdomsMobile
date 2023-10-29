'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './TabContent.module.css'
import TabContentList from "@/app/views/mainview/TabContentList";
import {useEffect, useState} from "react";


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default function TabBoard({recent,movie}) {
    const [value, setValue] = useState(0);

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return mounted && (
        <Box sx={{ width: '100%' }}>
            <Box style={{ width:"100%", borderBottom: 1, borderColor: 'divider'}}>
                <Tabs  textColor={"inherit"} value={value} onChange={handleChange} TabIndicatorProps={{style: {background:"none", borderBottom:"#FF5414 2px solid"}}} >
                    <Tab className={value===0 ? styles.tab: styles.tab2 } label="Recent" />
                    <Tab className={value===1 ? styles.tab: styles.tab2 } label="Movie" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <TabContentList data = {recent}></TabContentList>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <TabContentList data = {movie}></TabContentList>
            </CustomTabPanel>
        </Box>
    );
}