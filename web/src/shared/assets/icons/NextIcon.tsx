import React from 'react';

interface Props {
  width?: string;
  height?: string;
}

const NextIcon: React.FC<Props> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="-0.5"
        y="0.5"
        width="29"
        height="29"
        rx="3.5"
        transform="matrix(-1 0 0 1 29 0)"
        fill="white"
        stroke="#E7E8EA"
      />

      <path
        d="M11.2674 22.3972L12.1063 23.2361C12.4616 23.5913 13.036 23.5913 13.3874 23.2361L20.7336 15.8937C21.0888 15.5384 21.0888 14.964 20.7336 14.6126L13.3874 7.26641C13.0322 6.9112 12.4578 6.9112 12.1063 7.26641L11.2674 8.10533C10.9084 8.46433 10.916 9.05006 11.2825 9.4015L15.8361 13.7397L17.5174 15.1262L15.8361 16.7628L11.2825 21.101C10.9122 21.4524 10.9046 22.0382 11.2674 22.3972Z"
        fill="currentColor"
      />
    </svg>
  );
};

NextIcon.defaultProps = {
  width: '30',
  height: '30',
};

export default NextIcon;
