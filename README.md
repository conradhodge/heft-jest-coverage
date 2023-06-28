# Rush and heft jest coverage issue

Upgraded @rushstack/heft-node-rig to 2.2.10 and @rushstack/heft to 0.56.0. 

Following the upgrade, files in this project that are marked to be ignored for code coverage using the `/* istanbul ignore file */` code comment are not being excluded in the code coverage report produced.
