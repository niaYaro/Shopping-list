import { createContext, useContext, useState, ReactNode } from 'react';

const SeasonalOffersContext = createContext<{
  seasonalOffers: string[];
  setSeasonalOffers: (arg: string[]) => void;
} | undefined>(undefined);

export function useSeasonalOffers() {
  const context = useContext(SeasonalOffersContext);
  if (context === undefined) {
    throw new Error('Seasonal Offers is undefined');
  }
  return context;
}

type SeasonalOffersProviderProps = {
    children: ReactNode;
  };

export function SeasonalOffersProvider({ children }: SeasonalOffersProviderProps) {
  const [seasonalOffers, setSeasonalOffers] = useState<string[]>([]);

  return (
    <SeasonalOffersContext.Provider value={{ seasonalOffers, setSeasonalOffers }}>
      {children}
    </SeasonalOffersContext.Provider>
  );
}
