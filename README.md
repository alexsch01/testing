https://github.com/cypress-io/cypress/issues/25891
---

After installing Node.js and Chromium / Google Chrome....

---

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
node launch.js **CHROME** **PORT**

# where **CHROME** is the path to the chrome binary, and **PORT** is from the 1st tab
```

---

**Chrome for Testing 114.0.5696.0** - redirects to HTTPS, which is incorrect behavior
![image](https://github.com/alexsch01/testing/assets/5721147/e0e668cd-d407-44d5-aeb9-79485997163e)

---

**Chrome for Testing 113.0.5672.63**
![image](https://github.com/alexsch01/testing/assets/5721147/fbbb3c5b-e065-4256-b43f-c470108ae175)

