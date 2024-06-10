import React from 'react';
import { Typography, Card, CardContent, CardMedia, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoVideoUrl
, demoChannelTitle } from '../Api/constants';

const VideoCard = ({ video: {id: {videoId}, snippet}})  => {
  const theme = useTheme();

  return (
    <Card sx={{ width: { xs: '100%', sm: '268px', md: "240px", }, boxShadow: "none", borderRadius: 0, bgcolor: theme.palette.mode === 'light' ? '#ffffff' : '#1E1E1E' }}>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
          sx={{ width: { xs: '100%', sm: '268px'}, height: 180 }} 
        />
      </Link>
      <CardContent sx={{ backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#1E1E1E', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
          <Typography variant="subtitle1" fontWeight="bold" color={theme.palette.mode === 'light' ? '#000000' : '#ffffff'}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <Typography variant="subtitle2" color={theme.palette.mode === 'light' ? 'gray' : '#ffffff'}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard;
