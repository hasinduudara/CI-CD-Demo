# Simple CI/CD Pipeline Demo 🚀

This repository is created for **self-study purposes** to understand how **GitHub Actions** and **CI/CD pipelines** work. It demonstrates a simple automated workflow that runs tests whenever code is pushed to the repository.

## 📂 Project Structure

Here is the folder structure of this project:

```text
DEMO-1/
├── .github/
│   └── workflows/
│       └── main.yml   # GitHub Actions configuration (The Pipeline)
├── app.js             # Simple Node.js script to run and test
└── README.md
```
## 📂 Project Overview

This project includes a basic Node.js script (`app.js`) and a GitHub Actions workflow (`.github/workflows/main.yml`).

- **Goal:** To automate the testing process using GitHub Actions.
- **Trigger:** The pipeline runs automatically on every `push` to the `main` branch.
- **Action:** It sets up a Node.js environment, installs dependencies (if any), and executes the script to verify logic.

## ⚙️ How It Works

1. **Code Push:** I push changes to the GitHub repository.
2. **Trigger:** GitHub Actions detects the push and starts a "Runner" (Virtual Machine).
3. **Execution:** The runner checks out the code and runs `node app.js`.
4. **Result:** If the script runs without errors, the build passes (✅). If not, it fails (❌).

## 🛠️ Technologies Used

- **GitHub Actions** (CI/CD)
- **Node.js** (Runtime Environment)
- **Git** (Version Control)

---

## 📬 Connect with Me

I am a software engineering student passionate about learning new technologies. Feel free to connect with me!

- **LinkedIn:** [Hasindu Udara](https://www.linkedin.com/in/hasindu-udara/) 👔
- **GitHub:** [Hasindu Udara](https://github.com/hasinduudara) 🐙
- **Email:** [hasiduudara@gmail.com](mailto:hasiduudara@gmail.com) ✉️

---
*Created by Hasindu Udara for learning purposes.*
