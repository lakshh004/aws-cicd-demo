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
## 📂 Project Structure

```bash
aws-cicd-demo/
│
├── .gitignore            # Prevents sensitive files (e.g., private keys) from being committed
├── README.md             # Complete project documentation
├── buildspec.yml         # AWS CodeBuild CI/CD pipeline configuration
├── cicd-ec2-key.pub      # Public SSH key used for EC2 authentication (safe to expose)
├── index.js              # Node.js HTTP server application
├── package.json          # Project metadata and dependency definitions
└── package-lock.json     # Locked dependency versions for reproducible builds
```

---
## 🏗️ Architecture Diagram

<img width="1019" height="370" alt="image" src="https://github.com/user-attachments/assets/19f39056-d900-42a5-872a-7960824f8992" />

<p align="center">
  <ins>Architecture Diagram</ins>
</p>



---

## 🛠 Technologies Used

### 🟠 AWS CodeBuild
Used as the CI/CD execution engine.  
Automatically triggers builds on GitHub push events and executes the deployment workflow defined in `buildspec.yml`.

### 🔐 AWS Secrets Manager
Securely stores the EC2 private SSH key.  
Prevents hardcoding sensitive credentials inside the repository or build configuration.

### 🐧 Amazon EC2 (Ubuntu)
Hosts the Node.js application.  
Acts as the deployment target where the application runs publicly on port 3000.

### 🔑 IAM Roles
Grants CodeBuild permission to access Secrets Manager securely using the principle of least privilege.

### 🐙 GitHub
Source code repository and webhook trigger mechanism for automated builds.

### 📝 buildspec.yml
Defines the CI/CD pipeline steps including:
- Installing dependencies
- Retrieving secrets
- SSH deployment
- Restarting application

### 🟢 Node.js (v18)
Backend runtime environment used to serve the HTTP application.

### 📊 Amazon CloudWatch Logs
Automatically captures CodeBuild logs for debugging and monitoring pipeline execution.

### 🛡 EC2 Security Groups
Controls inbound traffic (port 3000 for app access, port 22 for SSH).

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
## 🔄 CI/CD Pipeline Execution

Below is a successful AWS CodeBuild execution triggered automatically after a Git push.

```bash
Source: GitHub Webhook Trigger
Build Environment: AWS CodeBuild (Node.js 18)
Deployment: Automated SSH to EC2
Status: SUCCEEDED
```
<img width="1147" height="555" alt="image" src="https://github.com/user-attachments/assets/8c1f1dfd-86f7-415e-b295-e4b868d2bc62" />

<p align="center">
  <ins>Screenshot of Successful Build</ins>
</p>

---

## 📸 Live Deployment Preview

Below is the live application running on the EC2 Ubuntu server after successful CI/CD deployment.

<img width="1464" height="741" alt="image" src="https://github.com/user-attachments/assets/e0b335f3-bbdb-482d-b1cf-98afdd8c0a70" />

<p align="center">
  <ins>Preview Screenshot</ins>
</p>


**What this proves:**
- ✅ Node.js running on EC2
- ✅ Port 3000 exposed correctly
- ✅ CI/CD pipeline deployed latest version
- ✅ Application restarted automatically after push
- ✅ Infrastructure and build automation working end-to-end

---


