# Node.js resmi imajını kullan
FROM node:14 as build

# Çalışma dizinini ayarla
WORKDIR /src/app

# Bağımlılıkları yükle
COPY package*.json ./
RUN npm install

# Kaynak kodunu kopyala ve uygulamayı oluştur
COPY . .
RUN npm run build

# Nginx kullanarak statik dosyaları serve et
FROM nginx:alpine
COPY --from=build /src/app/build /usr/share/nginx/html

# Nginx'i başlat
EXPOSE 423
CMD ["nginx", "-g", "daemon off;"]
