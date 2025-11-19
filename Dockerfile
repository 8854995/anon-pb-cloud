# 用 GitHub Container Registry 上的 PocketBase 映像
FROM ghcr.io/kdpuvvadi/pocketbase:latest

# 這個映像的工作目錄是 /usr/src/app
WORKDIR /usr/src/app

# 把你本機的資料跟 migrations 打包進映像裡
COPY pb_data ./pb_data
COPY pb_migrations ./pb_migrations
