/* @flow */
type UnaryFn<A, R> = (a: A) => R;

type Compose =
  (<A, B, C>(
    bc: UnaryFn<B, C>,
    ab: UnaryFn<A, B>,
    ...rest: Array<void>
  ) => UnaryFn<A, C>) &
  (<A, B>(
    ab: UnaryFn<A, B>,
    ...rest: Array<void>
  ) => UnaryFn<A, B>);

declare var compose: Compose;

// shared code between bad/good Compose
type Comp<A> = (a: A) => void;
type HOC<A, B> = (a: Comp<A>) => Comp<B>;

function myEnhancer<A, B>(mapper: B => A): HOC<A, B> {
  return (comp: Comp<A>) => (props: B) => comp(mapper(props));
}

const enhancer: HOC<*, { p: number, e: string }> = compose(
  myEnhancer(props => ({
    p: `${props.p * 3}`,
  })),
  myEnhancer(props => ({
    c: Math.round(props.p),
  }))
);
