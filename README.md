# 🚀 AWS CI/CD Pipeline – Node.js Deployment on EC2

![AWS](https://img.shields.io/badge/AWS-CodeBuild-orange)
![Node](https://img.shields.io/badge/Node.js-v18-green)
![CI/CD](https://img.shields.io/badge/CI%2FCD-Automated-blue)
![Status](https://img.shields.io/badge/Deployment-Successful-brightgreen)

---

## 📌 Project Overview

This project demonstrates a **fully automated CI/CD pipeline** built using:

- 🟠 **AWS CodeBuild**
- 🔐 **AWS Secrets Manager**
- 🐧 **EC2 (Ubuntu)**
- 🐙 **GitHub Webhooks**
- 🟢 **Node.js (v18)**

Every time code is pushed to GitHub, the application is:

1. Automatically built
2. Securely deployed to EC2
3. Restarted
4. Made live without manual SSH login

---

## 🏗️ Architecture Diagram


+-------------------+
| 👨‍💻 Developer |
| (Local Machine) |
+---------+---------+
|
| git push
v
+-------------------+
| 🐙 GitHub |
+---------+---------+
|
| Webhook Trigger
v
+-------------------+
| 🟠 AWS CodeBuild |
| buildspec.yml |
+---------+---------+
|
| Retrieve SSH Key
v
+-------------------+
| 🔐 Secrets Manager|
+-------------------+
|
| SSH Deploy
v
+-------------------+
| 🐧 EC2 (Ubuntu) |
| Node App Running |
+-------------------+



---

## ⚙️ CI/CD Workflow

### 🔄 Continuous Integration (CI)

- Code pushed to GitHub
- Webhook triggers AWS CodeBuild
- Dependencies installed using `npm install`

### 🚀 Continuous Deployment (CD)

- Private SSH key retrieved from Secrets Manager
- Secure SSH connection to EC2
- Latest code pulled
- Node app restarted automatically

---
## 📂 Project Structure

aws-cicd-demo/
│
├── index.js
├── package.json
├── package-lock.json
├── buildspec.yml
└── README.md
