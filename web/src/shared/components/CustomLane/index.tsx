import React from 'react';
import { colors } from 'shared/utils/Styles';
import StyledWrapper from '../Wrappers/Styles';
import StyledHeader from './Styles';

interface Props {
  type: 'todo' | 'progress' | 'done';
  updateTitle?: Function;
  editLaneTitle?: boolean;
  canAddLanes?: boolean;
  laneDraggable?: boolean;
  label?: string;
  title?: string;
  onDelete?: Function;
  onDoubleClick?: Function;
  background?: string;
}

const LaneHeader: React.FC<Props> = ({
  type,
  updateTitle,
  canAddLanes,
  onDelete,
  onDoubleClick,
  editLaneTitle,
  label,
  title,
  laneDraggable,
  background,
}) => {
  const init = () => {
    switch (type) {
      case 'todo':
        return {
          color: colors.backgroundDark,
          icon: (
            <svg
              width="25"
              height="22"
              viewBox="0 0 25 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.6562 21.875H2.34375C1.04932 21.875 0 20.8257 0 19.5312V2.34375C0 1.04932 1.04932 0 2.34375 0H22.6562C23.9507 0 25 1.04932 25 2.34375V19.5312C25 20.8257 23.9507 21.875 22.6562 21.875ZM6.25 4.29688C5.17134 4.29688 4.29688 5.17134 4.29688 6.25C4.29688 7.32866 5.17134 8.20312 6.25 8.20312C7.32866 8.20312 8.20312 7.32866 8.20312 6.25C8.20312 5.17134 7.32866 4.29688 6.25 4.29688ZM6.25 8.98438C5.17134 8.98438 4.29688 9.85884 4.29688 10.9375C4.29688 12.0162 5.17134 12.8906 6.25 12.8906C7.32866 12.8906 8.20312 12.0162 8.20312 10.9375C8.20312 9.85884 7.32866 8.98438 6.25 8.98438ZM6.25 13.6719C5.17134 13.6719 4.29688 14.5463 4.29688 15.625C4.29688 16.7037 5.17134 17.5781 6.25 17.5781C7.32866 17.5781 8.20312 16.7037 8.20312 15.625C8.20312 14.5463 7.32866 13.6719 6.25 13.6719ZM20.3125 7.03125V5.46875C20.3125 5.14517 20.0501 4.88281 19.7266 4.88281H9.96094C9.63735 4.88281 9.375 5.14517 9.375 5.46875V7.03125C9.375 7.35483 9.63735 7.61719 9.96094 7.61719H19.7266C20.0501 7.61719 20.3125 7.35483 20.3125 7.03125ZM20.3125 11.7188V10.1562C20.3125 9.83267 20.0501 9.57031 19.7266 9.57031H9.96094C9.63735 9.57031 9.375 9.83267 9.375 10.1562V11.7188C9.375 12.0423 9.63735 12.3047 9.96094 12.3047H19.7266C20.0501 12.3047 20.3125 12.0423 20.3125 11.7188ZM20.3125 16.4062V14.8438C20.3125 14.5202 20.0501 14.2578 19.7266 14.2578H9.96094C9.63735 14.2578 9.375 14.5202 9.375 14.8438V16.4062C9.375 16.7298 9.63735 16.9922 9.96094 16.9922H19.7266C20.0501 16.9922 20.3125 16.7298 20.3125 16.4062Z"
                fill="currentColor"
              />
            </svg>
          ),
        };
      case 'progress':
        return {
          color: colors.warning,
          icon: (
            <svg
              width="21"
              height="25"
              viewBox="0 0 21 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.3125 14.8438C20.3125 20.4541 15.7666 25 10.1562 25C4.5459 25 0 20.4541 0 14.8438C0 9.76562 3.72559 5.55664 8.59375 4.80957V3.125H7.22656C6.9043 3.125 6.64062 2.86133 6.64062 2.53906V0.585938C6.64062 0.263672 6.9043 0 7.22656 0H13.0859C13.4082 0 13.6719 0.263672 13.6719 0.585938V2.53906C13.6719 2.86133 13.4082 3.125 13.0859 3.125H11.7188V4.80957C13.5498 5.09277 15.2197 5.86426 16.5869 6.98731L17.9297 5.64453C18.1592 5.41504 18.5303 5.41504 18.7598 5.64453L20.1416 7.02637C20.3711 7.25586 20.3711 7.62695 20.1416 7.85644L18.7061 9.29199L18.6768 9.32129C19.7119 10.9033 20.3125 12.8027 20.3125 14.8438ZM11.7188 16.6016V9.2041C11.7188 8.88184 11.4551 8.61816 11.1328 8.61816H9.17969C8.85742 8.61816 8.59375 8.88184 8.59375 9.2041V16.6016C8.59375 16.9238 8.85742 17.1875 9.17969 17.1875H11.1328C11.4551 17.1875 11.7188 16.9238 11.7188 16.6016Z"
                fill="currentColor"
              />
            </svg>
          ),
        };
      case 'done':
        return {
          color: colors.success,
          icon: (
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.2188 12.1094C24.2188 18.7972 18.7972 24.2188 12.1094 24.2188C5.42153 24.2188 0 18.7972 0 12.1094C0 5.42153 5.42153 0 12.1094 0C18.7972 0 24.2188 5.42153 24.2188 12.1094ZM10.7087 18.5212L19.6931 9.53682C19.9981 9.23174 19.9981 8.73706 19.6931 8.43198L18.5882 7.32715C18.2832 7.02202 17.7885 7.02202 17.4833 7.32715L10.1562 14.6542L6.7354 11.2333C6.43032 10.9283 5.93564 10.9283 5.63052 11.2333L4.52568 12.3382C4.22061 12.6433 4.22061 13.1379 4.52568 13.443L9.60381 18.5211C9.90894 18.8263 10.4036 18.8263 10.7087 18.5212Z"
                fill="currentColor"
              />
            </svg>
          ),
        };
      default:
        return { color: colors.backgroundDark, icon: '' };
    }
  };

  const dict = init();

  return (
    <StyledHeader color={dict.color} background={background && background}>
      <StyledWrapper direction="row" justify="center">
        {dict.icon}
        <h3 style={{ fontWeight: 'lighter', marginLeft: '15px' }}>{title}</h3>
      </StyledWrapper>
    </StyledHeader>
  );
};

LaneHeader.defaultProps = {
  updateTitle: () => {},
  editLaneTitle: false,
  canAddLanes: false,
  laneDraggable: false,
  label: 'string',
  title: 'string',
  onDelete: () => {},
  onDoubleClick: () => {},
  background: 'string',
};

export default LaneHeader;
