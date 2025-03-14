# Use the predefined node base image for this application.
FROM node:14-alpine

# Creating base "app" directory where the source repo will reside in our container.
# Code is copied from the host machine to this "app" folder in the container as a last step.
WORKDIR /app

# This will copy from docker cache unless the package.json file has changed
COPY ./package.json .

# Install node dependencies
RUN yarn install

# Copy entire app to docker
COPY . .

# Expose app port
EXPOSE 8080

# Start the app
CMD ["yarn", "serve"]