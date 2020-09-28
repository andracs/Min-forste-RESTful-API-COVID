# Min første RESTful API

En hurtig dummy, hvor vi byggede en dummy-covid-api for Zealand.

## Usage

```npm install ```
Se på localhost:3000

Endpoints:

- ***/***  - formular til indtastning (sender POST request til /corona)
- ***/corona*** - api endpoint, som viser det aktuelle coronatal på en GET request, mens på en POST request vil den oprette nye tal

## Todo
- Implementer peristens i en fil
- Implementer PUT request, som opdaterer
- Implementer POST request, som opretter et nyt hold
- Implementer DELETE request, som sletter holdet
