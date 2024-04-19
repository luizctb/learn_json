# 1 - JSON to TypeScript Converter  &&&  2 - GEOJSON to TypeScript Converter

# 1 - JSON to TypeScript Converter

link: [https://www.json.org/json-pt.html]

## Overview

This tool converts JSON data into TypeScript interfaces for easy integration with TypeScript projects. It simplifies the process of defining TypeScript types based on existing JSON structures, saving developers time and reducing the likelihood of errors.

## Features

Convert JSON data into TypeScript interfaces
Generate TypeScript interfaces compatible with your JSON structure
Copy the generated TypeScript code with ease
Easy-to-use web interface

## How to Use

Visit the JSON to TypeScript Converter webpage.
Paste your JSON data into the input field.
Copy the generated TypeScript code.
Paste the TypeScript code into your TypeScript project.

## Example

### Input JSON

{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "zipcode": "12345"
  },
  "hobbies": ["Reading", "Gaming", "Cooking"]
}

### Generated TypeScript Interface

interface Address {
  street: string;
  city: string;
  zipcode: string;
}

interface Data {
  name: string;
  age: number;
  isStudent: boolean;
  address: Address;
  hobbies: string[];
}

## Compatibility
This tool supports most JSON structures and generates TypeScript interfaces that closely match the input JSON schema. However, complex or deeply nested JSON structures may require manual adjustments after conversion.

# 2 - GEOJSON to TypeScript Converter

link: [https://enterprise.arcgis.com/pt-br/portal/latest/use/geojson.htm]

## GEOJSON
### GeoJSON é um formato para codificar uma variedade de estruturas de dados geográficos.

{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}

GeoJSON suporta os seguintes tipos de geometria: Point, LineString, Polygon, MultiPoint, MultiLineStringe MultiPolygon. Objetos geométricos com propriedades adicionais são Featureobjetos. Conjuntos de recursos estão contidos em FeatureCollectionobjetos.

## A especificação GeoJSON (RFC 7946)

Em 2015, a Internet Engineering Task Force (IETF), em conjunto com os autores das especificações originais, formou um GeoJSON WG para padronizar o GeoJSON. RFC 7946 foi publicado em agosto de 2016 e é a nova especificação padrão do formato GeoJSON, substituindo a especificação GeoJSON de 2008.

