import React from 'react';
import { connect } from 'react-redux';
import LaneHeader from 'shared/components/CustomLane';
import StyledWrapper from 'shared/components/Wrappers/Styles';
import { Task } from 'shared/store/reducers/taskReducer';
// eslint-disable-next-line import/no-named-as-default
import getDashHeaders from './getDashHeaders';

interface Props {
  tasks: Task[];
}

const DashboardHeader: React.FC<Props> = ({ tasks }) => {
  return (
    <StyledWrapper
      style={{ width: '100%', marginTop: '30px' }}
      direction="row"
      justify="space-around">
      {getDashHeaders(tasks).map((header) => (
        <LaneHeader
          key={header.id}
          type={header.type}
          title={header.title}
          background="white"
        />
      ))}
    </StyledWrapper>
  );
};

const mapStateToProps = (state: any): { tasks: Task[] } => {
  return { tasks: state.task.tasks };
};

export default connect(mapStateToProps)(DashboardHeader);
