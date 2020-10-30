## gRPC an Pokemonbeispiel

gRPC für die 1. Abgabe in AVG

## Code style

Dieses Projekt wurde mit dem JavaScript Style Guide von Airbnb geschrieben und durch ESLint gewährleistet

[![AirBnb](https://img.shields.io/badge/code%20style-airbnb-orange)](https://github.com/airbnb/javascript)

## Installation

Als erstes muss man `npm install` machen um die Dependencies zu downloaden. Danach muss man die proto-files generieren mit `npm run build`. Danach kann man den Server mit `npm run server` starten. Der Client connected mittels `npm run client` mit dem Server und führt darauf direkt die Funktionen (getPokemon, getPokemons, catchPokemon, createPokemon) aus.

Eine Dokumentation kann man sich mittels `npm run asciidoc` bauen lassen die dann als html-Datei im Order doc->html generiert ist.
