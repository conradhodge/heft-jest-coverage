# Rush and heft jest coverage issue

This is using `@rushstack/heft-node-rig` v2.2.10 and `@rushstack/heft` v0.56.0.

Files in this project that are marked to be excluded from code coverage using the [`/* istanbul ignore file */`](https://jestjs.io/docs/configuration#collectcoverage-boolean) code comment, are not being excluded in the code coverage report produced.

Run the following commands:

```shell
rush install
rush build
```

Open the `libraries/something/temp/coverage/index.html` file in a browser. Note that the `ignore.ts` file is included in code coverage even though it has the `/* istanbul ignore file */` code comment at the top of the file.

If `@rushstack/heft-node-rig` is downgraded to v1.13.1 and `@rushstack/heft` is downgraded to v0.50.7, then the `ignore.ts` file is excluded from code coverage.
