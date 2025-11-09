export type FieldType =
  | "text"
  | "number"
  | "password"
  | "textarea"
  | "date"
  | "file";

export interface FormFields {
  label: string;
  type: FieldType;
  value: string;
}

export interface FormStoreState {
  formFields: FormFields[];
  addField: (field: FormFields) => void;
  removeField: (index: number) => void;
  updateField: (index: number, updatedField: FormFields) => void;
  resetField: () => void;
}
