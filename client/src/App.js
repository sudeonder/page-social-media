import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material/";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import "./styles.css";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar className="appBar" position="static" color="inherit">
        <Typography className="heading" variant="h2" align="center">
          Pages
        </Typography>
        <img className="image" src="pages" alt="pages_logo" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
