import { create } from "zustand";

export interface Expense {
  id: number;
  description: string;
  amount: number;
}

type StoreType = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  removeExpense: (id: number) => void;
};

export const useStore = create<StoreType>((set) => ({
  expenses: [],
  addExpense: (expense) =>
    set((state) => ({
      expenses: [...state.expenses, expense],
    })),
  removeExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== id),
    })),
}));
