import { TreeViewNode } from "../../../types/Files";
import { AppDispatch, RootState } from "../../../types/Store";
import { addActiveFile, setEditorActiveFile } from "../../slides/files/files";

export const openFile = (node: TreeViewNode) => (dispatch: AppDispatch, getState: () => RootState) => {
  const { id, children } = node;
  if (children) {
    return;
  }

  const {
    files: { activeFilesIds }
  } = getState()

  if (!activeFilesIds || !activeFilesIds.includes(id)) {
    dispatch(addActiveFile(id))
  }
  dispatch(setEditorActiveFile(id))
}