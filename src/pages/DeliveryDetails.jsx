import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDispatch } from "react-redux";
import { setCity, setLeaserEmail, setLeaserName, setMailAddress1, setMailAddress2, setRegistrationNumber, setState, setZipcode } from "../store/slices/orgSlice";

const DeliveryDetails = () => {
    const dispatch = useDispatch();
  return (
    <div>
    <div className="delivery-container">
      <div style={{ width: "48%" }}>
        <h3>Org name</h3>
        <div style={{ marginBottom: "2rem" }}>
          <TextField
            id="outlined-password-input"
            label="Name"
            autoComplete="name"
            fullWidth
            onChange={(e) => dispatch(setLeaserName(e.target.value))}
          />
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <TextField
            id="outlined-password-input"
            label="Email"
            type="email"
            autoComplete="Email"
            fullWidth
            onChange={(e) => dispatch(setLeaserEmail(e.target.value))}
          />
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <TextField
            id="outlined-password-input"
            label="Registration Number"
            autoComplete="Email"
            fullWidth
            onChange={(e) => dispatch(setRegistrationNumber(e.target.value))}
          />
        </div>
        </div>
        <div style={{ width: "48%" }}>
        <h3>Mailing address</h3>
        <div style={{ marginBottom: "2rem" }}>
          <TextField
            id="outlined-password-input"
            label="Mailing address 1"
            autoComplete="address"
            fullWidth
            onChange={(e) => dispatch(setMailAddress1(e.target.value))}
          />
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <TextField
            id="outlined-password-input"
            label="Mailing address 2"
            autoComplete="address"
            fullWidth
            onChange={(e) => dispatch(setMailAddress2(e.target.value))}
          />
        </div>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <TextField
            id="outlined-password-input"
            label="City"
            autoComplete="city"
            style={{ flex: "1" }}
            onChange={(e) => dispatch(setCity(e.target.value))}
          />
          <FormControl style={{ flex: "1" }}>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="State"
              onChange={(e) => dispatch(setState(e.target.value))}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-password-input"
            label="ZIP"
            autoComplete="zip"
            style={{ flex: "1" }}
            onChange={(e) => dispatch(setZipcode(e.target.value))}
          />
        </div>
      </div>
      </div>
      <div style={{ border:"1px solid lightgray" }}>
        <h3>Upload Relevant Document</h3>
        <div className="file-upload">
          <CloudUploadIcon />
          <input type="file" />
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
