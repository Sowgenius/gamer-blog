# Gamer Blog App Build with NextJS - Typescript and Contenful 

This is a minimal setup for NextJS application that work with:

- typescript
- `styled-components`
- Docker

## How to use

### Clone this repo to your machine

```bash
git clone git@github.com:sowgenius/gamer-blog.git gamer-blog-app
cd gamer-blog-app
```

Build it with docker:

```bash
# build
docker build -t nextjs-app .
# or, use multi-stage builds to build a smaller docker image
docker build -t nextjs-app -f ./Dockerfile.multistage.
```

Run it:

```bash
docker run --rm -it \
  -p 3000:3000 \
  -e "API_URL=https://example.com" \
  gamer-blog-app
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now --docker -e API_URL="https://example.com"
```