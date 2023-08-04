import Response from "../Response/Response";

function ResponsesList({ responsesArray = [] }) {
  return responsesArray.map((response, i) => <Response key={"response" + i} response={response} />);
}

export default ResponsesList;
