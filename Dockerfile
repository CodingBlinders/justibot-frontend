# Use the official Node.js 18 image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Install a lightweight web server for serving static files
RUN npm install -g serve

# Remove unnecessary files to keep the image clean
RUN rm -rf src

# Expose the port the app runs on
EXPOSE 3000

# Command to run the Next.js application in production mode
CMD ["serve", "-s", "out"]
