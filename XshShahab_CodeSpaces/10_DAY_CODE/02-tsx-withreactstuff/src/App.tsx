import EventHandling from "./components/EventHandling";
import FocusInput from "./components/FocusInput";
import ContactForm from "./components/form/ContactForm";
import Form from "./components/form/Form";
import Seperator from "./Seperator";

function App() {
  return (
    <main>
      <Seperator />
      <Form />
      <Seperator />
      <FocusInput />
      <Seperator />
      <ContactForm />
      <Seperator />
      <EventHandling />
      <Seperator />
    </main>
  );
}

export default App;
