# React Keycloak Example

This project only uses `Keycloak-js` to connect to Keycloak.

## Keycloak

### `docker-compose up -d`

Will start Keycloak and a Postgres DB to store information.

### `docker-compose down`

To shutdown the containers.

### Setup

- Once running, go to http://localhost:8085/ then create a new realm named `myrealm`.
- Create a client named `myclient` and set the URL's to `http://localhost:3000`
- Create a role named `user`.
- Create a user named `user` and assign it the `user` role and set the password to `user`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


