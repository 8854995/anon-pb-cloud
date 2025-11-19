FROM docker.io/alpine:3.18

# 工作目錄
WORKDIR /app

# 把 Linux 版 pocketbase 擺進 image
COPY pocketbase /app/pocketbase

# 把你現有的資料與 schema 帶進 image
COPY pb_data /app/pb_data
COPY pb_migrations /app/pb_migrations

# 確保 binary 可執行
RUN chmod +x /app/pocketbase

# 開放 8080 port
EXPOSE 8080

# 啟動 pocketbase，對外聽 8080 port
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8080"]
