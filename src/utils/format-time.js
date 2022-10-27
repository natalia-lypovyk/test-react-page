export const formatDate = (timestamp) => {
  const lastRequestDate = new Date(timestamp);

  const fullDate = lastRequestDate.toLocaleDateString();
  const fullTime = lastRequestDate.toLocaleTimeString();

  return `${fullDate}/${fullTime}`;
}
