import { createContext } from "react";

import React from "react";

export const ConterContext = createContext(null);

export const CounterProvider = (props) => {
  
  return (
    <ConterContext.Provider>
      <div>Counter</div>
    </ConterContext.Provider>
  );
};

export default CounterProvider;
