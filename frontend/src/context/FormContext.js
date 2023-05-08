import { createContext, useContext, useState } from "react";

export const FormContext = createContext();
export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [isEditForm, setIsEditForm] = useState(false);
  return (
  <FormContext.Provider value={{isEditForm, setIsEditForm}}>
    {children}
  </FormContext.Provider>
  )
};
