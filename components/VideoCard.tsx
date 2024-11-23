'use client';

import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import { Video } from '@/types/video';

interface VideoCardProps {
  video: Video;
  onClick: () => void;
  isActive?: boolean;
}

export default function VideoCard({
  video,
  onClick,
  isActive = false,
}: VideoCardProps) {
  const { title, thumbnail, duration } = video;

  return (
    <Card
      onClick={onClick}
      sx={{
        display: 'flex',
        mb: 2,
        cursor: 'pointer',
        transform: isActive ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        position: 'relative',
      }}
    >
      <Box sx={{ position: 'relative', width: 160, minWidth: 160 }}>
        <CardMedia
          component="img"
          sx={{ width: 160, height: 90 }}
          image={thumbnail}
          alt={title}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 4,
            right: 4,
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            px: 1,
            borderRadius: 1,
          }}
        >
          <Typography variant="caption" color="white">
            {duration}
          </Typography>
        </Box>
        {isActive && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <PlayArrow sx={{ fontSize: 40, color: 'white' }} />
          </Box>
        )}
      </Box>
      <CardContent sx={{ flex: 1, py: 1 }}>
        <Typography variant="subtitle1" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}