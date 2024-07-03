import React from "react";
import {
  NavTitle,
} from "../../../Styles/NavBar/nav01";
import { Divider, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const NavSeller = () => {
  return (
    <Grid container spacing={4} alignItems="center" sx={{ padding: "0 7vw" }}>
      <Grid item md={3} lg={3} my={5} mx={4}  >
      <Link to="/" style={{ textDecoration: "none" }}>
        <NavTitle sx={{ color: "#ff5003" }}>Thrifting.lk</NavTitle>
        </Link>
        <Divider orientation="vertical" flexItem />
      </Grid>
    </Grid>
  );
};
