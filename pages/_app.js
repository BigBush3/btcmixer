import PropTypes from 'prop-types';
import '../styles/main.scss';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({});

function MyApp({ Component, pageProps, }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  pageProps: PropTypes.object,
};

export default MyApp;
