FROM node
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm i
COPY . .
EXPOSE 8800
CMD ["npm", "run", "start"]
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD curl -f http://localhost:8800/api/ping || exit 1
