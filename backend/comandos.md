# comandos

## Instalar as bibliotecas
npm i prisma @prisma/client @prisma/adapter-mariadb dotenv express cors bcrypt

## Inicializar o prisma
npx prisma init --datasource-provider mysql --output ../generated/prisma

## 
npx prisma db push --force-reset

## Gerar os arquivos 
npx prisma generate