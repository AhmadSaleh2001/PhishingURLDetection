import { createContext, useState } from "react";
const MyRealContext = createContext("ForActiveClassess");
const MyContext = ({ children }) => {
  let [Path, SetPath] = useState("/");

  return (
    <>
      <MyRealContext.Provider value={{ Path, SetPath }}>
        {children}
      </MyRealContext.Provider>
    </>
  );
};
export default MyContext;
export { MyRealContext };
