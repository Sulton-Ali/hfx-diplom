import { create } from "zustand";

interface ITestData {
  id: number;
  total: number;
  current: number;
  correct: number;
  incorrect: number;
}

interface ITestStore {
  data: ITestData;
  updateData: (data: Partial<ITestData>) => void;
}

export const useTestStore = create<ITestStore>()((set) => ({
  data: {
    id: 1,
    total: 1,
    current: 1,
    correct: 0,
    incorrect: 0,
  },
  updateData: (data) =>
    set((state) => ({
      data: {
        ...state.data,
        ...data,
      },
    })),
}));
