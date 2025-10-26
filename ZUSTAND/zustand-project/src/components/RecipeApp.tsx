"use client";

import React, { useState } from "react";
import { useStore, type Recipe } from "@/store/useStore";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  PlusCircle,
  Trash2,
  Edit,
  CheckCircle2,
  XCircle,
  BookOpen,
} from "lucide-react";
import { toast } from "sonner";

const RecipeApp: React.FC = () => {
  const { recipes, addRecipe, removeRecipe } = useStore();
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);

  const resetForm = () => {
    setEditingRecipe(null);
    setName("");
    setIngredients("");
    setInstructions("");
  };

  const validateForm = () => {
    if (!name.trim() || !ingredients.trim() || !instructions.trim()) {
      toast.error("Please fill out all fields before saving.");
      return false;
    }
    return true;
  };

  const addRecipeHandle = () => {
    if (!validateForm()) return;
    addRecipe({
      id: Math.floor(Math.random() * 99999),
      name,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      instructions,
    });
    toast.success(`"${name}" has been added successfully!`);
    resetForm();
  };

  const handleEditRecipe = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setName(recipe.name);
    setIngredients(recipe.ingredients.join(", "));
    setInstructions(recipe.instructions);
  };

  const updateRecipeHandle = () => {
    if (!validateForm() || !editingRecipe) return;
    removeRecipe(editingRecipe.id);
    addRecipe({
      id: Math.floor(Math.random() * 99999),
      name,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      instructions,
    });
    toast.success(`"${name}" has been updated successfully!`);
    resetForm();
  };

  const cancelEditHandle = () => {
    toast.info("Recipe editing cancelled.");
    resetForm();
  };

  const deleteRecipeHandle = (id: number, recipeName: string) => {
    removeRecipe(id);
    toast.warning(`"${recipeName}" has been deleted.`);
  };

  return (
    <div className="h-screen w-full flex bg-linear-to-br from-green-100 to-green-200 overflow-hidden">
      <div className="w-1/2 max-w-md bg-white p-8 flex flex-col justify-center border-r border-green-200 shadow-xl">
        <div className="flex items-center justify-center gap-3 mb-6">
          <BookOpen className="w-8 h-8 text-green-700" />
          <h1 className="text-3xl font-bold text-green-800 tracking-tight">
            Recipe Book
          </h1>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="recipeName" className="text-green-800 font-medium">
              Recipe Name
            </Label>
            <Input
              id="recipeName"
              type="text"
              placeholder="e.g. Paneer Butter Masala"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ingredients" className="text-green-800 font-medium">
              Ingredients
            </Label>
            <Input
              id="ingredients"
              type="text"
              placeholder="e.g. Paneer, Butter, Tomatoes"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="instructions"
              className="text-green-800 font-medium"
            >
              Instructions
            </Label>
            <Textarea
              id="instructions"
              placeholder="e.g. Cook onions, add tomatoes, then paneer..."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="min-h-[120px]"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            {editingRecipe ? (
              <>
                <Button
                  onClick={updateRecipeHandle}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Update
                </Button>
                <Button
                  variant="secondary"
                  onClick={cancelEditHandle}
                  className="flex items-center gap-2"
                >
                  <XCircle className="w-4 h-4" />
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                onClick={addRecipeHandle}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white"
              >
                <PlusCircle className="w-4 h-4" />
                Add Recipe
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        {recipes.length === 0 ? (
          <div className="flex h-full items-center justify-center text-gray-500 italic">
            No recipes yet. Add one on the left!
          </div>
        ) : (
          <ul className="space-y-4 pb-8">
            {recipes.map((recipe) => (
              <li
                key={recipe.id}
                className="p-5 bg-white rounded-lg border border-green-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-green-800 mb-2">
                  {recipe.name}
                </h2>
                <p className="text-gray-700 mb-2">
                  <strong className="text-green-700">Ingredients:</strong>{" "}
                  {recipe.ingredients.join(", ")}
                </p>
                <p className="text-gray-700 whitespace-pre-line">
                  <strong className="text-green-700">Instructions:</strong>{" "}
                  {recipe.instructions}
                </p>

                <div className="flex justify-end gap-3 mt-4">
                  <Button
                    variant="outline"
                    onClick={() => handleEditRecipe(recipe)}
                    className="flex items-center gap-2"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => deleteRecipeHandle(recipe.id, recipe.name)}
                    className="flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RecipeApp;
