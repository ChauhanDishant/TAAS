import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Login } from "../Login/Login";
import { Link } from "react-router-dom";

const defaultTheme = createTheme();

export function Signup({ setIsAuthenticated }) {
  const [phonenumber, setPhonenumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstname, setFirstname] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phonenumber"
                  label="Phone Number"
                  name="phonenumber"
                  autoComplete="phonenumber"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <div class="flex items-center mb-4">
                  <legend class="sr-only">Checkbox variants</legend>

                  <input
                    id="checkbox-1"
                    type="checkbox"
                    required
                    class="w-4 h-4 border-gray-300 rounded focus:ring-primary-600 dark:border-gray-600 dark:focus:ring-primary-600"
                  />
                  <label
                    for="checkbox-1"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    I agree to the{" "}
                    <a
                      href=""
                      class="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              onSubmit={handleSubmit}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              component={Link} // Use the Link component for the button
              to="/Home" // Redirect to the Signup page
            >
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                Already have an account?
                <Link
                  to="/Login" // Use the appropriate route path here
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
