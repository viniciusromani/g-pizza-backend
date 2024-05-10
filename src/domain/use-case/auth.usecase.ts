import { UseCase } from ".";
import { ExternalRepository, LocalRepository } from "@data/repository";

export interface AuthUseCase extends UseCase<boolean, string> { }

export class AuthUseCaseImpl implements AuthUseCase {
  constructor(
    private readonly externalRepository: ExternalRepository,
    private readonly localRepository: LocalRepository
  ) { }

  async execute(zipcode: string): Promise<boolean> {
    const ibge = await this.externalRepository.fetchIbgeCodeFromZipcode(zipcode)
    const cities = await this.localRepository.getCities()

    console.log(ibge)
    console.log(cities)
    
    const enabled = cities
      .filter(city => city.enabled)
      .map(city => city.ibge_code)
    
    return enabled.includes(ibge)
  }
}
