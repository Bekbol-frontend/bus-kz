import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";
import { appRoutes } from "@/shared/config/router";

function Logo() {
  return (
    <Link to={appRoutes.home} className={styles.logoLink}>
      bus kz
    </Link>
  );
}

export default Logo;
