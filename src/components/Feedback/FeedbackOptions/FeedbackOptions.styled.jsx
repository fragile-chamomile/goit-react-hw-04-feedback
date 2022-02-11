import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  margin-bottom: 50px;
`;

export const Button = styled.button`
  width: 100px;
  padding: 10px 0 10px;

  border: none;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  &:not(:last-child) {
    margin-right: 30px;
  }
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
