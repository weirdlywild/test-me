import React, { useEffect, useState } from "react";
import { Admin, DataProvider } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { LearningMapList } from "./learningMap/LearningMapList";
import { LearningMapCreate } from "./learningMap/LearningMapCreate";
import { LearningMapEdit } from "./learningMap/LearningMapEdit";
import { LearningMapShow } from "./learningMap/LearningMapShow";
import { H5PList } from "./h5P/H5PList";
import { H5PCreate } from "./h5P/H5PCreate";
import { H5PEdit } from "./h5P/H5PEdit";
import { H5PShow } from "./h5P/H5PShow";
import { QuizList } from "./quiz/QuizList";
import { QuizCreate } from "./quiz/QuizCreate";
import { QuizEdit } from "./quiz/QuizEdit";
import { QuizShow } from "./quiz/QuizShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { auth0AuthProvider } from "./auth-provider/ra-auth-auth0";

const history = createHistory();

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: DataProvider) => {
        setDataProvider(() => provider);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Admin
          history={history}
          title={"CMS"}
          dataProvider={dataProvider}
          authProvider={auth0AuthProvider}
          theme={theme}
          dashboard={Dashboard}
          loginPage={Login}
        >
          <Resource
            name="LearningMap"
            list={LearningMapList}
            edit={LearningMapEdit}
            create={LearningMapCreate}
            show={LearningMapShow}
          />
          <Resource
            name="H5P"
            list={H5PList}
            edit={H5PEdit}
            create={H5PCreate}
            show={H5PShow}
          />
          <Resource
            name="Quiz"
            list={QuizList}
            edit={QuizEdit}
            create={QuizCreate}
            show={QuizShow}
          />
          <Resource
            name="User"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
        </Admin>
      </BrowserRouter>
    </div>
  );
};

export default App;
