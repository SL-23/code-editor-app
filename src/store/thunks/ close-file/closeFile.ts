import { AppDispatch, RootState } from "../../../types/Store";
import { removeActiveFile, setEditorActiveFile } from "../../slides/files/files";

const getNewActiveFileId = (activeFileIds: string[], activeFilesLength: number, fileToCloseId: string) => {
  const fileToBeRemovedIndex = activeFileIds.indexOf(fileToCloseId)

  return fileToBeRemovedIndex < activeFilesLength - 1 ? activeFileIds[fileToBeRemovedIndex + 1] : activeFileIds[fileToBeRemovedIndex - 1];
}

export const closeFile = (fileToCloseId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
  const { files: { activeFilesIds, editorActiveFileId } } = getState()
  const activeFilesLength = activeFilesIds.length

  if (activeFilesLength === 1) {
    dispatch(setEditorActiveFile(null))
  } else if (activeFilesLength >= 2 && fileToCloseId === editorActiveFileId) {
    const newActiveFileId = getNewActiveFileId(activeFilesIds, activeFilesLength, fileToCloseId)
    dispatch(setEditorActiveFile(newActiveFileId))
  }
  dispatch(removeActiveFile(fileToCloseId))
} 