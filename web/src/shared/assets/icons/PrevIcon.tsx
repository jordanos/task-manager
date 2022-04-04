import React from 'react';

interface Props {
  width?: string;
  height?: string;
}

const PrevIcon: React.FC<Props> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="0.5"
        y="0.5"
        width="29"
        height="29"
        rx="3.5"
        fill="white"
        stroke="#E7E8EA"
      />
      <path
        d="M18.7326 22.3972L17.8937 23.2361C17.5384 23.5913 16.964 23.5913 16.6126 23.2361L9.26641 15.8937C8.9112 15.5384 8.9112 14.964 9.26641 14.6126L16.6126 7.26641C16.9678 6.9112 17.5422 6.9112 17.8937 7.26641L18.7326 8.10533C19.0916 8.46433 19.084 9.05006 18.7175 9.4015L14.1639 13.7397L12.4826 15.1262L14.1639 16.7628L18.7175 21.101C19.0878 21.4524 19.0954 22.0382 18.7326 22.3972Z"
        fill="currentColor"
      />
    </svg>
  );
};

PrevIcon.defaultProps = {
  width: '30',
  height: '30',
};

export default PrevIcon;
