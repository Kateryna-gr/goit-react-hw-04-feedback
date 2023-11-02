import styled from 'styled-components';

const hoverButton = ({ name }) => {
  switch (name) {
    case 'good':
      return 'green';
    case 'neutral':
      return 'orange';
    case 'bad':
      return 'red';
    default:
      return 'white';
  }
};

export const Button = styled.button`
  width: 80px;
  font-size: 16px;
  font-weight: 500;
  background-color: #e3e3e3;
  border: 2px solid #d5d5d5;
  border-radius: 5px;

  &:hover,
  &:active {
    background-color: ${hoverButton};
    border-color: ${hoverButton};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
`;
