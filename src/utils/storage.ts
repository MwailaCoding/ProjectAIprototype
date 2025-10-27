// LocalStorage utilities with type safety and versioning

const STORAGE_VERSION = '1.0';
const STORAGE_PREFIX = 'project-ai-studio';

export interface StoredData {
  user: {
    name: string;
    kingBalance: number;
    priestBalance: number;
    territoriesConquered: number;
  };
  projects: any[];
  progress: any[];
  history: any[];
}

export const storage = {
  get<T>(key: string): T | null {
    if (typeof window === 'undefined') return null;
    try {
      const item = localStorage.getItem(`${STORAGE_PREFIX}-${key}`);
      if (!item) return null;
      return JSON.parse(item) as T;
    } catch (error) {
      console.error(`Error reading from localStorage:`, error);
      return null;
    }
  },

  set<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(`${STORAGE_PREFIX}-${key}`, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to localStorage:`, error);
    }
  },

  remove(key: string): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(`${STORAGE_PREFIX}-${key}`);
  },

  clear(): void {
    if (typeof window === 'undefined') return;
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(STORAGE_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
  },

  getAll(): Record<string, any> {
    if (typeof window === 'undefined') return {};
    const result: Record<string, any> = {};
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(STORAGE_PREFIX)) {
        try {
          const value = localStorage.getItem(key);
          if (value) {
            const cleanKey = key.replace(`${STORAGE_PREFIX}-`, '');
            result[cleanKey] = JSON.parse(value);
          }
        } catch (error) {
          console.error(`Error parsing localStorage key ${key}:`, error);
        }
      }
    });
    return result;
  },

  export(): string {
    const data = this.getAll();
    return JSON.stringify({ version: STORAGE_VERSION, data }, null, 2);
  },

  import(jsonString: string): boolean {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.version !== STORAGE_VERSION) {
        console.warn('Storage version mismatch');
      }
      Object.keys(parsed.data).forEach(key => {
        this.set(key, parsed.data[key]);
      });
      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }
};

