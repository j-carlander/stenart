import instagram from "../assets/icons8-instagram-32.svg";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <a
        href="https://www.instagram.com/s.c.flummer.stenart/"
        target="_blank"
        className="footer-link">
        <img src={instagram} alt="" /> Följ mig på Instagram
      </a>
    </footer>
  );
}
