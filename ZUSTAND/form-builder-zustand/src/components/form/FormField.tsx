import type { FormFields } from "@/zustand/types/form.types";
import React, { type ChangeEvent } from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface FormFieldProps {
  field: FormFields;
  index: number;
  onUpdate: (index: number, updatedField: FormFields) => void;
  onRemove: (index: number) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  field,
  index,
  onUpdate,
  onRemove,
}) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onUpdate(index, { ...field, value: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
      ? Array.from(e.target.files)
          .map((file) => file.name)
          .join(", ")
      : "";
    onUpdate(index, { ...field, value: files });
  };

  return (
    <Card className="p-4 border border-border/50 rounded-lg space-y-3 shadow-sm hover:shadow-md transition">
      {/* Header with label and remove button */}
      <div className="flex justify-between items-center">
        <Label className="font-medium text-sm text-foreground/80">
          {field.label}
        </Label>
        <Button
          type="button"
          size="sm"
          variant="destructive"
          onClick={() => onRemove(index)}
        >
          🗑 Remove
        </Button>
      </div>

      {/* Field rendering logic */}
      {field.type === "textarea" ? (
        <Textarea
          placeholder={`Enter ${field.label.toLowerCase()}...`}
          value={field.value}
          onChange={handleChange}
        />
      ) : field.type === "file" ? (
        <Input type="file" onChange={handleFileChange} />
      ) : (
        <Input
          type={field.type as "text" | "number" | "password" | "date"}
          value={field.value}
          placeholder={`Enter ${field.label.toLowerCase()}...`}
          onChange={handleChange}
        />
      )}
    </Card>
  );
};

export default FormField;
