import { useState } from "react";
import { Flex, Text, Button, ThemePanel } from "@radix-ui/themes";

const App = () => {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
      </Flex>

      <Button onClick={() => setShowPanel((prev) => !prev)}>
        {showPanel ? "Close Theme Panel" : "Open Theme Panel"}
      </Button>

      {showPanel && <ThemePanel />}
    </>
  );
};

export default App;
