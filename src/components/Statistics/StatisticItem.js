// import PropTypes from 'prop-types';
// import { Status } from './FriendList.styled';

export const StatisticItem = ({ nameSt, valueSt }) => {
  return (
    <>
      <p>{nameSt}</p>
      <p>{valueSt}</p>
    </>
  );
};

// FriendListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
// };
