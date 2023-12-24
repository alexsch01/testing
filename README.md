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

---

**Chrome for Testing 114.0.5696.0** - redirects to HTTPS, which is incorrect behavior
![image](https://github.com/alexsch01/testing/assets/5721147/4c67d59e-b2f1-4af1-8a8a-d20a7ea69121)

---

**Chrome for Testing 113.0.5672.63**
![image](https://github.com/alexsch01/testing/assets/5721147/2a372df6-db2c-4495-9169-0b9841ddb30a)
