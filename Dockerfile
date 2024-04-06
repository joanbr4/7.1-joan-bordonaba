# Use your preferred development version of Node.js
FROM node:20-alpine as server-builder
WORKDIR /Server
COPY ./Server .
RUN npm install && npm run build

# Use another stage for the client
FROM node:20-alpine as client-builder
WORKDIR /Client
COPY ./Client .
RUN npm install && npm run build
# RUN npm install && npm run build

# Use a new stage for the final image
FROM node:20-alpine
WORKDIR /app
COPY --from=server-builder /Server/  .
COPY --from=client-builder /Client/dist ./Client

# Expose ports if necessary
EXPOSE 4000
EXPOSE 5173

# Command to start both server and client
CMD ["npm", "start"]