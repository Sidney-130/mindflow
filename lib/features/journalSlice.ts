import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type JournalEntry = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

type JournalState = {
  entries: JournalEntry[];
};

const initialState: JournalState = {
  entries: [],
};

const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<JournalEntry>) => {
      state.entries.push(action.payload);
    },
    deleteEntry: (state, action: PayloadAction<string>) => {
      state.entries = state.entries.filter((e) => e.id !== action.payload);
    },
    editEntry: (
      state,
      action: PayloadAction<{ id: string; title: string; content: string }>
    ) => {
      const index = state.entries.findIndex((e) => e.id === action.payload.id);
      if (index !== -1) {
        state.entries[index].title = action.payload.title;
        state.entries[index].content = action.payload.content;
      }
    },
  },
});

export const { addEntry, deleteEntry, editEntry } = journalSlice.actions;
export default journalSlice.reducer;
