import AuthProvider from "auth/AuthProvider";
import { BrowserRouter as Rounter } from "react-router-dom";
import CustomThemeProvider from "theme/CustomThemeProvider";
import Routes from "./route/routes";

function App() {
  return (
   <AuthProvider>
     <CustomThemeProvider>
       <Routes/>
      </CustomThemeProvider>
   </AuthProvider>
  );
}

export default App;
