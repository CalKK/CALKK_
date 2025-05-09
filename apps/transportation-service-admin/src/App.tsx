import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RouteList } from "./route/RouteList";
import { RouteCreate } from "./route/RouteCreate";
import { RouteEdit } from "./route/RouteEdit";
import { RouteShow } from "./route/RouteShow";
import { PickUpDropOffPointList } from "./pickUpDropOffPoint/PickUpDropOffPointList";
import { PickUpDropOffPointCreate } from "./pickUpDropOffPoint/PickUpDropOffPointCreate";
import { PickUpDropOffPointEdit } from "./pickUpDropOffPoint/PickUpDropOffPointEdit";
import { PickUpDropOffPointShow } from "./pickUpDropOffPoint/PickUpDropOffPointShow";
import { PsvList } from "./psv/PsvList";
import { PsvCreate } from "./psv/PsvCreate";
import { PsvEdit } from "./psv/PsvEdit";
import { PsvShow } from "./psv/PsvShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TransportationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Route"
          list={RouteList}
          edit={RouteEdit}
          create={RouteCreate}
          show={RouteShow}
        />
        <Resource
          name="PickUpDropOffPoint"
          list={PickUpDropOffPointList}
          edit={PickUpDropOffPointEdit}
          create={PickUpDropOffPointCreate}
          show={PickUpDropOffPointShow}
        />
        <Resource
          name="Psv"
          list={PsvList}
          edit={PsvEdit}
          create={PsvCreate}
          show={PsvShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
