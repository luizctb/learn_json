interface GeoJSONFeature {
    type: string;
    geometry: {
      type: string;
      coordinates: [number, number];
    };
    properties: {
      name: string;
      // Outras propriedades podem ser adicionadas conforme necessário
    };
  }
  
  // Exemplo de utilização:
  const feature: GeoJSONFeature = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [125.6, 10.1]
    },
    properties: {
      name: "Dinagat Islands"
    }
  };
  
  console.log(feature.properties.name); // Saída: Dinagat Islands