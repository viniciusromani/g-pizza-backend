const http = async<T> (
  request: RequestInfo
): Promise<T> => {
  try {
    const response = await fetch(request)
    const body = await response.json()
    return body
  } catch (error) { 
    throw new Error('error executing external http request ' + error)
  }
}

export const get = async<T> (
  path: string,
  args: RequestInit = { }
): Promise<T> => {
  const _args: RequestInit = {
    method: 'get',
    ...args
  }
  return await http<T>(new Request(path, _args))
}

export const post = async<T> (
  path: string,
  body: any,
  args: RequestInit = { }
): Promise<T> => {
  const _args: RequestInit = {
    method: 'post',
    body: JSON.stringify(body),
    ...args
  }
  return await http<T>(new Request(path, _args))
}

export const put = async<T> (
  path: string,
  body: any,
  args: RequestInit = { }
): Promise<T> => {
  const _args: RequestInit = {
    method: 'put',
    body: JSON.stringify(body),
    ...args
  }
  return await http<T>(new Request(path, _args))
}
