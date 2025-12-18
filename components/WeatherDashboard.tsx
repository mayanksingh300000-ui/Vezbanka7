import React from 'react';

interface CityData {
  name: string;
  min: number;
  max: number;
}

interface WeatherDashboardProps {
  data: {
    cities: CityData[];
  };
}

const WeatherDashboard: React.FC<WeatherDashboardProps> = ({ data }) => {
  // Constants for visualization scale (range from -25 to +10)
  const SCALE_MIN = -22;
  const SCALE_MAX = 8;
  const TOTAL_RANGE = SCALE_MAX - SCALE_MIN;

  const getPosition = (val: number) => {
    return ((val - SCALE_MIN) / TOTAL_RANGE) * 100;
  };

  return (
    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-inner mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.cities.map((city) => {
          const leftPos = getPosition(city.min);
          const width = getPosition(city.max) - leftPos;

          return (
            <div key={city.name} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-700 text-lg">{city.name}</span>
                <div className="flex gap-2 text-sm font-mono font-bold">
                  <span className="text-blue-600">{city.min}°C</span>
                  <span className="text-gray-400">до</span>
                  <span className={city.max > 0 ? "text-orange-500" : "text-blue-400"}>
                    {city.max > 0 ? `+${city.max}` : city.max}°C
                  </span>
                </div>
              </div>
              
              {/* Visual Range Bar */}
              <div className="relative h-6 bg-gray-100 rounded-full w-full overflow-hidden border border-gray-200">
                {/* Zero Line Marker */}
                <div 
                    className="absolute top-0 bottom-0 border-l border-dashed border-gray-400 opacity-50 z-10" 
                    style={{ left: `${getPosition(0)}%` }}
                    title="0°C"
                />
                
                {/* Temperature Range Bar */}
                <div 
                  className="absolute top-1 bottom-1 rounded-full shadow-sm bg-gradient-to-r from-blue-400 to-teal-300 opacity-80"
                  style={{ 
                    left: `${leftPos}%`, 
                    width: `${width}%` 
                  }}
                />
                
                {/* Dots for endpoints */}
                <div 
                    className="absolute top-1.5 w-3 h-3 bg-blue-600 rounded-full border border-white z-20"
                    style={{ left: `calc(${leftPos}% - 6px)` }}
                />
                 <div 
                    className="absolute top-1.5 w-3 h-3 bg-teal-500 rounded-full border border-white z-20"
                    style={{ left: `calc(${leftPos + width}% - 6px)` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 mt-1 px-1">
                 <span>Ладно ({city.min})</span>
                 <span>Топло ({city.max})</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-3 text-xs text-gray-500 italic">
        * Испрекинатата линија означува 0°C
      </div>
    </div>
  );
};

export default WeatherDashboard;