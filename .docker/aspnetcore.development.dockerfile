FROM microsoft/aspnetcore-build:latest

ENV DOTNET_USE_POLLING_FILE_WATCHER=1
ENV ASPNETCORE_URLS=http://*:5000

WORKDIR /var/www/aspnetcoreapp

CMD ["/bin/bash", "-c", "dotnet restore && dotnet build && dotnet watch run"]