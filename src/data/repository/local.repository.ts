import { CityModel } from "@data/model";
import { readFile } from "../provider/json";

export interface LocalRepository {
  getCities(): Promise<CityModel[]>;
};

export class LocalRepositoryImpl implements LocalRepository {
  async getCities(): Promise<CityModel[]> {
    return await readFile<CityModel[]>(require('path').resolve(__dirname, '../../../data/cities.json'));
  };
};
