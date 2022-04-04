import React from 'react';
import DoneIcon from 'shared/assets/icons/DoneIcon';
import ProgressIcon from 'shared/assets/icons/ProgressIcon';
import TodoIcon from 'shared/assets/icons/TodoIcon';
import { colors } from 'shared/utils/Styles';
import StyledWrapper from '../Wrappers/Styles';
import StyledHeader from './Styles';

interface Props {
  type: 'todo' | 'progress' | 'done';
  title?: string;
  background?: string;
}

const LaneHeader: React.FC<Props> = ({ type, title, background }) => {
  const init = (): { color: string; icon: React.FC } => {
    switch (type) {
      case 'todo':
        return {
          color: colors.backgroundDark,
          icon: TodoIcon,
        };
      case 'progress':
        return {
          color: colors.warning,
          icon: ProgressIcon,
        };
      case 'done':
        return {
          color: colors.success,
          icon: DoneIcon,
        };
      default:
        return { color: colors.backgroundDark, icon: TodoIcon };
    }
  };

  const dict = init();

  return (
    <StyledHeader color={dict.color} background={background && background}>
      <StyledWrapper direction="row" justify="center">
        <dict.icon />
        <h3 style={{ fontWeight: 'lighter', marginLeft: '15px' }}>{title}</h3>
      </StyledWrapper>
    </StyledHeader>
  );
};

LaneHeader.defaultProps = {
  title: 'string',
  background: 'string',
};

export default LaneHeader;
