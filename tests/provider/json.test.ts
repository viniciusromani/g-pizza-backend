import fs from 'fs'
import { readFile } from '../../src/data/provider/json'

describe('json provider', () => {
  afterEach(() => jest.restoreAllMocks())
  
  describe('.__readFile()', () => {
    it('should return with data', async () => {
      const expected = { 'key': 'value' }

      const mock = jest
        .spyOn(fs, 'readFileSync')
        .mockImplementation(() => JSON.stringify(expected))

      const result = await readFile('./data/cities.json')

      expect(mock).toHaveBeenCalledTimes(1)
      expect(result).toStrictEqual(expected)
    })
  })
})
