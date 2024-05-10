import { LocalProviderCity } from "@data/model"
import { readFile } from "../provider/json"

export interface LocalRepository {
  getCities(): Promise<LocalProviderCity[]>
}

export class LocalRepositoryImpl implements LocalRepository {
  async getCities(): Promise<LocalProviderCity[]> {
    return await readFile<LocalProviderCity[]>('../../../data/cities.json')
  }
}
