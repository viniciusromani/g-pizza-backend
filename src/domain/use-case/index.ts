export interface UseCase<Result, Params = null> {
  execute(params: Params): Promise<Result>
}
