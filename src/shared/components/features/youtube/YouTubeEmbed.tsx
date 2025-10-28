'use client';

import YouTube, { YouTubeProps } from 'react-youtube';

type Props = {
  videoId: string;
  title: string;
};

export const YouTubeEmbed = ({ videoId, title }: Props) => {
  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className='relative my-8 aspect-video w-full'>
      <YouTube
        className='absolute top-0 left-0 h-full w-full'
        opts={opts}
        title={title}
        videoId={videoId}
      />
    </div>
  );
};
