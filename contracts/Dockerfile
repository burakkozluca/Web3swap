# Node.js resmi imajını kullanarak başlayın
FROM node:16

# Çalışma dizinini ayarlayın
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyalayın
COPY package*.json ./

# Bağımlılıkları kurun
RUN npm install

# Truffle global olarak kurulur
RUN npm install -g truffle

# Geri kalan proje dosyalarını kopyalayın
COPY . .

# Ağ bağlantısı ve diğer gerekli ortam ayarlarını yapın (Eğer gerekirse)
# ENV ...

# Konteyner başlatıldığında varsayılan komut
CMD ["truffle", "compile"]
