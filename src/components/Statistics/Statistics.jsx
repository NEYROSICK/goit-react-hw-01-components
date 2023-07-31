// import PropTypes from 'prop-types';

import {
  StatsContainer,
  StatsTitle,
  StatsList,
  StatsItem,
  StatsType,
  StatsValue,
} from './statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatsContainer className="statistics">
      {title && <StatsTitle className="title">{title}</StatsTitle>}

      <StatsList className="stat-list">
        <StatsItem className="item">
          <span className="label">.docx</span>
          <span className="percentage">4%</span>
        </StatsItem>
        <StatsItem className="item">
          <span className="label">.mp3</span>
          <span className="percentage">14%</span>
        </StatsItem>
        <StatsItem className="item">
          <span className="label">.pdf</span>
          <span className="percentage">41%</span>
        </StatsItem>
        <StatsItem className="item">
          <span className="label">.mp4</span>
          <span className="percentage">12%</span>
        </StatsItem>
      </StatsList>
    </StatsContainer>
  );
};

// Statistics.propTypes = {};

export default Statistics;
