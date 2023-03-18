export const bodyOverflow = () => {
  const addOverflowHiddenToBody = () =>
    (document.body.style.overflow = "hidden");

  const removeOverflowHiddenToBody = () =>
    (document.body.style.overflow = "auto");

  return { addOverflowHiddenToBody, removeOverflowHiddenToBody };
};
