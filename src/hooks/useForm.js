import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [formState, setFormState] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleBlur = (event) => {
    onInputChange(event);
    setErrors(validateForm(formState));
  };

  return {
    formState,
    errors,
    loading,
    response,
    validateForm,
    onInputChange,
    handleBlur,
    setErrors,
    setFormState,
  };
};
