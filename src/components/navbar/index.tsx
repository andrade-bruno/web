import { Link } from "react-router";
import styles from "./navbar.module.scss";
import { SearchBar } from "components/search-bar";

export const NavBar = () => {
  return (
    <>
      <nav className={styles.container}>
        <Link to="/">Home</Link>
        <Link to="/experiences">Experiences</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/personal">Personal</Link>
        <SearchBar />
        <Link to="/account">Account</Link>
      </nav>
    </>
  );
};
