FROM nginx
COPY ./.docker/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
