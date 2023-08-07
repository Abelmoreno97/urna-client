export function formatDate (date) {
    let aux = `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`;
    return aux;
}
export function openVotation(closing_Date) {
    const actualDate = new Date();
    const limitDate = new Date(closing_Date.slice(0,10));
    if (limitDate.getTime() >= actualDate.getTime()) {
      return false;
    } else {
      return true;
    }
  }
