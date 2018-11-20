export const closeWithStatus = (response, status, headers) => {
  const data = headers || {};
  const end = () => {
    response.writeHead(status, data);
    response.end();
  }
  return end;
}

export const closeWithContent = (response, status, headers) => {
  const data = headers || {};
  const endWith = (content) => {
    response.writeHead(status, data);
    response.write(content);
    response.end();
  }
  return endWith;
}

export const higherOrderNodeCallback = (onSuccess, onError) => {
  return function nodeCallback (err, content) {
    if (err) {
      onError(err);
    } else {
      onSuccess(content);
    }
  };
}