export interface DogState {
    breeds: string[];
    imagesCount: { [key: string]: number };
    loading: boolean;
    error: string | null;
  }
  