function getFormBody(params) {
  let formBody = [];
  for (let property in params) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(params[property]);
    formBody.push(`${encodedKey}=${encodedValue}`);
  }
  return formBody.join("&");
}

function getJsonBody(params) {
  let jsonBody = {};
  for (let property in params) {
    let encodedKey = property;
    let encodedValue = params[property];
    jsonBody[encodedKey] = encodedValue;
  }
  return JSON.stringify(jsonBody);
}
export { getFormBody, getJsonBody };
