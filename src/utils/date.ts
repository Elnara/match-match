export const getDatesDiff = (start: Date, end: Date) => {
  const diff = Math.abs(end.getTime() - start.getTime());
  // Преобразование времени в дни, часы, минуты и секунды
  const days = Math.floor(diff / (1000 * 3600 * 24));
  const hours = Math.floor((diff / (1000 * 3600)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
};
