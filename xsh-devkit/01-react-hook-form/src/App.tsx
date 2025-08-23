import React from "react";
import Form from "./components/form/Form";
import AdvancedForm from "./components/form/AdvancedForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const App: React.FC = () => {
  return (
    <main className="flex items-center justify-center w-full min-h-screen bg-gray-950">
      <Tabs defaultValue="form" className="w-full max-w-2xl">
        <TabsList className="grid w-full grid-cols-2 bg-gray-900 border border-gray-800 rounded-xl">
          <TabsTrigger
            value="form"
            className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white rounded-lg text-white"
          >
            Login Form
          </TabsTrigger>
          <TabsTrigger
            value="advanced-form"
            className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white rounded-lg text-white"
          >
            Register Form
          </TabsTrigger>
        </TabsList>

        <TabsContent value="form" className="mt-6">
          <Form />
        </TabsContent>

        <TabsContent value="advanced-form" className="mt-6">
          <AdvancedForm />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default App;
