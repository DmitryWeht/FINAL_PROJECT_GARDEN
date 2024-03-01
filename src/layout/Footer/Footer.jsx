import { SiWhatsapp } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";
import { Link } from "react-router-dom";
import Map from "../../components/Map/Map";
import classes from "./Footer.module.css";
import { useSelector } from "react-redux";

function Footer() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div>
      <footer className={classes.footer}>
        <div className="container">
          <div className={classes.daten}>
            <div className={classes.contact}>Contact</div>

            <div className={classes.connect}>
              <div className={classes.phone}>
                <p className={classes.descreibe}>Phone</p>
                <p className={classes.number}>
                  <a href="tel:+499999999999">+49 999 999 99 99</a>
                </p>
              </div>

              <div className={classes.socials}>
                <p className={classes.descreibe}>Socials</p>

                <div className={classes.media}>
                  <Link
                    className={classes.media_item}
                    to="https://www.linkedin.com/school/tel-ran-de/"
                    target="_blank"
                  >
                    <SlSocialInstagram />
                  </Link>

                  <Link
                    className={classes.media_item}
                    to="https://wa.me/+499999999999"
                    target="_blank"
                  >
                    <SiWhatsapp />
                  </Link>
                </div>
              </div>

              <div className={classes.adress}>
                <p className={classes.descreibe}>Adress</p>
                <p className={classes.number}>
                  Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
                </p>
              </div>

              <div className={classes.work}>
                <p className={classes.descreibe}>Working Hours</p>
                <p className={classes.number}>24 hours a day</p>
              </div>

              <Map />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
