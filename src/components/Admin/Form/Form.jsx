import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
// import "./Form.css";

const initValues = {
  title: "",
  type: "",
  price: "",
  description: "",
  img: "",
  img2: "",
};

const Form = ({ saveValues, compForEdit, forEditVal, getOneProduct }) => {
  const [inpValues, setInpValues] = useState(initValues);
  const { id } = useParams();

  //todo ===> EDIT
  useEffect(() => {
    if (compForEdit) {
      getOneProduct(id);
    }
  }, []);
  useEffect(() => {
    if (compForEdit && forEditVal) {
      setInpValues(forEditVal);
    }
  }, [forEditVal]);

  //todo ===> END OF EDIT

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...inpValues,
      price: +inpValues.price,
    };
    saveValues(obj);
  };

  return (
    <div className="form-border">
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "grey",
        }}
      >
        <TextField
          name="title"
          value={inpValues.title}
          onChange={(e) => handleChange(e)}
          id="standard-basic"
          label="Название"
          variant="standard"
          sx={{ color: "white" }}
          margin="normal"
        />
        {/* <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name="type"
            value={inpValues.type}
            label="Type"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"fragrance"}>Fragrance</MenuItem>
            <MenuItem value={"watches"}>Watches</MenuItem>
            <MenuItem value={"makeup"}>Makeup</MenuItem>
          </Select>
        </FormControl> */}
        {/* <TextField
          type="number"
          name="price"
          value={inpValues.price}
          onChange={(e) => handleChange(e)}
          id="standard-basic"
          label="Price"
          variant="standard"
          margin="normal"
        /> */}
        <TextField
          name="img"
          value={inpValues.img}
          onChange={(e) => handleChange(e)}
          id="standard-basic"
          label="Картина"
          variant="standard"
        />
        <TextField
          name="img2"
          value={inpValues.img2}
          onChange={(e) => handleChange(e)}
          id="standard-basic"
          label="Картина2"
          variant="standard"
          multiline
        />
        <TextField
          name="description"
          value={inpValues.description}
          onChange={(e) => handleChange(e)}
          id="standard-basic"
          label="Описание"
          variant="standard"
          multiline
          rows={3}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "black", marginBottom: "20px" }}
        >
          Добавить
        </Button>
      </form>
    </div>
  );
};

export default Form;
