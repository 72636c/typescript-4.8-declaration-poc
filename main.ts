export const main = (
  { conflict: a }: { conflict: number },
  { conflict: b }: { conflict: number },
  { dupe: c, dupe: d }: { dupe: number },
  { function: e }: { function: number }
) => a + b + c + d + e;
