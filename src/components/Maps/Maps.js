import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { ContainerSearch } from "./Maps.styled";
import { getAddress } from "../../utils/marvelAPI";
const libraries = ["places"];
const mapContainerStyle = {
  width: "90vw",
  height: "90vh",
};
const center = {
  lat: -7.2246743,
  lng: -35.8771292,
};

const Maps = () => {
  const [markers, setMarkers] = useState("");
  const [address, setAddress] = useState("");
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);
  if (loadError) return "Erro ao carregar o mapa!";
  if (!isLoaded) return "Carregando...";

  return (
    <div>
      <Search panTo={panTo} setMarkers={setMarkers} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={center}
        onLoad={onMapLoad}
        onClick={(e) => {
          setMarkers(() => ({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          }));
          getAddress(e.latLng.lat(), e.latLng.lng()).then((response) =>
            setAddress(response),
          );
        }}
      >
        {<Marker position={{ lat: markers.lat, lng: markers.lng }} />}
        {address !== "" && (
          <InfoWindow
            position={{ lat: markers.lat, lng: markers.lng }}
            onCloseClick={() => setAddress("")}
          >
            <div>
              <h2>Endereço de Envio:</h2>
              <p>{address}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};
function Search({ panTo, setMarkers }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => -7.2246743, lng: () => -35.8771292 },
      radius: 200 * 100,
    },
  });
  return (
    <ContainerSearch>
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
            setMarkers({ lat, lng });
          } catch (error) {
            console.log("Erro:", error);
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          placeholder="Digite um endereço..."
        />
        <ComboboxPopover>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} />
            ))}
        </ComboboxPopover>
      </Combobox>
    </ContainerSearch>
  );
}
export default Maps;
