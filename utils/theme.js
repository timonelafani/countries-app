import indigo from '@material-ui/core/colors/indigo';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: blueGrey,
    text:{
      primary:"#283593",
      secondary:"#263238"
    }
  },
  typography:{
    h3:{
      fontFamily:"Lato",
      color:"#121037",
      fontWeight:"bold",
      '@media (min-width:400px)': {
        fontSize: '2rem',
      },
    },
    h5:{
      fontFamily:"Lato",
      color:"#546e7a",
    },
    h6:{
      fontFamily:"Lato",
      color:"#37474f",
    }
  }
});

export default theme;