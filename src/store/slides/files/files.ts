import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { update } from "lodash";
import { UserFile } from "../../../types/Files";

export interface FileState {
  userFiles: UserFile[];
  activeFilesIds: string[];
  editorActiveFileId: string | null;
}

export const initialState: FileState = {
  userFiles: [],
  activeFilesIds: [],
  editorActiveFileId: null
};

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setFiles(state, action: PayloadAction<UserFile[]>) {
      state.userFiles = action.payload
      state.activeFilesIds = []
    },
    addActiveFile(state, action: PayloadAction<string>) {
      state.activeFilesIds.push(action.payload)
    },

    removeActiveFile(state, action: PayloadAction<string>) {
      state.activeFilesIds = state.activeFilesIds.filter((id) => id !== action.payload)
    },

    setEditorActiveFile(state, action: PayloadAction<string | null>) {
      state.editorActiveFileId = action.payload
    },

    updateFileCode(state, action: PayloadAction<{ fileId: string, newCode: string }>) {
      const { fileId, newCode } = action.payload
      const { userFiles } = state
      const userFileToUpdate = userFiles.find((file) => file.id === fileId)

      if (userFileToUpdate) {
        userFileToUpdate.code = newCode
      }
    },
  }
})
export const { setFiles, addActiveFile, removeActiveFile, updateFileCode, setEditorActiveFile } = filesSlice.actions
export const filesReducer = filesSlice.reducer;