import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ConnectivityMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  // Major US cities and Bulgaria coordinates
  const cities = [
    { name: 'New York', coordinates: [-74.006, 40.7128] },
    { name: 'Los Angeles', coordinates: [-118.2437, 34.0522] },
    { name: 'Chicago', coordinates: [-87.6298, 41.8781] },
    { name: 'Houston', coordinates: [-95.3698, 29.7604] },
    { name: 'Miami', coordinates: [-80.1918, 25.7617] },
    { name: 'San Francisco', coordinates: [-122.4194, 37.7749] },
    { name: 'Washington DC', coordinates: [-77.0369, 38.9072] },
    { name: 'Boston', coordinates: [-71.0589, 42.3601] },
  ];
  
  const bulgaria = { name: 'Sofia, Bulgaria', coordinates: [23.3219, 42.6977] };

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-20, 45],
      zoom: 2.5,
      projection: 'naturalEarth',
    });

    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    map.current.on('load', () => {
      if (!map.current) return;

      // Add markers for US cities
      cities.forEach((city) => {
        const marker = new mapboxgl.Marker({
          color: 'hsl(var(--primary))',
          scale: 0.8
        })
          .setLngLat(city.coordinates as [number, number])
          .setPopup(new mapboxgl.Popup().setHTML(`<strong>${city.name}</strong>`))
          .addTo(map.current!);
      });

      // Add marker for Bulgaria
      new mapboxgl.Marker({
        color: 'hsl(var(--accent))',
        scale: 1
      })
        .setLngLat(bulgaria.coordinates as [number, number])
        .setPopup(new mapboxgl.Popup().setHTML(`<strong>${bulgaria.name}</strong><br/>Our European Hub`))
        .addTo(map.current!);

      // Add connection lines
      const connections = cities.map(city => ({
        type: 'Feature' as const,
        properties: {},
        geometry: {
          type: 'LineString' as const,
          coordinates: [city.coordinates, bulgaria.coordinates]
        }
      }));

      map.current!.addSource('connections', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: connections
        }
      });

      map.current!.addLayer({
        id: 'connections',
        type: 'line',
        source: 'connections',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': 'hsl(var(--primary))',
          'line-width': 2,
          'line-opacity': 0.6,
          'line-dasharray': [2, 2]
        }
      });
    });

    setShowTokenInput(false);
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
      {showTokenInput ? (
        <div className="absolute inset-0 bg-muted/50 backdrop-blur-sm flex items-center justify-center z-10">
          <form onSubmit={handleTokenSubmit} className="bg-background p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
                <Input
                  id="mapbox-token"
                  type="text"
                  placeholder="pk.eyJ1..."
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  className="mt-1"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Get your free token at{' '}
                  <a 
                    href="https://mapbox.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    mapbox.com
                  </a>
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Load Map
              </button>
            </div>
          </form>
        </div>
      ) : null}
      
      <div ref={mapContainer} className="absolute inset-0" />
      
      {!showTokenInput && (
        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span>US Major Cities</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span>Bulgaria Hub</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-0.5 bg-primary opacity-60" style={{ backgroundImage: 'repeating-linear-gradient(90deg, hsl(var(--primary)) 0, hsl(var(--primary)) 2px, transparent 2px, transparent 4px)' }}></div>
              <span>Connections</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectivityMap;