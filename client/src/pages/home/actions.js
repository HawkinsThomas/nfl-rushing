import { createAsyncThunk } from '@reduxjs/toolkit';
import sources from 'api/sources';


export const fetchPlayerData = createAsyncThunk(
  'home/fetchPlayerData',
  async ({ startIndex, numberOfRows }) => {
    const response = await sources.rushingYardData.get(startIndex, numberOfRows)
    return response.json();
  }
);
