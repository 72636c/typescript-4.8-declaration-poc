// https://github.com/microsoft/TypeScript/pull/50538

declare module "main" {
    export const main: ({ conflict }: {
        conflict: number;
    }, { conflict }: {
        conflict: number;
    }, { dupe, dupe }: {
        dupe: number;
    }, { function: e }: {
        function: number;
    }) => number;
}
