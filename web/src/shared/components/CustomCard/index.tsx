import React, { MouseEventHandler } from 'react';
import StyledWrapper from '../Wrappers/Styles';
import { StyledCard, StyledDesc, StyledTitle } from './Styles';

interface Props {
  onEdit?: MouseEventHandler | null;
  showDeleteButton?: boolean;
  onDelete?: MouseEventHandler;
  onClick: any;
  style?: Object;
  tagStyle?: Object;
  className?: string;
  id: string;
  title: string;
  label?: string;
  description?: string;
  tags?: [];
}

const CustomCard: React.FC<Props> = ({
  onEdit,
  showDeleteButton,
  style,
  tagStyle,
  onClick,
  onDelete,
  className,
  id,
  title,
  label,
  description,
  tags,
}) => {
  return (
    <div data-id={id} onClick={onClick}>
      <StyledCard>
        <StyledTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </StyledTitle>
        <StyledDesc>
          Sed vitae lobortis nulla, ut vulputate augue. Nullam mollis non ante
          et consequat. Cras quis dapibus augue. Phasellus nec fermentum mauris.
          Aenean et eros ut erat gravida rhoncus a et velit.
        </StyledDesc>
        <StyledWrapper direction="row" justify="space-between">
          <StyledTitle>15 dez 2021</StyledTitle>
          <StyledWrapper direction="row" justify="space-between">
            <StyledWrapper
              direction="row"
              justify="space-around"
              style={{ paddingRight: '10px' }}>
              {/*  person */}
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.1094 0C5.41992 0 0 5.41992 0 12.1094C0 18.7988 5.41992 24.2188 12.1094 24.2188C18.7988 24.2188 24.2188 18.7988 24.2188 12.1094C24.2188 5.41992 18.7988 0 12.1094 0ZM12.1094 4.6875C14.4824 4.6875 16.4062 6.61133 16.4062 8.98438C16.4062 11.3574 14.4824 13.2812 12.1094 13.2812C9.73633 13.2812 7.8125 11.3574 7.8125 8.98438C7.8125 6.61133 9.73633 4.6875 12.1094 4.6875ZM12.1094 21.4844C9.24316 21.4844 6.6748 20.1855 4.95605 18.1543C5.87402 16.4258 7.6709 15.2344 9.76562 15.2344C9.88281 15.2344 10 15.2539 10.1123 15.2881C10.7471 15.4932 11.4111 15.625 12.1094 15.625C12.8076 15.625 13.4766 15.4932 14.1064 15.2881C14.2188 15.2539 14.3359 15.2344 14.4531 15.2344C16.5479 15.2344 18.3447 16.4258 19.2627 18.1543C17.5439 20.1855 14.9756 21.4844 12.1094 21.4844Z"
                  fill="#333333"
                />
              </svg>

              {/* edit */}
              {onEdit && (
                <svg
                  onClick={onEdit}
                  style={{ marginLeft: '15px' }}
                  width="25"
                  height="23"
                  viewBox="0 0 25 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.474 3.60677L21.3889 7.5217C21.5538 7.68663 21.5538 7.95573 21.3889 8.12066L11.9097 17.5998L7.88194 18.0469C7.34375 18.1076 6.88802 17.6519 6.94878 17.1137L7.39583 13.0859L16.875 3.60677C17.0399 3.44184 17.309 3.44184 17.474 3.60677ZM24.5052 2.61285L22.3872 0.494792C21.7274 -0.164931 20.6554 -0.164931 19.9913 0.494792L18.4549 2.03125C18.2899 2.19618 18.2899 2.46528 18.4549 2.63021L22.3698 6.54514C22.5347 6.71007 22.8038 6.71007 22.9688 6.54514L24.5052 5.00868C25.1649 4.34462 25.1649 3.27257 24.5052 2.61285ZM16.6667 15.0217V19.4401H2.77778V5.55122H12.7517C12.8906 5.55122 13.0208 5.49479 13.1207 5.39931L14.8568 3.66319C15.1866 3.33333 14.9523 2.77344 14.4878 2.77344H2.08333C0.93316 2.77344 0 3.7066 0 4.85677V20.1345C0 21.2847 0.93316 22.2179 2.08333 22.2179H17.3611C18.5113 22.2179 19.4444 21.2847 19.4444 20.1345V13.2856C19.4444 12.8212 18.8845 12.5911 18.5547 12.9167L16.8186 14.6528C16.7231 14.7526 16.6667 14.8828 16.6667 15.0217Z"
                    fill="#333333"
                  />
                </svg>
              )}
            </StyledWrapper>
          </StyledWrapper>
        </StyledWrapper>
      </StyledCard>
    </div>
  );
};

CustomCard.defaultProps = {
  onEdit: () => {},
  showDeleteButton: true,
  onDelete: () => {},
  onClick: () => {},
  style: {},
  tagStyle: {},
  title: 'no title',
  description: '',
  label: '',
  tags: [],
  className: '',
};

export default CustomCard;
