import { get } from "../provider/http";

export interface ExternalRepository {
  fetchIbgeCodeFromZipcode(zipcode: string): Promise<string>
}

export class ExternalRepositoryImpl implements ExternalRepository {
  async fetchIbgeCodeFromZipcode(zipcode: string): Promise<string> {
    const url = `${process.env.VIACEP_API}/${zipcode}/json`
    const result = await get<{ ibge: string }>(url)
    return result['ibge']
  }
}
