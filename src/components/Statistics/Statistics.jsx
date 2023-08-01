import PropTypes from 'prop-types';

import {
  StatsContainer,
  StatsTitle,
  StatsList,
  StatsItem,
  StatsType,
  StatsValue,
} from './statistics.styled';

const createStatsList = stats => {
  const markup = stats.map(el => {
    return (
      <StatsItem key={el.id} len={stats.length}>
        <StatsType>{el.label}</StatsType>
        <StatsValue>{el.percentage}</StatsValue>
      </StatsItem>
    );
  });
  return markup;
};

const Statistics = ({ title, stats }) => {
  return (
    <StatsContainer>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList>{createStatsList(stats)}</StatsList>
    </StatsContainer>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
