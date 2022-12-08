import { createSelector } from "@reduxjs/toolkit";
import { UserFile } from "../../../types/Files";
import { RootState } from "../../../types/Store";
import { FileState } from "../../slides/files/files";

type UserFilesMap = { [key: string]: UserFile }

const selectActiveFiles = (files: FileState) => {
  const { userFiles, activeFilesIds } = files
  const userFilesMap = userFiles.reduce((result, activeFile) => {
    result[activeFile.id] = activeFile
    return result
  }, {} as UserFilesMap)
  return activeFilesIds.map((activeFileId) => userFilesMap[activeFileId])
}

export default createSelector((state: RootState) => state.files, selectActiveFiles)