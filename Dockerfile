# Usamos una imagen de Node.js como base
FROM node:18

# Establecemos el directorio de trabajo en el contenedor
WORKDIR /app

# Copiamos el package.json y el package-lock.json
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código de la aplicación
COPY . .

# Compilamos el TypeScript
RUN npm run build

# Exponemos el puerto en el que la aplicación va a correr
EXPOSE 3000

# Definimos el comando por defecto para correr la aplicación
CMD ["node", "dist/app.js"]
