import { useFormStore } from "@/zustand/store";
import type { FormFields } from "@/zustand/types/form.types";
import React, { useState, type ChangeEvent } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import FormField from "./FormField";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const FormBuilder: React.FC = () => {
  const { formFields, addField, updateField, removeField, resetField } =
    useFormStore();

  const [newField, setNewField] = useState<FormFields>({
    label: "",
    type: "text",
    value: "",
  });

  const fieldChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewField((prev) => ({ ...prev, [name]: value }));
  };

  const selectChangeHandler = (value: FormFields["type"]) => {
    setNewField((prev) => ({ ...prev, type: value }));
  };

  const addFieldHandler = () => {
    if (newField.label.trim() === "" || newField.type.trim() === "") {
      alert("All fields are required");
      return;
    }

    addField(newField);
    setNewField({
      label: "",
      type: "text",
      value: "",
    });
  };

  const fieldUpdateHandler = (index: number, updatedField: FormFields) => {
    updateField(index, updatedField);
  };

  const fieldRemoveHandler = (index: number) => {
    removeField(index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card className="shadow-md border border-border/60">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-primary">
            🧩 Form Builder
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Field creation section */}
          <div className="space-y-3">
            <Input
              type="text"
              name="label"
              placeholder="Enter field label"
              value={newField.label}
              onChange={fieldChangeHandler}
            />

            <Select
              name="type"
              value={newField.type}
              onValueChange={selectChangeHandler}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Field Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="text">Text</SelectItem>
                <SelectItem value="number">Number</SelectItem>
                <SelectItem value="textarea">Textarea</SelectItem>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="file">File</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="default"
                className="flex-1"
                onClick={addFieldHandler}
              >
                ➕ Add Field
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={resetField}
              >
                ♻️ Reset Form
              </Button>
            </div>
          </div>

          {/* Render form preview */}
          <form className="space-y-5 pt-6 border-t border-border/50">
            {formFields.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">
                No fields added yet. Add one above 👆
              </p>
            ) : (
              formFields.map((field, index) => (
                <FormField
                  key={index}
                  index={index}
                  field={field}
                  onUpdate={fieldUpdateHandler}
                  onRemove={fieldRemoveHandler}
                />
              ))
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormBuilder;
