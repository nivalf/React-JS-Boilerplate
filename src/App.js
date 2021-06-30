/* 
    Add all App level wrappings here
*/

import React from "react";
import { Provider } from "react-redux";
import { store, history } from "./redux/store";
import PublicRoutes from "./router";

const App = () => (
    <Provider store={store}>
        <PublicRoutes history={history} />
    </Provider>
);

export default App;
