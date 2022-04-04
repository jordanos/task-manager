import CustomCard from 'shared/components/CustomCard';
import { colors, sizes } from 'shared/utils/Styles';
import AddCardLink from '../CustomAddCard';
import LaneHeader from '../CustomLane';
import NewCardForm from '../NewCardForm';

export const components = {
  Card: CustomCard,
  LaneHeader,
  AddCardLink,
  NewCardForm,
};

export const laneStyle = {
  background: 'rgba(0,0,0,0.03)',
  width: `calc(${sizes.cardWidth} + 20px)`,
  maxHeight: `calc(100vh - calc(${sizes.navHeight} + 50px))`,
  scrollbarColor: `${colors.primary} transparent`,
};

export const boardStyle = {
  background: `${colors.backgroundMedium}`,
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  paddingLeft: '100px',
  paddingTop: '80px',
};
