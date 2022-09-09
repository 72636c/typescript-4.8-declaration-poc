# TypeScript 4.8 declaration poc

```shell
npm install
```

```shell
npm run build
```

```shell
npm run --silent lint 4.7.4.d.ts

npm run --silent lint 4.8.3.d.ts
# 4.8.3.d.ts:8:19 - error TS1005: ':' expected.
#
# 8     }, { function }: {
#                     ~
#
#
# Found 1 error in 4.8.3.d.ts:8

npm run --silent lint 50538.d.ts
# 50538.d.ts:4:27 - error TS2300: Duplicate identifier 'conflict'.
#
# 4     export const main: ({ conflict }: {
#                             ~~~~~~~~
#
# 50538.d.ts:6:10 - error TS2300: Duplicate identifier 'conflict'.
#
# 6     }, { conflict }: {
#            ~~~~~~~~
#
# 50538.d.ts:8:10 - error TS2300: Duplicate identifier 'dupe'.
#
# 8     }, { dupe, dupe }: {
#            ~~~~
#
# 50538.d.ts:8:16 - error TS2300: Duplicate identifier 'dupe'.
#
# 8     }, { dupe, dupe }: {
#                  ~~~~
#
#
# Found 4 errors in the same file, starting at: 50538.d.ts:4
```
