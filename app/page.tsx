"use client";

import { useState } from "react";
import { Container, Grid, Typography, Alert, Box } from "@mui/material";
import VideoPlayer from "@/components/VideoPlayer";
import VideoList from "@/components/VideoList";
import VideoStats from "@/components/VideoStats";
import { Video } from "@/types/video";
import useSWR from "swr";
import { videos } from "@/utils/constants";

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState<Video>(videos[0]);
  const [error, setError] = useState<string | null>(null);

  const handleVideoError = (message: string) => {
    setError(message);
  };

  return (
    <Container maxWidth="xl">
      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <VideoPlayer video={currentVideo} onError={handleVideoError} />
          <Box sx={{ mt: 3 }}>
            <Typography variant="h5" gutterBottom>
              {currentVideo.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {currentVideo.description}
            </Typography>
            <VideoStats video={currentVideo} />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Up Next
          </Typography>
          <VideoList
            videos={videos}
            currentVideoId={currentVideo.id}
            onVideoSelect={setCurrentVideo}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
