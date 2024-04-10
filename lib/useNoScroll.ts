export const useNoScroll = (active: boolean) => {
  if (typeof window !== 'undefined') {
    const { body } = document;

    if (body) {
      if (active) {
        body.style.overflowY = 'hidden';
      } else {
        body.style.overflowY = 'visible';
        body.style.paddingRight = '0';
      }
    }
  }
};
