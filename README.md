# basic-react-sample
This sample demonstrates integration of neutrinojs with react ,jest, webpack, babel and eslint. 
## Introduction
This demo is a very basic scafolding of a react project with integration of [neutrinojs](https://www.npmjs.com/package/neutrino). Neutrinojs levearges the existing configuration provided by these modules jest , webpack , eslint and babel respectfully.
### What is Neutronio?
![Neutronic Quote](./readme-images/neutrino-quote.png?raw=true "Neutronic Quote")

### Neutrinojs is sugested by [React](https://reactjs.org/docs/create-a-new-react-app.html#more-flexible-toolchains)
![React Documentation segment](./readme-images/Neturonio-source.png?raw=true "React Documentation segment")
## Usage Guidlines
### Hello World version
This is the hello world version which would provide you the integration out of the box for react and jest. This is as prescribed on the official site [here](https://www.npmjs.com/package/neutrino).
```js
// .neutrinorc.js
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');

module.exports = {
  use: [
    react(),
    jest()
  ]
}
```
### The recomended approach .
This will allow the customizations that may be required in future for your particular organization or use case scenario.
I have provided below the configuration which i needed for my day to day development. You can use the provided configuration as a base .
#### Core Neutrino configuration 
Core Neutrino configuration is in the .neutrinorc file . see below:
![Core Neutrino configuration](./readme-images/Neturino-Configuration.png?raw=true "Core Neutrino configuration")
#### Jest Configuration
There was some additional configuration required for jest test cases to be functional these are shown below
![Jest Configuration](./readme-images/jest-configuration.png?raw=true "Jest Configuration")

#### EsLint Configuration
This is pretty much standard configuration. Only additional configuration was to ignore the false positives (namely errors in the test code and some warnings) which are shown in the image below.
![EsLint Configuration](./readme-images/es-lint-customizations.png?raw=true "EsLint Configuration")
![EsLint Ignore Configuration](./readme-images/esIgnore.png?raw=true "EsLint Ignore Configuration")
## Original Intent
This is intended to be a guide for integration of neutrinojs with react, babel, webpack, eslint and jest.The motivation is to share this possible resolution which was achieved with significant research and effort.
### Error Message
This effort was originall started to resolve the  "Module parse failed: Unexpected token" error. see image below.

![original error message](./readme-images/original-error.JPG?raw=true "Original Errror Message")

## Known Issues
- [ ] Jest code coverage option is not functional . The covearge report is generated but it is empty. This is under investigation
## References

- [Neutrinojs React Preset options](https://neutrinojs.org/packages/react/)
- [neutrinojs Usage](https://neutrinojs.org/usage/)
- [neutrinojs Jest Preset options](https://neutrinojs.org/packages/jest/)
- [React Documentation](https://reactjs.org/docs/create-a-new-react-app.html)
