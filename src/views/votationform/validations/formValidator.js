export function formValidator(name, value, form) {
  const validator = {
    title: (value) => {
      if (value.length > 100) {
        return "El titulo debe tener menos de 100 caracteres";
      }
      return "";
    },
    description: (value) => {
      if (value.length > 255) {
        return "La descripción debe tener menos de 255 caracteres";
      }
      return "";
    },
    opening_date: (value) => {
      try {
        if (new Date(value) < new Date()) {
          return "La fecha de apertura debe ser posterior a la actual";
        }
        return "";
      } catch (error) {
        return "La fecha de apertura debe ser una fecha válida";
      }
    },
    closing_date: (value) => {
      try {
        if (new Date(value) < new Date(form.opening_date)) {
          return "La fecha de cierre debe ser posterior a la de apertura";
        }
        return "";
      } catch (error) {
        return "La fecha de cierre debe ser una fecha válida";
      }
    },
  };

  return validator[name](value);
}
