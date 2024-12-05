# Job Portal Application

A simple static website with login and register pages, along with job listing and job description pages. This project includes a CI/CD pipeline using AWS services for containerized deployment.

---

## Features

- **Static Pages**:
  - `/login` - User login page.
  - `/register` - User registration page.
- **Job Listings**:
  - `/jobs` - Displays all available jobs.
  - `/jobs/:id` - Displays details of a specific job by ID.

---

## Technologies Used

- **Frontend**: Static HTML, CSS, JavaScript.
- **Containerization**: Docker.
- **Deployment**: Amazon ECS with AWS Fargate.
- **CI/CD**: GitHub Actions for build, push, and deployment.

---

## Getting Started

### Prerequisites

- Docker installed on your local machine.
- AWS account with necessary permissions for ECS, ECR, and IAM.
- GitHub repository with secrets configured for AWS credentials.

### Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mani818686/test.git
   cd your-repo-name
2. **Build and Run Docker Container Locally:**:
   ```bash
   docker build -t job-portal .
   docker run -p 3000:3000 job-portal
  Access the application at http://localhost:3000.


# CI/CD Pipeline

This project includes a robust CI/CD pipeline implemented with GitHub Actions to automate the deployment process. The pipeline integrates Docker and AWS services to streamline the application build, image deployment, and ECS service updates.

---

## Pipeline Overview

1. **Trigger Events**:
   - The pipeline is triggered on `push` or `pull_request` events to the `main` branch.

2. **Build and Deploy Workflow**:
   - **Build Docker Image**: Creates a Docker image for the application.
   - **Push to Amazon ECR**: Pushes the built image to an Amazon Elastic Container Registry (ECR).
   - **Register ECS Task Definition**: Updates the ECS task definition with the new Docker image.
   - **Update ECS Service**: Deploys the updated task definition to the ECS service.

---

## Pipeline Steps

### 1. Checkout Code
The pipeline checks out the latest code from the repository using the `actions/checkout` action.

### 2. Configure AWS Credentials
AWS credentials are configured using `aws-actions/configure-aws-credentials`. This ensures secure access to AWS services.

### 3. Log in to Amazon ECR
The pipeline logs in to Amazon ECR to enable Docker image pushes.

### 4. Build and Push Docker Image
- The Docker image is built using the project source code.
- The image is tagged with the latest commit hash and pushed to the specified ECR repository.

### 5. Register ECS Task Definition
The ECS task definition is registered dynamically with the updated Docker image and required resource configurations (CPU, memory, and port mappings).

### 6. Update ECS Service
The ECS service is updated to use the new task definition. A new deployment is initiated to apply changes.
