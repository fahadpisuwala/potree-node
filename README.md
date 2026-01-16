# Potree Annotations API

This is a **Node.js API** for managing annotations in a Potree 3D point cloud viewer.  
It provides endpoints to **get, add, delete, and clear annotations**. It is designed to be used with a frontend running on S3 or any static hosting.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup](#setup)  
- [Environment Variables](#environment-variables)  
- [API Endpoints](#api-endpoints)  
- [CORS](#cors)  
- [Deployment](#deployment)  
- [License](#license)  

---

## Features

- GET all annotations
- POST new annotations
- DELETE annotation by `potreeid`
- DELETE all annotations
- Handles JSON requests
- Compatible with Potree 3D viewer frontend
- CORS enabled for cross-origin requests

---

## Tech Stack

- Node.js  
- Express.js  
- MongoDB / Mongoose  
- CORS middleware

---

## Setup

1. Clone this repository:

```bash
git clone <your-repo-url>
cd <repo-folder>
To run this 
just enter: node index.js in  terminal

Also here is the  lambda funtion url for this repo

https://o8p86rd272.execute-api.ap-southeast-2.amazonaws.com
 You can use postman
 eg:
 [GET]https://o8p86rd272.execute-api.ap-southeast-2.amazonaws.com/api/annotations