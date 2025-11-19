FROM docker.io/alpine:3.18

# 安裝 SSL 憑證，讓 PocketBase 能連 HTTPS
RUN apk add --no-cache ca-certificates

WORKDIR /app

# 把 Linux 版 pocketbase 拷貝進 image
COPY pocketbase /app/pocketbase

# 把你現有的資料與 schema 帶進 image
COPY pb_data /app/pb_data
COPY pb_migrations /app/pb_migrations

# 確保 binary 可執行
RUN chmod +x /app/pocketbase

EXPOSE 8080

# 啟動 pocketbase，對外聽 8080 port
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8080"]
