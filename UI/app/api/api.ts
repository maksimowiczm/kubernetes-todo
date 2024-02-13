export const getApiServerAddress = async () => {
  const delay = process.env.DELAY as number | undefined;

  if (delay) {
    await DELAY(delay);
  }

  return process.env.API_SERVER;
};

const DELAY = (duration: number) => new Promise((r) => setTimeout(r, duration));
