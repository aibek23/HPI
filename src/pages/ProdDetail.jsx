import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContextProvider";
import Spinner from "../components/Spinner/Spinner";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./pages.css";

const ProdDetail = () => {
  const { prodId } = useParams();
  const { getOneProduct, forEditVal } = useProductContext();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(prodId);
  }, []);

  return (
    <Container maxWidth="lg">
      <div>
        <Paper>
          <div className="prodDetail">
            <IconButton onClick={() => navigate(-1)}>
              <ArrowBackIosNewIcon fontSize="large" sx={{ color: "black" }} />
            </IconButton>
          </div>
          {forEditVal ? (
            <>
              <Card sx={{ marginBottom: "20px" }}>
                <div className="detail_body">
                  <div className="detail_right">
                    <CardHeader
                      title={forEditVal.title}
                      sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    />
                    <CardMedia
                      component="img"
                      image={forEditVal.img}
                      alt={forEditVal.title}
                      sx={{
                        width: "100%",
                        height: "80vh",
                        textAlign: "center",
                      }}
                    />
                    <CardMedia
                      component="img2"
                      image={forEditVal.img2}
                      alt={forEditVal.title}
                      sx={{
                        width: "100%",
                        height: "80vh",
                        textAlign: "center",
                      }}
                    />
                    <CardContent>
                      <Typography
                        id="desc"
                        variant="body2"
                        color="text.secondary"
                      >
                        {forEditVal.description}
                      </Typography>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </>
          ) : (
            <Spinner />
          )}
        </Paper>
      </div>
    </Container>
  );
};

export default ProdDetail;
