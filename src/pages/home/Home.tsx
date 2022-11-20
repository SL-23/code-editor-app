import { makeStyles } from "@material-ui/core";
import ProgrammingLanguageList from "./ProgrammingLanguageList";
import { styled } from "@mui/material/styles"
import Layout from "../../components/common/layout/Layout";
const HomeContainer = styled('div')(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  alignItems: "center",
  backgroundColor: theme.background
}))

const WelcomeMessage = styled("div")(({ theme }) => ({
  padding: "15px",
  fontSize: "30px",
  color: theme.font
}))

const Home = () => <Layout>
  <HomeContainer>
    <WelcomeMessage>Welcome!</WelcomeMessage>
    <ProgrammingLanguageList />
  </HomeContainer>
</Layout>
export default Home;