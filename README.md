# 🚀 Production Kubernetes Platform

> A production-style microservices platform built using Docker, Kubernetes, Helm, NGINX Ingress, and Prometheus-Grafana monitoring.

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Helm](https://img.shields.io/badge/Helm-0F1689?style=for-the-badge&logo=helm&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white)

---

# 📖 Overview

This project demonstrates the deployment of a production-style microservices application using Kubernetes and modern DevOps practices.

The platform showcases containerization, orchestration, networking, configuration management, persistent storage, package management, and observability using industry-standard tools.

---

# 🏗️ Architecture

```
                        Internet
                            │
                    NGINX Ingress
                            │
                   ┌────────┴────────┐
                   │                 │
               Frontend         API Gateway
                                     │
         ┌──────────────┬────────────┴────────────┐
         │              │                         │
   User Service   Product Service         Order Service
         │              │                         │
         └──────────────┴───────────────┬─────────┘
                                        │
                                     MongoDB
```

---

# ✨ Features

- Microservices Architecture
- Docker Containerization
- Docker Compose for Local Development
- Kubernetes Deployments
- Kubernetes Services
- Namespaces
- ConfigMaps
- Secrets
- Persistent Volume Claims
- NGINX Ingress
- Helm Charts
- Prometheus Monitoring
- Grafana Dashboards
- Git Version Control

---

# 🛠 Tech Stack

| Category | Technologies |
|-----------|--------------|
| Frontend | React |
| Backend | Node.js, Express |
| Database | MongoDB |
| Containers | Docker |
| Orchestration | Kubernetes |
| Package Manager | Helm |
| Networking | NGINX Ingress |
| Monitoring | Prometheus, Grafana |
| Version Control | Git, GitHub |

---

# 📁 Project Structure

```
production-kubernetes-platform/

├── frontend/
├── api-gateway/
├── user-service/
├── product-service/
├── order-service/
├── mongodb/
├── kubernetes/
│   ├── namespace.yaml
│   ├── deployments/
│   ├── services/
│   ├── ingress/
│   ├── configmaps/
│   ├── secrets/
│   └── pvc/
├── helm/
├── monitoring/
├── docker-compose.yml
└── README.md
```

---

# 🐳 Docker

- Dockerized all microservices
- Multi-container deployment using Docker Compose
- Custom Docker images
- Internal container networking

---

# ☸ Kubernetes

Implemented:

- Deployments
- Replica Management
- Services
- Namespaces
- ConfigMaps
- Secrets
- Persistent Volume Claims
- NGINX Ingress

---

# 📦 Helm

Created reusable Helm charts to simplify deployment.

Features include:

- values.yaml configuration
- Easy installation
- Upgrades
- Rollbacks
- Reusable templates

---

# 📊 Monitoring

Implemented monitoring using:

- Prometheus
- Grafana

Collected metrics for:

- CPU Usage
- Memory Usage
- Pod Health
- Cluster Status
- Node Metrics

---

# 🔧 Challenges Solved

- Docker networking issues
- MongoDB connectivity
- Kubernetes Pod troubleshooting
- Helm release conflicts
- Configuration management
- Service communication
- Persistent storage configuration

---

# 🚀 Future Improvements

- CI/CD with GitHub Actions
- Horizontal Pod Autoscaler (HPA)
- ArgoCD
- Service Mesh (Istio)
- Centralized Logging (EFK/Loki)
- Kubernetes Security Policies

---

# 📚 Skills Demonstrated

- Docker
- Kubernetes
- Helm
- Linux
- AWS
- Git
- GitHub
- Prometheus
- Grafana
- Microservices
- Networking
- Troubleshooting

---

# 👩‍💻 Author

**Nisha Yadav**

AWS DevOps Engineer | Linux Administrator

- LinkedIn: *(www.linkedin.com/in/nisha-yadav-2b5b28199)*


---

⭐ If you found this project helpful, consider giving it a star!
