import React from 'react';
import { Box } from '@mui/material';

const BilibiliPlayer = ({ bvid }) => {
return (
<Box
component="iframe"
sx={{
width: '100%',
height: '500px',
border: 'none',
}}
src={`https://player.bilibili.com/player.html?bvid=${bvid}`}
allowFullScreen
/>
);
};

export default BilibiliPlayer;