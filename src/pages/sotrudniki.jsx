import * as React from "react";
import { useState } from "react";
import { IconButton, Link } from "@mui/material";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { Link as RouterLink, NavLink } from "react-router-dom";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
  const [show, setShow] = useState(true);
  const ftog = () => {
    show ? setShow(false) : setShow(true);
  };
  return (
    <div>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: "50%",
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img
                alt="complex"
                src="https://kstu.kg/fileadmin/user_upload/img-20220305-wa0000__1__02.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Джолдошова Айнура Буудайыковна
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Заведующая кафедрой ХПИ
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  E-mail:{" "}
                  <a href="abdjoldosheva@kstu.kg">abdjoldosheva@kstu.kg</a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Контакты: 0700400260
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Кабинет: 2/428
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  component={NavLink}
                  to="/dzholdoshova-ainura-buudaiykovna"
                >
                  {<ReadMoreIcon />}
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img
                alt="complex"
                src="https://kstu.kg/fileadmin/user_upload/whatsapp_image_2022-06-24_at_15.53.55.jpeg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Акынбекова Медеркуль Бозгунчиевна
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Профессор КГТУ, доцент НАК
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  E-mail: <a href="medera49@kstu.kg">medera49@kstu.kg</a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Контакты: -
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Кабинет: 2/428
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  component={NavLink}
                  to="/akynbekova-mederkul-bozgunchievna"
                >
                  {<ReadMoreIcon />}
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img
                alt="complex"
                src="https://kstu.kg/fileadmin/user_upload/20220302_130004__1__03.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Чандыбаева Айнура Мажитовна{" "}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Доцент кафедры ХПИ
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  E-mail: <a href="medera49@kstu.kg">a.chandybaeva@kstu.kg</a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Контакты: 0773102299
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Кабинет: 2/406
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  component={NavLink}
                  to="/chandybaeva-ainura-mazhitovna"
                >
                  {<ReadMoreIcon />}
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img
                alt="sotrudnik"
                src="https://kstu.kg/fileadmin/user_upload/photo5386794781063100546_01.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Мамбетова Бурул Жумашовна
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Доцент кафедры ХПИ
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  E-mail: <a href="medera49@kstu.kg">magicfelt@mail.ru</a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Контакты: 0706064541
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Кабинет: 2/406
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  component={NavLink}
                  to="/mambetova-burul-zhumashevna"
                >
                  {<ReadMoreIcon />}
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img
                alt="sotrudnik"
                src="https://kstu.kg/fileadmin/user_upload/image__12_.jpeg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Халанская Елена Сергеевна
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Доцент кафедры ХПИ
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  E-mail: <a href="medera49@kstu.kg">elena_chiv@kstu.kg</a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Контакты: 0702110043
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Кабинет: 2/406
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  component={NavLink}
                  to="/khalanskaja-elena-sergeevna"
                >
                  {<ReadMoreIcon />}
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img
                alt="sotrudnik"
                src="https://kstu.kg/fileadmin/user_upload/asanakunov_zhoomart_shakenovich.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Асанакунов Жоомарт Шакенович
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Доцент кафедры ХПИ
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  E-mail: <a href="medera49@kstu.kg"> j.asanakunov@kstu.kg</a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Контакты: 0772365138
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Кабинет: 2/406
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  component={NavLink}
                  to="/asanakunov-zhoomart-shakenovich"
                >
                  {<ReadMoreIcon />}
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img
                alt="sotrudnik"
                src="https://kstu.kg/fileadmin/user_upload/whatsapp_image_2022-07-01_at_14.56.23.jpeg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Абдуллаева Гульнара Мукашевна
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Старший преподователь
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  E-mail:{" "}
                  <a href="medera49@kstu.kg"> gulnara.abdullaeva66@kstu.kg</a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Контакты: 0707613390
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Кабинет: 2/406
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  component={NavLink}
                  to="/abdullaeva-gulnara-mukashevna"
                >
                  {<ReadMoreIcon />}
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img
                alt="sotrudnik"
                src="https://kstu.kg/fileadmin/user_upload/whatsapp_image_2020-11-17_at_16._01.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Молдосанова Нургуль Дуйшенбековна
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Старший преподователь
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  E-mail:{" "}
                  <a href="nurgul_moldosanova@kstu.kg">
                    nurgul_moldosanova@kstu.kg
                  </a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Контакты:-
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Кабинет: 2/406
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  component={NavLink}
                  to="/moldosanova-nurgul-duishshchenbekovna"
                >
                  {<ReadMoreIcon />}
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img
                alt="sotrudnik"
                src="https://kstu.kg/fileadmin/user_upload/whatsapp_image_2022-06-24_at_13.12.31__1__01.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Югай Жанна Керимбековна
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Преподователь
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  E-mail: <a href="j.yugai@kstu.kg">j.yugai@kstu.kg</a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Контакты: 0708288188
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Кабинет: 2/406
                </Typography>
              </Grid>
              <Grid item>
                <IconButton component={NavLink} to="/yugai-zhanna-kerimbekovna">
                  {<ReadMoreIcon />}
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img
                alt="sotrudnik"
                src="https://kstu.kg/fileadmin/user_upload/mamytova_akylai.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Мамытова Акылай Абдыкапаровна
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Заведующая лабораториями
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  E-mail: <a href="kstu.hpi@kstu.kg">kstu.hpi@kstu.kg</a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Контакты: 0995219621
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Кабинет: 2/406
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  component={NavLink}
                  to="/mamytova-akylai-abdykaparovna"
                >
                  {<ReadMoreIcon />}
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img
                alt="sotrudnik"
                src="https://kstu.kg/fileadmin/user_upload/whatsapp_image_2022-03-01_at_10.37.35.jpeg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Суютбекова Сабина Маралбековна
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Методист
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  E-mail:{" "}
                  <a href="s.suyutbekova@kstu.kg">s.suyutbekova@kstu.kg</a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Контакты: 0709858575
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Кабинет: 2/406
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  component={NavLink}
                  to="/suiutbekova-sabina-maralbekovna"
                >
                  {<ReadMoreIcon />}
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
