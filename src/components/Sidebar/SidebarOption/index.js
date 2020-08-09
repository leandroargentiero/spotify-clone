import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.lightGrey};
  height: ${(props) => props.theme.spacing.space08};
  cursor: pointer;
  transition: ${(props) => props.theme.animation} color ease-in;

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

const Title = styled.h4`
  font-size: ${(props) => (props.small ? '14px' : null)};
  font-weight: ${(props) => (props.small ? '400' : null)};
`;

const IconWrapper = styled.div`
  margin-right: ${(props) => props.theme.spacing.space03};
`;

const SidebarOption = ({ title, Icon }) => {
  return (
    <Wrapper>
      {Icon && (
        <IconWrapper>
          <Icon className='sidebarOption__icon' />
        </IconWrapper>
      )}
      {Icon ? <Title>{title}</Title> : <Title small>{title}</Title>}
    </Wrapper>
  );
};

export default SidebarOption;
