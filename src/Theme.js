import { createTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/purple';
import grey from '@material-ui/core/colors/green';
// import { grey } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: grey[500],
    },
  },
});

export default theme