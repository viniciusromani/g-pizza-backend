import response from '../mock/viacep.json'

import * as wrapper from '../../src/data/provider/http'
import { ExternalRepository, ExternalRepositoryImpl } from '../../src/data/repository'

describe('external repository', () => {
  let repository: ExternalRepository

  beforeAll(() => repository = new ExternalRepositoryImpl())
  afterEach(() => jest.restoreAllMocks())
  
  describe('.__fetchIbgeCodeFromZipcode()', () => {
    it('should return with data', async () => {
      const mock = jest
        .spyOn(wrapper, 'get')
        .mockImplementation(() => Promise.resolve(response))

      const result = await repository.fetchIbgeCodeFromZipcode('13416050')
      const expected = response['ibge']

      expect(mock).toHaveBeenCalledTimes(1)
      expect(result).toBe(expected)
    })

    it('should throw', async () => {
      const mock = jest
        .spyOn(wrapper, 'get')
        .mockImplementation(() => { throw new Error() })

      expect(mock).toThrow()
      expect(repository.fetchIbgeCodeFromZipcode('13416050')).rejects.toThrow()
    })
  })
})
