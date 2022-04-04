import React from 'react';

interface Props {
  width?: string;
  height?: string;
}

const TodoIcon: React.FC<Props> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.6562 21.875H2.34375C1.04932 21.875 0 20.8257 0 19.5312V2.34375C0 1.04932 1.04932 0 2.34375 0H22.6562C23.9507 0 25 1.04932 25 2.34375V19.5312C25 20.8257 23.9507 21.875 22.6562 21.875ZM6.25 4.29688C5.17134 4.29688 4.29688 5.17134 4.29688 6.25C4.29688 7.32866 5.17134 8.20312 6.25 8.20312C7.32866 8.20312 8.20312 7.32866 8.20312 6.25C8.20312 5.17134 7.32866 4.29688 6.25 4.29688ZM6.25 8.98438C5.17134 8.98438 4.29688 9.85884 4.29688 10.9375C4.29688 12.0162 5.17134 12.8906 6.25 12.8906C7.32866 12.8906 8.20312 12.0162 8.20312 10.9375C8.20312 9.85884 7.32866 8.98438 6.25 8.98438ZM6.25 13.6719C5.17134 13.6719 4.29688 14.5463 4.29688 15.625C4.29688 16.7037 5.17134 17.5781 6.25 17.5781C7.32866 17.5781 8.20312 16.7037 8.20312 15.625C8.20312 14.5463 7.32866 13.6719 6.25 13.6719ZM20.3125 7.03125V5.46875C20.3125 5.14517 20.0501 4.88281 19.7266 4.88281H9.96094C9.63735 4.88281 9.375 5.14517 9.375 5.46875V7.03125C9.375 7.35483 9.63735 7.61719 9.96094 7.61719H19.7266C20.0501 7.61719 20.3125 7.35483 20.3125 7.03125ZM20.3125 11.7188V10.1562C20.3125 9.83267 20.0501 9.57031 19.7266 9.57031H9.96094C9.63735 9.57031 9.375 9.83267 9.375 10.1562V11.7188C9.375 12.0423 9.63735 12.3047 9.96094 12.3047H19.7266C20.0501 12.3047 20.3125 12.0423 20.3125 11.7188ZM20.3125 16.4062V14.8438C20.3125 14.5202 20.0501 14.2578 19.7266 14.2578H9.96094C9.63735 14.2578 9.375 14.5202 9.375 14.8438V16.4062C9.375 16.7298 9.63735 16.9922 9.96094 16.9922H19.7266C20.0501 16.9922 20.3125 16.7298 20.3125 16.4062Z"
        fill="currentColor"
      />
    </svg>
  );
};

TodoIcon.defaultProps = {
  width: '25',
  height: '22',
};

export default TodoIcon;