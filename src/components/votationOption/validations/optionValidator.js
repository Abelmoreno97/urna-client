export function optionValidator(title, otherTitles) {
  if (otherTitles.includes(title)) {
    return "El titulo no debe repetirse";
  }
  return "";
}
