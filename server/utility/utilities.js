export const formatResponse = (response) => {
  return response.replaceAll("*", "").split("\n");
}