export function optionValidator({ index, title, otherOptions, optionErrors }) {
  let newErrors = { ...optionErrors };
  let currentOtherOptions = [...otherOptions];
  currentOtherOptions[index] = { ...otherOptions[index], title: title };

  for (let i = 0; i < otherOptions.length; i++) {
    if (i === index) continue;
    if (otherOptions[i].title === title) {
      newErrors = { ...newErrors, ["option" + i]: "El titulo no debe repetirse" };
      newErrors = { ...newErrors, ["option" + index]: "El titulo no debe repetirse" };
    }
  }
  if (!otherOptions.map((option) => option.title).includes(title)) {
    newErrors = { ...newErrors, ["option" + index]: "" };
  }

  Object.keys(newErrors).forEach((key) => {
    const index = key.split("option")[1];
    const wrongTitle = currentOtherOptions[index].title;
    let count = 0;
    currentOtherOptions.forEach((option) => {
      if (option.title === wrongTitle) count++;
    });
    if (count <= 1) newErrors = { ...newErrors, [key]: "" };
  });

  return newErrors;
}
