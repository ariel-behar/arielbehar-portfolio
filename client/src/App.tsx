import theme from "./theme/theme";

import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import RootView from "./views/RootView";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RootView />
		</ThemeProvider>
	);
}

export default App;
