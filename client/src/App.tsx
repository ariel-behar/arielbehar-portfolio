import { Suspense, lazy } from "react";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import theme from "./theme/theme";

import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import Loader from "./views/Loader";
const RootView = lazy(() => import("./views/RootView")) 

if(process.env.NODE_ENV === 'production') disableReactDevTools();

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Suspense fallback={<Loader />} >
				<RootView />
			</Suspense>
		</ThemeProvider>
	);
}

export default App;
