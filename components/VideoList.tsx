'use client';

import { Video } from '@/types/video';
import VideoCard from './VideoCard';

interface VideoListProps {
  videos: Video[];
  currentVideoId: string;
  onVideoSelect: (video: Video) => void;
}

export default function VideoList({
  videos,
  currentVideoId,
  onVideoSelect,
}: VideoListProps) {
  return (
    <div>
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          isActive={currentVideoId === video.id}
          onClick={() => onVideoSelect(video)}
        />
      ))}
    </div>
  );
}