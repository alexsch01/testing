https://github.com/cypress-io/cypress/issues/25891
---

After installing Node.js and Chromium....

```
git clone https://github.com/alexsch01/testing
cd testing
npm install
```

in the 1st tab

`npx cypress run --quiet --no-exit 2> /dev/null`

in the 2nd tab

`node launch.js PORT` where PORT is from the 1st tab

![image](https://github.com/alexsch01/testing/assets/5721147/5ade380e-0c74-4554-8654-6850089ab02b)

