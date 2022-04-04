class ImplementationError extends Error {
  constructor() {
    super('function not implemented.');
  }
}

export default ImplementationError;
