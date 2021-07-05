import { createAsyncThunk } from '@reduxjs/toolkit';
import sources from 'api/sources';


export const fetchPlayerData = createAsyncThunk(
  'home/fetchPlayerData',
  async () => {
    const response = await sources.rushingYardData.get()
    return response.json();
  }
);
