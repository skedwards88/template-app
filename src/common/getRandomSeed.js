export function getRandomSeed() {
  const currentDate = new Date();
  return currentDate.getTime().toString();
}
