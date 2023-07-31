export function optionValidator({ index, title, allOptions, optionErrors }) {
  let newErrors = { ...optionErrors };
  let currentOtherOptions = [...allOptions];
  currentOtherOptions[index] = { ...allOptions[index], title: title };

  for (let i = 0; i < allOptions.length; i++) {
    if (i === index) continue;
    if (allOptions[i].title === title) {
      newErrors = { ...newErrors, ["option" + i]: "El titulo no debe repetirse" };
      newErrors = { ...newErrors, ["option" + index]: "El titulo no debe repetirse" };
    }
  }
  if (!allOptions.map((option) => option.title).includes(title)) {
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

export function refreshOptionErrors(allOptions) {
  const errors = {};

  const titleAmounts = {};

  allOptions.forEach((option, index) => {
    if (titleAmounts[option.title]) {
      titleAmounts[option.title].push(index);
    } else {
      titleAmounts[option.title] = [index];
    }
  });

  Object.values(titleAmounts)
    .filter((arr) => arr.length > 1)
    .forEach((arr) => {
      arr.forEach((index) => {
        errors["option" + index] = "El titulo no debe repetirse";
      });
    });
  console.log(allOptions.length);

  return errors;
}
