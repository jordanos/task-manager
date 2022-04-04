/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { MouseEventHandler } from 'react';
import EditIcon from 'shared/assets/icons/EditIcon.';
import PersonIcon from 'shared/assets/icons/PersonIcon';
import { Task } from 'shared/store/reducers/taskReducer';
import { colors } from 'shared/utils/Styles';
import Button from '../Button';
import StyledWrapper from '../Wrappers/Styles';
import { StyledCard, StyledDesc, StyledTitle } from './Styles';

interface Props {
  onEdit: Function | null;
  onDelete: Function | null;
  onClick: MouseEventHandler;
  id: string;
  title: string;
  date: Date;
  description: string;
}

const CustomCard: React.FC<Props> = (props) => {
  const { onEdit, onClick, onDelete, id, title, date, description } = props;

  const task: Task = {
    id,
    title,
    description,
    date,
    status: 'todo',
    assignedTo: 'myself',
  };

  return (
    <div data-id={id} onClick={onClick}>
      <StyledCard>
        {onDelete ? (
          <StyledWrapper direction="row" justify="space-between">
            <StyledTitle>{title}</StyledTitle>
            <Button
              onClick={() => onDelete(task)}
              bg={colors.backgroundDark}
              color="white"
              radius="100px"
              padding="0.1em 0.4em"
              style={{
                fontSize: '14px',
              }}>
              x
            </Button>
          </StyledWrapper>
        ) : (
          <StyledTitle>{title}</StyledTitle>
        )}
        <StyledDesc>{description}</StyledDesc>
        <StyledWrapper direction="row" justify="space-between">
          <StyledTitle>{date.toDateString()}</StyledTitle>
          <StyledWrapper direction="row" justify="space-between">
            <StyledWrapper direction="row" justify="space-around" style={{}}>
              <PersonIcon />
              {onEdit && (
                <div
                  onClick={() => onEdit(task)}
                  style={{ marginLeft: '20px' }}>
                  <EditIcon />
                </div>
              )}
            </StyledWrapper>
          </StyledWrapper>
        </StyledWrapper>
      </StyledCard>
    </div>
  );
};

export default CustomCard;
