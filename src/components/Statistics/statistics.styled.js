import styled from '@emotion/styled';

export const StatsContainer = styled.section`
  width: 300px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`;

export const StatsTitle = styled.h2`
  width: 100%;
  padding: 30px 0;
  margin: 0;
  text-transform: uppercase;
  color: #6f6f6f;
`;

export const StatsList = styled.ul`
  display: flex;
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 6)}`;
};

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 4);
  background-color: ${getRandomColor};
  color: white;
  padding: 20px 0;
`;

export const StatsType = styled.span`
  display: flex;
  width: 100%;
  list-style-type: none;
`;

export const StatsValue = styled.span`
  display: flex;
  width: 100%;
  list-style-type: none;
`;
