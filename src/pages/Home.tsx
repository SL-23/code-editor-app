import { makeStyles } from "@material-ui/core";
import ProgrammingLanguageList from "../components/common/Home/ProgrammingLanguageList";
import { styled } from "@mui/material/styles"
const HomeContainer = styled('div')(({ theme }) => ({
  display: "flex",
  flexDirection: "column"
}))

const WelcomeMessage = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.background
}))

const Home = () => <div>
  <HomeContainer>
    <WelcomeMessage>Welcome!</WelcomeMessage>
    <ProgrammingLanguageList />
  </HomeContainer>
</div>
export default Home;