'use client';

import { Box, Typography, Chip } from '@mui/material';
import { Visibility, ThumbUp } from '@mui/icons-material';
import { Video } from '@/types/video';

interface VideoStatsProps {
  video: Video;
}

export default function VideoStats({ video }: VideoStatsProps) {
  return (
    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
      <Chip
        icon={<Visibility />}
        label={`${video.views.toLocaleString()} views`}
        variant="outlined"
        color="primary"
      />
      <Chip
        icon={<ThumbUp />}
        label={`${video.likes.toLocaleString()} likes`}
        variant="outlined"
        color="primary"
      />
    </Box>
  );
}