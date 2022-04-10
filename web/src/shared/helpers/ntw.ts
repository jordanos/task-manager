export const getError = (error: any): { error: string; id: string } => {
  let errorMessage = '';
  const id = `${Date.now()}`;
  if (error.response) {
    errorMessage = error.response.data.error;
  } else {
    errorMessage = error.message;
  }
  return { error: errorMessage, id };
};

export const format = () => {};
