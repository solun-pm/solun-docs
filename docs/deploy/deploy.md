---
sidebar_position: 1
---

# Deploy Solun

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [Mailcow](https://mailcow.github.io/mailcow-dockerized-docs/)
- [Mailcow API Key](https://mailcow.github.io/mailcow-dockerized-docs/api/api-configuration/#api-key)
- [Friendly Captcha Site Key](https://friendlycaptcha.com/docs/quickstart)

## Deploy

### 1. Create a directory for Solun

```bash
mkdir solun
cd solun
```

### 2. Create a file named `docker-compose.yml` with the following content

```yaml
version: '3.8'
services:
  solun:
    image: ghcr.io/solun-pm/solun:docker
    container_name: solun
    ports:
      - 3000:3000
    environment:
      - MONGODB_URL=
      - JWT_SECRET_KEY=
      - MAILSERVER_BASEURL=
      - MAILSERVER_API_KEY=
      - NEXT_PUBLIC_API_DOMAIN=
      - NEXT_PUBLIC_MAIN_DOMAIN=
      - NEXT_PUBLIC_AUTH_DOMAIN=
      - NEXT_PUBLIC_WEBMAIL_DOMAIN=
      - NEXT_PUBLIC_WEBMAIL_AUTH_DOMAIN=
      - NEXT_PUBLIC_MAIL_HOST=
      - NEXT_PUBLIC_IMAP_PORT=
      - NEXT_PUBLIC_SMTP_PORT=
    volumes:
      - /your/path:/app/public/uploads/files
    restart: always

  solun-api:
    image: ghcr.io/solun-pm/solun-api:main
    container_name: solun-api
    ports:
      - 3001:3000
    environment:
      - NEXT_PUBLIC_SITE_KEY=
      - CAPTCHA_KEY=
      - FILE_DESTINATION_PATH=/files
      - MONGODB_URL=
      - JWT_SECRET_KEY=
      - MAILSERVER_BASEURL=
      - MAILSERVER_API_KEY=
      - NEXT_PUBLIC_API_DOMAIN=
      - SOLUN_API_KEY=
      - NEXT_PUBLIC_MAIN_DOMAIN=
      - NEXT_PUBLIC_AUTH_DOMAIN=
      - NEXT_PUBLIC_WEBMAIL_DOMAIN=
      - NEXT_PUBLIC_WEBMAIL_AUTH_DOMAIN=
      - NEXT_PUBLIC_MAIL_HOST=
      - NEXT_PUBLIC_IMAP_PORT=
      - NEXT_PUBLIC_SMTP_PORT=
    volumes:
      - /your/path:/files
    restart: always

  solun-auth:
    image: ghcr.io/solun-pm/solun-auth:main
    container_name: solun-auth
    ports:
      - 3002:3000
    environment:
      - NEXT_PUBLIC_SITE_KEY=
      - CAPTCHA_KEY=
      - MONGODB_URL=
      - JWT_SECRET_KEY=
      - MAILSERVER_BASEURL=
      - MAILSERVER_API_KEY=
      - NEXT_PUBLIC_API_DOMAIN=
      - NEXT_PUBLIC_MAIN_DOMAIN=
      - NEXT_PUBLIC_AUTH_DOMAIN=
      - NEXT_PUBLIC_WEBMAIL_DOMAIN=
      - NEXT_PUBLIC_WEBMAIL_AUTH_DOMAIN=
      - NEXT_PUBLIC_MAIL_HOST=
      - NEXT_PUBLIC_IMAP_PORT=
      - NEXT_PUBLIC_SMTP_PORT=
    restart: always

  solun-webmail:
    image: ghcr.io/solun-pm/solun-webmail:main
    container_name: solun-webmail
    ports:
      - 3003:3000
    environment:
      - MONGODB_URL=
      - JWT_SECRET_KEY=
      - MAILSERVER_BASEURL=
      - MAILSERVER_API_KEY=
      - NEXT_PUBLIC_MAIN_DOMAIN=
      - NEXT_PUBLIC_API_DOMAIN=
      - NEXT_PUBLIC_AUTH_DOMAIN=
      - NEXT_PUBLIC_AUTH_DOMAIN_SETTINGS=
      - NEXT_PUBLIC_WEBMAIL_DOMAIN=
      - NEXT_PUBLIC_MAIL_HOST=
      - NEXT_PUBLIC_IMAP_PORT=
      - NEXT_PUBLIC_SMTP_PORT=
    restart: always

  solun-delete-bird:
    image: ghcr.io/solun-pm/solun-delete-bird:main
    container_name: solun-api
    environment:
      - MONGODB_URL=
    volumes:
      - /your/path:/files
    restart: always
```

### 3. Fill in the environment variables

#### Solun

| Variable                 | Description                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| `MONGODB_URL`            | MongoDB connection string                                                                       |
| `JWT_SECRET_KEY`         | JWT secret key                                                                                  |
| `MAILSERVER_BASEURL`     | Mailcow base URL                                                                                |
| `MAILSERVER_API_KEY`     | Mailcow API key                                                                                 |
| `NEXT_PUBLIC_API_DOMAIN` | API domain     e.g. `api.solun.pm`                                                              |
| `NEXT_PUBLIC_MAIN_DOMAIN` | Main domain    e.g. `solun.pm`                                                                 |
| `NEXT_PUBLIC_AUTH_DOMAIN` | Auth domain    e.g. `auth.solun.pm`                                                            |
| `NEXT_PUBLIC_WEBMAIL_DOMAIN` | Webmail domain e.g. `mail.solun.pm`                                                         |
| `NEXT_PUBLIC_WEBMAIL_AUTH_DOMAIN` | Webmail auth domain e.g. `mail.solun.pm/auth`                                          |
| `NEXT_PUBLIC_MAIL_HOST`  | Mail server host e.g. `ms.solun.pm`                                                             |
| `NEXT_PUBLIC_IMAP_PORT`  | IMAP port e.g. `993`                                                                            |
| `NEXT_PUBLIC_SMTP_PORT`  | SMTP port e.g. `465`                                                                            |
| `CAPTCHA_KEY`            | Friendly Captcha site key                                                                       |
| `NEXT_PUBLIC_SITE_KEY`   | Friendly Captcha site key                                                                       |
| `SOLUN_API_KEY`          | Solun API key   you can generate arbitrary keys with `openssl rand -hex 32`                     |
| `FILE_DESTINATION_PATH`  | Path to the file storage directory. This should be the same as the volume path inside the container in the `docker-compose.yml` file. e.g. `/files` |
| `NEXT_PUBLIC_AUTH_DOMAIN_SETTINGS` | Auth domain settings e.g. `auth.solun.pm/dash/settings`                               |


Also make sure to change the volumes to your desired path. The path shoud be the same for all services. 


### 4. Run the containers

```bash
docker-compose up -d
```
