import { Outlet } from "react-router";
import styles from "./layout.module.scss";
import { NavBar } from "components/navbar";

export const DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <div className={styles.main}>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};
