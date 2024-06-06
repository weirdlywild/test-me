import * as React from "react";
import { useLogin, useNotify, Notification, defaultTheme } from "react-admin";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import "./login.scss";

const CLASS_NAME = "login-page";

const LoginPage = () => {
  const login = useLogin();
  const notify = useNotify();
  const BASE_URI = process.env.REACT_APP_SERVER_URL || "";
  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    notify("Redirecting to Auth0");
    login({});
  };

  return (
    <ThemeProvider theme={createTheme(defaultTheme)}>
      <div className={`${CLASS_NAME}`}>
        <div className={`${CLASS_NAME}__wrapper`}>
          <div className={`${CLASS_NAME}__box`}>
            <img
              src="https://amplication.com/assets/graphql.png"
              alt="GraphQL API"
            />
            <h2>Connect via GraphQL</h2>
            <div className={`${CLASS_NAME}__box__message`}>
              Connect to the server using GraphQL API with a complete and
              understandable description of the data in your API
            </div>
            <Button
              type="button"
              variant="contained"
              color="primary"
              href={`${BASE_URI}/graphql`}
            >
              Continue
            </Button>
          </div>
          <div className={`${CLASS_NAME}__box`}>
            <img
              src="https://amplication.com/assets/react-admin.png"
              alt="React-Admin"
            />
            <h2>Admin UI</h2>
            <div className={`${CLASS_NAME}__box__message`}>
              Sign in to a React-Admin client with ready-made forms for creating
              and editing all the data models of your application
            </div>
            <div className={`${CLASS_NAME}__box__message`}>
              Click the button below to sign in to the React-Admin client with
              Auth0 authentication.
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={submit}
            >
              Log in
            </Button>
          </div>
          <div className={`${CLASS_NAME}__box`}>
            <img
              src="https://amplication.com/assets/restapi.png"
              alt="REST API"
            />
            <h2>Connect via REST API</h2>
            <div className={`${CLASS_NAME}__box__message`}>
              Connect to the server using REST API with a built-in Swagger
              documentation
            </div>
            <Button
              type="button"
              variant="contained"
              color="primary"
              href={`${BASE_URI}/api`}
            >
              Continue
            </Button>
          </div>

          <Notification />
        </div>
        <div className={`${CLASS_NAME}__read-more`}>
          <span>Read </span>
          <a href="https://docs.amplication.com/api" target="docs">
            Amplication docs
          </a>
          <span> to learn more</span>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LoginPage;
