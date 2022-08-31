FROM node:16

# Create app directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install packages
RUN yarn

# Copy the app code
COPY . .

# Build the project
RUN yarn run build

# Expose ports
EXPOSE 8080

# Run the application
CMD [ "node", "dist/Marianne.js" ]