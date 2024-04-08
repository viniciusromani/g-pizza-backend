import cities from '../../data/cities.json'

import * as wrapper from '../../src/data/provider/json'
import { LocalRepository, LocalRepositoryImpl } from '../../src/data/repository'

describe('local repository', () => {
  let repository: LocalRepository

  beforeAll(() => repository = new LocalRepositoryImpl())
  afterEach(() => jest.restoreAllMocks())
  
  describe('.__getCities()', () => {
    it('should return with data', async () => {
      const mock = jest
        .spyOn(wrapper, 'readFile')
        .mockImplementation(() => Promise.resolve(cities))

      const result = await repository.getCities()

      expect(mock).toHaveBeenCalledTimes(1)
      expect(result).toBe(cities)
    })

    it('should throw', async () => {
      const mock = jest
        .spyOn(wrapper, 'readFile')
        .mockImplementation(() => { throw new Error() })

      expect(mock).toThrow()
      expect(repository.getCities()).rejects.toThrow()
    })
  })
})
