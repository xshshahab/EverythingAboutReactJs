import React, { useState } from "react";
import { useStore } from "../store/store";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

const ExpenseTracker: React.FC = () => {
  const { expenses, addExpense, removeExpense } = useStore();

  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");

  const handleAddExpense = () => {
    if (description.trim() === "" || amount === "") {
      toast.error("Please enter both amount and description");
      return;
    }

    addExpense({
      id: Date.now(),
      description,
      amount: +amount,
    });

    toast.success(`Added: ${description} ($${(+amount).toFixed(2)})`);

    setDescription("");
    setAmount("");
  };

  const handleRemoveExpense = (id: number, desc: string, amt: number) => {
    removeExpense(id);
    toast.info(`Deleted: ${desc} ($${amt.toFixed(2)})`);
  };

  const total = expenses.reduce((t, e) => t + e.amount, 0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 p-6">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
          Expense Tracker
        </h1>

        {/* Inputs */}
        <div className="space-y-3 mb-6">
          <Input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value === "" ? "" : Number(e.target.value))
            }
            className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500"
          />
          <Input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500"
          />
          <Button
            onClick={handleAddExpense}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
          >
            Add Expense
          </Button>
        </div>

        {/* Expense List */}
        <div className="space-y-3">
          {expenses.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No expenses yet
            </p>
          ) : (
            expenses.map((expense) => (
              <div
                key={expense.id}
                className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-3"
              >
                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    {expense.description}
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ${expense.amount.toFixed(2)}
                  </span>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() =>
                    handleRemoveExpense(
                      expense.id,
                      expense.description,
                      expense.amount
                    )
                  }
                  className="text-gray-500 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))
          )}
        </div>

        {/* Total */}
        <div className="mt-6 border-t border-gray-200 dark:border-gray-800 pt-4">
          <div className="flex justify-between text-gray-800 dark:text-gray-100 text-sm font-medium">
            <span>Total</span>
            <Badge
              variant="secondary"
              className="bg-indigo-600 text-white dark:bg-indigo-500"
            >
              ${total.toFixed(2)}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
