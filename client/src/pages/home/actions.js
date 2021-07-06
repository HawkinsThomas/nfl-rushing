import { createAsyncThunk } from '@reduxjs/toolkit';
import sources from 'api/sources';


export const fetchPlayerData = createAsyncThunk(
  'home/fetchPlayerData',
  async ({ startIndex, numberOfRows, sortKey, inverted }) => {
    const response = await sources.rushingYardData.get(startIndex, numberOfRows, sortKey, inverted )
    return response.json();
  }
);
