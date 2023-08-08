# Notes App REST API with Docker Packaging

This repository contains a simple Notes App REST API built using Python and Flask. The API allows users to manage notes with basic CRUD operations. It is packaged using Docker for easy deployment across different environments.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [API Endpoints](#api-endpoints)
- [Docker Packaging](#docker-packaging)
  - [Building Docker Image](#building-docker-image)
  - [Running Docker Container](#running-docker-container)
- [Docker Compose](#docker-compose)

## Features

- Create new notes
- Retrieve existing notes
- Update existing notes
- Delete notes

## Prerequisites

- Node.js
- Express.js
- Docker
- Docker Compose

## Getting Started

### Installation

1. Clone the repository

```bash
git clone https://github.com/rishavchanda/NotesAPI-DevOps.git

```

2. Install dependencies

```bash
npm install
```

3. Run the docker container

```bash
docker compose up --build
```

### API Endpoints

| Endpoint       | Method | Description       | BODY                                | Response          |
| -------------- | ------ | ----------------- | ----------------------------------- | ----------------- |
| /api/notes     | GET    | Get all notes     | NULL                                | List of all notes |
| /api/notes     | POST   | Create a new note | { "noteTitle" , "noteDescription" } | A single note     |
| /api/notes/:id | PUT    | Update a note     | { "noteTitle" , "noteDescription" } | A single note     |
| /api/notes/:id | DELETE | Delete a note     | NULL                                | Delete Message    |

## Docker Packaging

### Building Docker Image

```bash
docker build -t notes-api .
```

### Running Docker Container

```bash
docker run -p 3000:3000 notes-api
```

## Docker Compose

```bash
docker-compose up --build
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
