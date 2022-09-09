# TypeScript 4.8 declaration poc

```shell
npm install
```

```shell
npm run build

# > build
# > npm run --quiet build --workspaces
#
#
# > build
# > tsc --declaration --emitDeclarationOnly --outfile ../4.7.4.d.ts ../main.ts
#
# > build
# > tsc --declaration --emitDeclarationOnly --outfile ../4.8.3.d.ts ../main.ts
```

```shell
npm run lint

# > lint
# > tsc --noEmit *.d.ts
#
# 4.8.3.d.ts:8:19 - error TS1005: ':' expected.
#
# 8     }, { function }: {
#                     ~
#
#
# Found 1 error in 4.8.3.d.ts:8
```
