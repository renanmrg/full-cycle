FROM golang:alpine as builder

WORKDIR /app 

COPY hello-world.go .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" hello-world.go
RUN ls

FROM scratch

WORKDIR /app

COPY --from=builder /app/hello-world /
#RUN chmod +x hello-world

ENTRYPOINT ["/hello-world"]