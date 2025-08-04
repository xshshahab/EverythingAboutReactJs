import React from 'react';
import CopyInput from "./components/portal/CopyInput";
import Switcher from "./components/portal/Switcher";
import PortalWrapper from './wrapper/PortalWrapper';
import UseEffectWrapper from "./wrapper/UseEffectWrapper"
import WithoutDependenciesArray from './components/use-effect/WithoutDependenciesArray';
import EmptyDependenciesArray from './components/use-effect/EmptyDependenciesArray';
import ValueWithDependenciesArray from './components/use-effect/ValueWithDependenciesArray';
import FetchingData from './components/use-effect/FetchingData';

const App = () => {
  return (
    <main>
      <PortalWrapper>
        <CopyInput />
        <Switcher />
      </PortalWrapper>
      <br />
      <hr />
      <br />
      <UseEffectWrapper>
        <WithoutDependenciesArray />
        <EmptyDependenciesArray />
        <ValueWithDependenciesArray />
        <FetchingData />
      </UseEffectWrapper>
    </main>
  );
}

export default App;