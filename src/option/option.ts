import { None, None_ } from './none';
import { Some } from './some';

/**
 * An Option represents a collection of size 0 or 1.  Traditionally it's used as a replacement for
 * `null` or `undefined` to explicitly encode if a value can be empty or not.
 *
 * :TODO: Narrow self-type in `getOrElse` and `orElse` interfaces.
 */

/* tslint:disable:class-name */
interface Option_<A> {
/* tslint:enable:class-name */
  isDefined(this: Option<A>): this is Some<A>;
  isEmpty(this: Option<A>): this is None_<A>;

  // tslint:disable-next-line: no-any
  equals(other: Option<any>): boolean;
  filter(predicate: (value: A) => boolean): Option<A>;
  filterNot(predicate: (value: A) => boolean): Option<A>;
  flatMap<B>(flatMapper: (value: A) => Option<B>): Option<B>;
  foreach(run: (value: A) => void): void;
  getOrElse(defaultValue: () => A): A;
  map<B>(mapper: (value: A) => B): Option<B>;
  match<B>(matcher: { Some: (a: A) => B, None: () => B }): B;
  orElse(alternative: () => Option<A>): Option<A>;
}

type Option<A> = Some<A> | None_<A>;

/* tslint:disable:no-null-keyword only-arrow-functions */
function Option<A>(value: A | null | undefined): Some<A> | None_<A> {
  if ((value === null) || (value === undefined)) {
    return None;
  }
  else {
    return new Some(value);
  }
}
/* tslint:enable */

/* tslint:disable:no-namespace */
namespace Option {
  /**
   * This error is thrown when `None.get()` is called.
   */
  export class NoSuchElementError extends Error {
    constructor() {
      super();

      this.name = 'NoSuchElementError';
      this.message = 'Monapt.Option.get(): No such element.';
      this.stack = (new Error()).stack;
    }
  }

  /* tslint:disable:only-arrow-functions */
  export function flatten<A>(options: Array<Option<A>>): Array<A> {
    return options
      .filter((option: Option<A>): boolean => option.isDefined())
      .map((option: Some<A>): A => option.get());
  }
  /* tslint:enable */
}
/* tslint:enable */

export { Option, Option_ };
