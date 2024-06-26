# Just Chattin'

## What can I watch and expect from this project?

This repository has implemented many things, such as:

- Sockets, customs rooms
- Validation with Zod, JWT, APIs
- Docker with Mongo to persist data
- Component Architecture in Frontend & Hexagonal from Backend as well
- Routing

## Needed Requirements

This project aims to be user-friendly, convenient, and easy to connect to for testing, improvement and more. To handle database queries, we've opted for MongoDB with a [Docker] image, which must be installed first.

# How to run the project ?

## One way: Docker

- Dockerize the entire project, connecting three containers: one for the MongoDB database, another for deploying the client-side with Vite, and the last one for the server-side with Express. They are all interconnected.

- To build the image and run it within its own container, we have simplified it with one script.

```sh
docker compose up -d
```

- When all containers are connected and running, you can open your favorite web browser and navigate to the following address.

```sh
http://localhost:5173
```

## Other way: npm

To install and run all different scripts, navigate to the Server/Client Subfoler, and read the following instructions and execute it in the terminal.

Navigate to the Server subfolder, <a href='Server'>here</a>

Navigate to the Client subfolder, <a href='Client'>here</a>

<br/>

You can chat with yourself by simply opening the page twice and entering the same room and starting a conversation, but if you want to get full access to all features you need to register.

When you are logged in, we've added mock users for you. To find them and start chatting, use the keyword search "all".

If want to use this mock users as you, put this data in login:

- mock-email: `john.doe@gmail.com`/ `jane.doe@gmail.com`/`kevin.doe@gmail.com`/`anne.doe@gmail.com`

- mock-password: `asdasd`

We hope you enjoy this project and feel free to conduct your own tests and make improvements!

<p align="center" >
<img src="./assets/registerPage.jpg" title="SigInPage" width="900" >
</p>

<br/>

<p align="center">
<img src="./assets/publicRoom.png" title="PublicRoom" width="900" >
</p>

<br/>

<p align="center">
<img src="./assets/chatPrivate.jpg" title="PrivatePage" width="900" >
</p>

[Docker]: https://www.docker.com/products/docker-desktop/
