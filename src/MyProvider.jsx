import React, { useState } from "react";
import ContextStore from "./Store";

export default function MyProvider({children}) {
 // const [state, setState] = useState("");
  const [list,setList]= useState([]);

  const contextValue={
   // state,setState,
    list,setList
  }

  return (
    // <MyContext.Provider value={}>{children}</MyContext.Provider>
    <ContextStore.Provider value={contextValue}>{children}</ContextStore.Provider>
  );
}
