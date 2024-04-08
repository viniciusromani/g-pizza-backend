import { UseCase } from ".";
import { ExternalRepository, LocalRepository } from "@data/repository";

interface AuthUseCase extends UseCase<boolean, string> { }

class AuthUseCaseImpl implements AuthUseCase {
  constructor(
    private readonly externalRepository: ExternalRepository,
    private readonly localRepository: LocalRepository
  ) { }

  async execute(zipcode: string): Promise<boolean> {
    const ibge = await this.externalRepository.fetchIbgeCodeFromZipcode(zipcode)
    const cities = await this.localRepository.getCities()
    const enabled = cities
      .filter(city => city.enabled)
      .map(city => city.ibge_code)
    return enabled.includes(ibge)
  }
}
