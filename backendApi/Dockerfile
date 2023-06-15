FROM node

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copie todo o código do projeto para o diretório de trabalho
COPY . .

EXPOSE 9000

CMD ["npm", "start"]
