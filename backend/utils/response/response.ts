

export const sucessResponse = <T>(
  statusCode: number,
  message: string,
  data: T
): any => {
  return { statusCode, message, data };
};

export const createResponse = <T>(
  statusCode: number,
  message: string,
  data: T
): any => {
  return { statusCode, message, data };
};
