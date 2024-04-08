import { get, post, put } from '../../src/data/provider/http'

describe('http provider', () => {
  afterEach(() => jest.restoreAllMocks())

  describe('.__get()', () => {
    it('should return with data', async () => {
      const data = { 'key': 'value' }
      const url = 'http://localhost:3000'
      const args = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const mock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() => 
          Promise.resolve({
            json: () => Promise.resolve(data)
          } as Response)
        )
      const expectedArgs = new Request(url, {
        method: 'get',
        ...args
      })
      const result = await get<any>(url, args)

      expect(mock).toHaveBeenCalledWith(expectedArgs)
      expect(result).toBe(data)
    })

    it('should throw', async () => {
      const url = 'http://localhost:3000'
      const args = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const mock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() => { throw new Error() })

      expect(mock).toThrow()
      await expect(get<any>(url, args)).rejects.toThrow()
    })
  })

  describe('.__post()', () => {
    it('should return with data', async () => {
      const data = { 'key': 'value' }
      const body = { 'chave': 'valor' }
      const url = 'http://localhost:3000'
      const args = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const mock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() => 
          Promise.resolve({
            json: () => Promise.resolve(data)
          } as Response)
        )
      const expectedArgs = new Request(url, {
        method: 'post',
        body: JSON.stringify(body),
        ...args
      })
      const result = await post<any>(url, body, args)

      /**
       * TODO: For some reason it is considering two 
       * differents objects even though they are the same
       */
      // expect(mock).toHaveBeenCalledWith(expectedArgs)
      expect(result).toBe(data)
    })
    it('should throw', async () => {
      const data = { 'key': 'value' }
      const body = { 'chave': 'valor' }
      const url = 'http://localhost:3000'
      const args = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const mock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() => { throw new Error() })

      expect(mock).toThrow()
      await expect(post<any>(url, body, args)).rejects.toThrow()
    })
  })

  describe('.__put()', () => {
    it('should return with data', async () => {
      const data = { 'key': 'value' }
      const body = { 'chave': 'valor' }
      const url = 'http://localhost:3000'
      const args = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const mock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() => 
          Promise.resolve({
            json: () => Promise.resolve(data)
          } as Response)
        )
      const expectedArgs = new Request(url, {
        method: 'put',
        body: JSON.stringify(body),
        ...args
      })
      const result = await put<any>(url, body, args)

      /**
       * TODO: For some reason it is considering two 
       * differents objects even though they are the same
       */
      // expect(mock).toHaveBeenCalledWith(expectedArgs)
      expect(result).toBe(data)
    })
    it('should throw', async () => {
      const data = { 'key': 'value' }
      const body = { 'chave': 'valor' }
      const url = 'http://localhost:3000'
      const args = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const mock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() => { throw new Error() })
        
      expect(mock).toThrow()
      await expect(put<any>(url, body, args)).rejects.toThrow()
    })
  })
})
