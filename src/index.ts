export interface GenerateOptions {
  upperLetters?: boolean;
  lowerLetters?: boolean;
  numbers?: boolean;
  symbols?: boolean;
}

export function generate(length: number = 10, options?: GenerateOptions) {
  const upperLetters = options?.upperLetters ?? true;
  const lowerLetters = options?.lowerLetters ?? true;
  const numbers = options?.numbers ?? true;
  const symbols = options?.symbols ?? false;

  if (length <= 0)
    throw new Error(
      "[codes-generator] The length of the code cannot be less than or equal to 0"
    );
  if (!upperLetters && !lowerLetters && !numbers && !symbols)
    throw new Error("[codes-generator] Enable at least one option");

  let charatters: string = "";

  if (upperLetters) charatters += "ABCDEFGHIJKLMNOPQRSTUWXYZ";
  if (lowerLetters) charatters += "abcdefghijklmnpqrstuwxyz";
  if (numbers) charatters += "1234567890";
  if (symbols) charatters += "!@#$%^&*.()";

  let code: string = "";

  for (let i = 0; i < length; i++)
    code += charatters.charAt(Math.floor(Math.random() * charatters.length));

  return code;
}
