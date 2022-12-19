export const delay = (milliseconds: number): Promise<void> =>
  new Promise((res) => setTimeout(res, milliseconds));
