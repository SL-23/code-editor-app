import { createSlice } from "@reduxjs/toolkit";
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
  reducers: {}
})

export const filesReducer = filesSlice.reducer;