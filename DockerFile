FROM nginx:1.17.1-alpine
COPY dist/angular-keycloak-app /usr/share/nginx/html
EXPOSE 80
