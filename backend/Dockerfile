# Use an official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the port your app runs on (e.g., 5000)
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
