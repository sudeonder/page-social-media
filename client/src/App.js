import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material/";
import { StyledEngineProvider } from "@mui/material/styles";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import "./styles.css";
import logo from "./images/origami.png";

// Most CSS-in-JS solutions inject their styles at the bottom of the HTML <head>,
// which gives MUI precedence over your custom styles. To remove the need for !important,
// change the CSS injection order by using the StyledEngineProvider component.

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Container maxWidth="lg">
        <AppBar className="appBar" position="static" color="inherit">
          <Typography className="heading" variant="h2" align="center">
            Pages
          </Typography>
          <img className="logo" src={logo} alt="pages_logo" height="60" />
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
    </StyledEngineProvider>
  );
};

export default App;
