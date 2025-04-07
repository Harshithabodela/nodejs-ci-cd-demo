# Node.js CI/CD Pipeline Demo

This project demonstrates a simple Node.js app with automated CI/CD using GitHub Actions and DockerHub.

## Features

- Node.js web server
- Docker containerization
- GitHub Actions for CI/CD
- DockerHub image push on commit to main

## Setup

1. Clone this repo
2. Add secrets to GitHub:
   - `DOCKER_USERNAME`
   - `DOCKER_PASSWORD`
3. Push to `main` to trigger CI/CD

## Run Locally

```bash
docker run -p 3000:3000 your-dockerhub-username/nodejs-demo
```
