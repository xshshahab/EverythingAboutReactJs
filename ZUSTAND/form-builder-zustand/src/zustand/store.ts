import { create } from "zustand";
import type { FormStoreState } from "./types/form.types.ts";

export const useFormStore = create<FormStoreState>((set) => ({
  formFields: [],
  addField: (field) =>
    set((state) => ({ formFields: [...state.formFields, field] })),
  removeField: (index) =>
    set((state) => ({
      formFields: state.formFields.filter((_, idx) => idx !== index),
    })),
  updateField: (index, updatedField) =>
    set((state) => ({
      formFields: state.formFields.map((field, idx) =>
        idx === index ? updatedField : field
      ),
    })),
  resetField: () => set({ formFields: [] }),
}));
