// eslint-disable-next-line import/prefer-default-export
export const checkTemperature = temperature => {
  if (temperature > 25) {
    return 'pop';
  }
  if (temperature < 10) {
    return 'clássica';
  }
  return 'rock';
};
