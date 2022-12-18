

import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserFile } from '../../../types/Files';
import { readFile } from '../../../utils/read-file';
import { setFiles } from '../../slides/files/files';

export const readFiles = createAsyncThunk('files/readFiles', async (files: FileList, { dispatch }) => {
  const promises = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    promises.push(readFile(file));
  }

  const userFiles = await Promise.all(promises) as UserFile[];
  dispatch(setFiles(userFiles));
});