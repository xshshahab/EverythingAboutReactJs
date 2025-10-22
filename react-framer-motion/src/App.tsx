import React from "react";
import Basic from "./components/framer-motion/Basic";
import Transition from "./components/framer-motion/Transition";
import Keyframes from "./components/framer-motion/Keyframes";
import Variants from "./components/framer-motion/Variants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabData = [
  { value: "basic", label: "Basic", component: <Basic /> },
  { value: "transition", label: "Transition", component: <Transition /> },
  { value: "keyframes", label: "Keyframes", component: <Keyframes /> },
  { value: "variants", label: "Variants", component: <Variants /> },
];

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-accent-foreground">
      <Tabs defaultValue={tabData[0].value}>
        <TabsList>
          {tabData.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabData.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.component}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default App;
