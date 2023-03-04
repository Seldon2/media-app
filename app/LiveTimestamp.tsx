'use client';
import TimeAgo from 'react-timeago';

interface LiveTimestampProps {
  time: string;
}

function LiveTimestamp({ time }: LiveTimestampProps) {
  return <TimeAgo date={time} />;
}

export default LiveTimestamp;