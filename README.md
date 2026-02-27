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

<img width="1019" height="370" alt="image" src="https://github.com/user-attachments/assets/19f39056-d900-42a5-872a-7960824f8992" />
<p align="center">
  <ins>Architecture Diagram</ins>
</p>




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

---
---

## 📸 Live Deployment Preview

Below is the live application running on the EC2 Ubuntu server after successful CI/CD deployment.

![CI/CD Live Deployment Screenshot]<img width="1464" height="741" alt="image" src="https://github.com/user-attachments/assets/e0b335f3-bbdb-482d-b1cf-98afdd8c0a70" />


**What this proves:**
- ✅ Node.js running on EC2
- ✅ Port 3000 exposed correctly
- ✅ CI/CD pipeline deployed latest version
- ✅ Application restarted automatically after push
- ✅ Infrastructure and build automation working end-to-end

---


