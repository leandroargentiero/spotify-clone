import styled from 'styled-components';

const Button = styled.a`
  padding: ${(props) => props.theme.spacing.space05};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  transition: all 200ms ease-in;

  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
