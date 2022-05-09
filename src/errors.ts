export class MissingOptionError extends Error {
  constructor(missingOption: string | Array<string>) {
    super(`Sitemapy missing options in config: ${missingOption}`);
  }
}
