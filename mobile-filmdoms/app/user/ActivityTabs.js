import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {toDate} from "@/app/util/clientUtil";

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
                <Box sx={{ p: 2  }}>
                    <div>{children}</div>
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

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ActivityTabs(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const clicked = {
        width:"50%",
        color:"#FF5414",
        fontWeight:"700"
    }

    const unclicked = {
        width:"50%",
        color:"#AAAAAA",
        fontWeight:"700"
    }


    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{width:"100%"}}>
                <Tabs sx={{width:"100%"}} TabIndicatorProps={{style: {background:"none", borderBottom:"#FF5414 2px solid"}}} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab  style={value===0 ? clicked: unclicked} label="작성글" {...a11yProps(0)} />
                    <Tab style={value===1 ? clicked: unclicked} label="작성댓글" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <UserArticleActivityList data = {props.writtenArticles}></UserArticleActivityList>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <UserCommentActivityList data = {props.writtenComments}></UserCommentActivityList>
            </CustomTabPanel>
        </Box>
    );
}


function UserArticleActivityList(props){

    return <div>
        {props.data.map((value)=><ArticleActivity data={value}></ArticleActivity>)}
    </div>

    function ArticleActivity(props){
        let data = props.data
        return <div>
            <div style={{width:"100%",display:"flex",padding:"15px 0px"}}>
                <div style={{paddingRight:"15px",overflow:"hidden",fontSize:"12px",fontWeight:"700"}}>{data.title}</div>
                <div style={{marginLeft:"auto",color:"#888",fontSize:"14px",fontWeight:"500"}}>{toDate(data.createdAt)}</div>
            </div>
            <hr style={{color:"#AAAAAA", opacity:"0.6"}}></hr>
        </div>

    }

}

function UserCommentActivityList(props) {

    return <div>
        {props.data.map((value) => <CommentActivity data={value}></CommentActivity>)}
    </div>

    function CommentActivity(props) {
        let data = props.data
        console.log(data)
        return <div>
            <div style={{width: "100%", display: "flex", padding: "15px 0px"}}>
                <div style={{
                    paddingRight: "15px",
                    overflow: "hidden",
                    fontSize: "12px",
                    fontWeight: "700"
                }}>{data.content}</div>
                <div style={{
                    marginLeft: "auto",
                    color: "#888",
                    fontSize: "14px",
                    fontWeight: "500"
                }}>{toDate(data.createdAt)}</div>
            </div>
            <hr style={{color: "#AAAAAA", opacity: "0.6"}}></hr>
        </div>

    }


}