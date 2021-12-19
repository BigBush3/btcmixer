import PropTypes from 'prop-types';

export const Main = ({ children }) => {
  return <main className="main main--home">{children}</main>
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
}
