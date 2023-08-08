import Response from "../Response/Response";

function ResponsesList({ responsesArray = [], vote_id }) {
  return responsesArray.map((response, i) => (
    <Response key={"response" + i} vote_id={vote_id} response={response} />
  ));
}

export default ResponsesList;
