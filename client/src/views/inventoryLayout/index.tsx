import { useDispatch } from "react-redux";
import { Header } from "../../modules/header";
import { ItemTable } from "../../modules/list";
import Stats from "../../modules/stats";
import { useEffect } from "react";
import { getList } from "../../redux/inventoryStates/api";
import { LIST_URL, USER_PROFILE } from "../../services/endpoint";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";
import { useStyles } from "./style";
import { getUserProfile } from "../../redux/themeStates/api";
import { getCookie } from "../../utilities/handleCookies";
import { Loader } from "../../components/loader";

export const InventoryLayout = () => {
  const classes = useStyles();
  const { loading } = useSelector((state: any) => state.inventory);
  const { loggedInUserId } = useSelector((state: any) => state.preLogin);
  const { loading : themeLoader } = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getUserProfile({
        endpoint: USER_PROFILE,
        params: { id: loggedInUserId ?? getCookie("id") },
      })
    );
    dispatch(getList({ endpoint: LIST_URL }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className={classes.root}>
      {loading || themeLoader ? (
        <Loader />
      ) : (
        <>
          <Header />
		  <div className={classes.user}>
			<h2>Welcome <span>{getCookie('name')}!</span></h2>
		  </div>
          <Stats />
          <ItemTable />
        </>
      )}
    </Container>
  );
};
