export const validatePayloadURL = (value: any) => {
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // Validate protocol (http or https)
      "((([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,})|" + // Domain name
      "localhost|" + // Allow localhost
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP address (IPv4)
      "(\\:\\d+)?(\\/[-a-zA-Z0-9@:%._+~#=]*)*" + // Port and path
      "(\\?[;&a-zA-Z0-9@:%_+.~#?&//=]*)?" + // Query string
      "(\\#[-a-zA-Z0-9@:%_+.~#?&//=]*)?$", // Fragment identifier
    "i"
  );

  if (!value.match(urlPattern)) {
    return "URL Inválida";
  }
  return true;
};
