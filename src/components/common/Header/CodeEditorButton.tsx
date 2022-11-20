import { Button } from "@mui/material";
import { styled } from "@mui/material/styles"
import { useHistory } from "react-router";
import path from "../../../routes/paths"

const CodeEditorStyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white
}))

const CodeEditorButton = () => {
  const history = useHistory()

  const onClick = () => {
    history.push(path.codeEditor)
  }

  return <CodeEditorStyledButton onClick={onClick}>Code editor</CodeEditorStyledButton>
}

export default CodeEditorButton;