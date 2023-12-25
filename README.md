https://github.com/cypress-io/cypress/issues/25891
---

After installing Node.js and Chromium....

in the 1st tab

```
cd $HOME
git clone https://github.com/alexsch01/CypressProxy
cd CypressProxy
npm install
node script.js
```

in the 2nd tab

```
cd $HOME
git clone https://github.com/alexsch01/testing
cd testing
node launch.js **PORT** # where **PORT** is from the 1st tab
```

---

**Chrome for Testing 114.0.5696.0** - redirects to HTTPS, which is incorrect behavior
![image](https://github.com/alexsch01/testing/assets/5721147/cccd298d-e0e4-4a79-8eea-7a77f04e10c2)

---

**Chrome for Testing 113.0.5672.63**
![image](https://github.com/alexsch01/testing/assets/5721147/e3c3c57f-ec2a-45e7-92cc-cd2ebcb57043)
