
declare module 'recompose' {
  declare type UnaryFn<A, R> = (a: A) => R;

  declare type Compose =
    (<A, B, C>(
      bc: UnaryFn<B, C>,
      ab: UnaryFn<A, B>,
      ...rest: Array<void>
    ) => UnaryFn<A, C>) &
    (<A, B>(
      ab: UnaryFn<A, B>,
      ...rest: Array<void>
    ) => UnaryFn<A, B>);

  declare export var compose: Compose;
}