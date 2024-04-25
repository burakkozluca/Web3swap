# Node.js resmi imajını kullan
FROM node:14

# Çalışma dizinini ayarla
WORKDIR /index

# Uygulama bağımlılıklarını yükle
# package.json VE/VEYA package-lock.json'ı kopyala
COPY package*.json ./

RUN npm install
# Üretim için:
# RUN npm ci --only=production

# Uygulama kaynak kodunu kopyala
COPY . .

# Uygulamanın bağlanacağı portu belirt
EXPOSE 4000

# Uygulamayı çalıştır
CMD ["node", "index.jsx"]
