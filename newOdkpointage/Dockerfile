# Use official node image as the base image
FROM node:12.22.9 as node

# Set the working directory
WORKDIR /app

# Add the source code to app
COPY . .

# Install all the dependencies
RUN npm install


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx

# Copy the build output to replace the default nginx contents.
COPY --from=node /app/dist/OdkPointage /usr/share/nginx/html

# Expose port 80
EXPOSE 80
