import Response from "../Response/Response";

function ResponsesList({ responsesArray = [], vote_id, addOrRemoveResponseLike }) {
  return responsesArray.map((response, i) => (
    <Response
      key={"response" + i}
      vote_id={vote_id}
      response={response}
      addOrRemoveResponseLike={addOrRemoveResponseLike}
    />
  ));
}

export default ResponsesList;
