import React from "react";

export default function SimpleSlider() {
  return (
    <div>
      <div>
        <img
          width="100%"
          height="600px"
          src="https://funtime.kiev.ua/uploads/img/gallery/big/2021/03/galereya-lart-3-6057aef676cae.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          width="100%"
          height="600px"
          src="https://nasledie.gallery/wp-content/uploads/2020/12/bez-imeni-10069-scaled.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          width="100%"
          height="600px"
          src="https://i.pinimg.com/564x/0f/79/9d/0f799d7c84858a2605a51647b11fe41c.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          width="100%"
          height="600px"
          src="https://24.kg/files/media/211/211113.JPG"
          alt=""
        />
      </div>
      <div>
        <img
          width="100%"
          height="600px"
          src="https://24.kg/files/media/165/165409.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          width="100%"
          height="600px"
          src="https://алаприма.рф/uploaded_files/admin/ww/pics/e8b6439c3c3ce979227f6f8e3f85b9fc.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

// import React, { Component, useEffect } from "react";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // import "./styleC.css";

// // import img1 from "./Foto/docMen.png";
// // import img2 from "./Foto/docWomen.png";

// import {
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Typography,
// } from "@mui/material";

// export default class Responsive extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       scrollBy: true,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 3,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1440,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             infinite: true,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2,
//           },
//         },
//         {
//           breakpoint: 425,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 375,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 320,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: true,
//           },
//         },
//       ],
//     };
//     let arr = [
//       {
//         img: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
//         title: "Намозов Улугбек Тагойбекович",
//         description:
//           "Главный врач. Врач-кардиолог высшей категории. Кандидат медицинских наук",
//       },
//       {
//         img: "https://www.facebook.com/hpi.kstu.kg/photos/a.883913118369973/2189632377798034/",
//         title: "Магоматова Лариса Руслановна",
//         description:
//           "Главный врач. Врач-кардиолог высшей категории. Кандидат медицинских наук",
//       },
//       {
//         img: "https://www.facebook.com/hpi.kstu.kg/photos/a.883913118369973/2189632377798034/",
//         title: "Ряскин Владимир Иванович",
//         description:
//           "Главный врач. Врач-кардиолог высшей категории. Кандидат медицинских наук",
//       },
//       {
//         img: "https://www.facebook.com/hpi.kstu.kg/photos/a.883913118369973/2189632377798034/",
//         title: "Жаринова Мария Владимировна",
//         description:
//           "Главный врач. Врач-кардиолог высшей категории. Кандидат медицинских наук",
//       },
//       {
//         img: "https://www.facebook.com/hpi.kstu.kg/photos/a.883913118369973/2189632377798034/",
//         title: "Маленков Дмитрий Андреевич",
//         description:
//           "Главный врач. Врач-кардиолог высшей категории. Кандидат медицинских наук",
//       },
//     ];

//     return (
//       <>
//         <Slider {...settings}>
//           {arr.map((item, index) => {
//             return (
//               <div key={index}>
//                 {/* <Card sx={{ maxWidth: 350 }}>
//                   <CardActionArea>
//                     <CardMedia
//                       component="img"
//                       // height="400"
//                       image={item.img}
//                       alt="photo"
//                       className="photo-shoes"
//                     />
//                     <CardContent>
//                       <Typography
//                         fontSize={"1rem"}
//                         gutterBottom
//                         variant="h6"
//                         component="div"
//                       >
//                         {item.title}
//                       </Typography>{" "}
//                     </CardContent>
//                   </CardActionArea>
//                 </Card> */}
//                 <div id="carusel">
//                   <img src={item.img} alt="" />
//                   <div>
//                     <div id="docTitle">{item.title}</div>
//                     <div>{item.description}</div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </Slider>
//       </>
//     );
//   }
// }
