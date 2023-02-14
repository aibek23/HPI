import { Button, IconButton } from "@mui/material";
import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className="footer" style={{ paddingBottom: "20px" }}>
      <div className="footer-two">
        <div className=" first sp">
          <p>Бакалавр</p>
          <ul>
            <li>Учебные проекты</li>
            <li>Кредиты и система оценки</li>
          </ul>
        </div>
        <div className="second sp">
          <p>Магистр</p>
          <ul>
            <li>Телемедицина</li>
          </ul>
        </div>
        <div className="third sp">
          <p>Наука </p>
          <ul>
            <li>Научные направления</li>
            <li>Аспирантура</li>
          </ul>
        </div>
        <div className="fourth sp">
          <p>Абитуриентам</p>
          <ul>
            <li>Для поступления в бакалавриат</li>
            <li>Для поступления в магистратуру</li>
          </ul>
        </div>
        <div className="fourth sp">
          <p>Партнеры</p>
          <ul>
            {/* <li>...</li>
            <li>...</li> */}
          </ul>
        </div>
        <div className="fourth sp">
          <p>Ссылки</p>
          <ul>
            <li>Новости</li>
            <li>Фотогалерея</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      {/* <div className="icons">
        <IconButton
          href="https://www.instagram.com/chanelofficial/"
          style={{ color: "white" }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://twitter.com/chanel?lang=en"
          style={{ color: "white" }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          href="https://www.facebook.com/chanel/"
          style={{ color: "white" }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://www.youtube.com/user/CHANEL"
          style={{ color: "white" }}
        >
          <YouTubeIcon />
        </IconButton>
      </div>
      <div className="footer-one">
        <a href="http://www.chanel.com/us">chanel.com</a>
      </div> */}
    </div>
  );
};
export default Footer;
