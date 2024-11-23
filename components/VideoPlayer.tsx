'use client';

import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';
import { Box, CircularProgress } from '@mui/material';
import { Video } from '@/types/video';

interface VideoPlayerProps {
  video: Video;
  onError: (message: string) => void;
}

export default function VideoPlayer({ video, onError }: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      
      playerRef.current = new Player(containerRef.current, {
        id: video.id,
        width: '100%',
        responsive: true,
      });

      playerRef.current.on('error', function(error) {
        onError(`Error loading video: ${error.message}`);
      });

      playerRef.current.on('loaded', function() {
        console.log('Video loaded successfully');
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [video.id, onError]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
        backgroundColor: 'background.paper',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box ref={containerRef} sx={{ width: '100%', height: '100%' }} />
    </Box>
  );
}