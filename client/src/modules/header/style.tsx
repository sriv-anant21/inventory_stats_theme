import styled from "styled-components";
import { makeStyles } from '@mui/styles';

export const HeaderWrapper = styled.div`
display: flex;
border-bottom: 1px solid black;
margin-bottom: 50px;
.anticon{
    margin-right: 20px;
}
// justify-content: space-between;
.userText{
    margin-right: 10px;
    margin-left: auto;
}
.adminText{
    margin-left: 10px;
}
.userDiv{
    border-right: 1px solid black;
    padding: 8px;
    margin: 15px;
    display: flex;
}
`;

export const useStyles = makeStyles((theme: { palette: { background: { paper: any; }; text: { primary: any; }; }; spacing: (arg0: number) => any; }) => {
  
  return ({
    root: {
      background: theme.palette.background.paper,
      color: theme.palette.text.primary,
      alignItems: 'center',
    },
    heading: {
      color: theme.palette.text.primary,
      display: "flex",
      alignItems: "center",
      textAlign: "left",
      marginLeft: "15px",
      height: 'auto !important',
    },
    logoutIcon: {
      marginLeft: '15px',
      marginRight: '15px',
      cursor: 'pointer'
    }
  })});
