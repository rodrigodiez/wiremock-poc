# Wiremoc POC
This project is a proof of concept of using [Wiremock](http://wiremock.org/) to proxy and rewire requests in a docker environment.

It uses Wiremock admin API to re-configure the mappings on the fly

# Idea
I wanted to proof that a project A can use Wiremock as a proxy to make requests to a project B and also that Wiremock can be reconfigured to point to project C at any given time, without restarting project A.

This is usefull to configure a development environment for a project to point to different API environments as needed (development, test, production...)

# Run it
Clone the repository

Install dependencies
```
yarn
```

Create a docker-network so that all projects can communicate

```
docker create network wiremock-poc-network
```

In separate terminals start the projects:

```
cd project-a; docker-compose up
```

```
cd project-b; docker-compose up
```

```
cd project-c; docker-compose up
```

Wire `project-a` to `project-b` (root directory)
```
yarn project-b
```

Make a request:

```
curl http://localhost:3000

This is what I see when requesting to http://api:8080: This is project-b
```

Now wire `project-a` to `project-c` (root directory)
```
yarn project-c
```

Make another request:

```
curl http://localhost:3000

This is what I see when requesting to http://api:8080: This is project-c
```

Voila!