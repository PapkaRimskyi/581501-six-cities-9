function buildDateReview(dateInfo: string) {
  const date = new Date(dateInfo);
  const monthName = date.toLocaleString('eng', { month: 'long' });
  return `${monthName} ${date.getFullYear()}`;
}

export default buildDateReview;
