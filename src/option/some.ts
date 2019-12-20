import { None, None_ } from './none';
import { Option, Option_ } from './option';

/**
 * Some represents non-emptiness.  It signals that a value that may not exist does actually exist.
 */
class Some<A> implements Option_<A> {
  private value: A;

  constructor(value: A) {
    this.value = value;
  }

  isDefined(): this is Some<A> {
    return true;
  }

  isEmpty(): this is None_<A> {
    return false;
  }

  // tslint:disable-next-line: no-any
  equals(other: Option<any>): boolean {
    return (other instanceof Some) && this.get() === other.get();
  }

  filter(predicate: (value: A) => boolean): Option<A> {
    if (predicate(this.value)) {
      return this;
    }
    else {
      return None;
    }
  }

  filterNot(predicate: (value: A) => boolean): Option<A> {
    if (!predicate(this.value)) {
      return this;
    }
    else {
      return None;
    }
  }

  flatMap<B>(flatMapper: (value: A) => Option<B>): Option<B> {
    return flatMapper(this.value);
  }

  foreach(run: (value: A) => void): void {
    run(this.value);
  }

  get(): A {
    return this.value;
  }

  getOrElse(defaultValue: () => A): A {
    return this.value;
  }

  map<B>(mapper: (value: A) => B): Option<B> {
    return new Some(mapper(this.value));
  }

  match<B>(matcher: { Some: (a: A) => B, None: () => B }): B {
    return matcher.Some(this.value);
  }

  orElse(alternative: () => Option<A>): Option<A> {
    return this;
  }
}

export { Some };
