export const formatDate = (lastRequestDate) => {
  const fullDate = lastRequestDate.toLocaleDateString();
  const fullTime = lastRequestDate.toLocaleTimeString();

  return `${fullDate}/${fullTime}`;
}
