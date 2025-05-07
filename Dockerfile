FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy the rest of the app
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Start the Node.js app
CMD [ "npm", "start" ]
