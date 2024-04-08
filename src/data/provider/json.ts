import fs from 'fs'

export const readFile = async<T> (
  path: string
): Promise<T> => {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync(path, 'utf-8')
      resolve(JSON.parse(data))
    } catch (err) {
      reject(err)
    }
  })
}
