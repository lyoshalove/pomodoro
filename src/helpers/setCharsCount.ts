export const setCharsCount = (windowWidth: number) => {
  if (windowWidth < 480) {
    return 15;
  } else if (windowWidth < 520) {
    return 20;
  } else {
    return 30;
  }
};