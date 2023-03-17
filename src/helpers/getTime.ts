const getTimeInString = (time: number) => {
  return time > 9 ? time : `0${time}`;
};

export const getTime = (milliseconds: number): string => {
  let seconds = milliseconds / 1000;
  let minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes * 60;

  return `${getTimeInString(minutes)}:${getTimeInString(seconds)}`;
};
