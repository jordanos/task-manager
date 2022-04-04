import React from 'react';
import { Link } from 'react-router-dom';
import EventsIcon from 'shared/assets/icons/EventsIcon';
import SidebarDashIcon from 'shared/assets/icons/SidebarDashIcon';
import TaskIcon from 'shared/assets/icons/TaskIcon';
import StyledSidebar, { StyledItem } from './Styles';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Link to="/dashboard">
        <StyledItem>
          <SidebarDashIcon />
        </StyledItem>
      </Link>
      <Link to="/tasks">
        <StyledItem>
          <TaskIcon />
        </StyledItem>
      </Link>
      <Link to="/events">
        <StyledItem>
          <EventsIcon />
        </StyledItem>
      </Link>
    </StyledSidebar>
  );
};

export default Sidebar;
