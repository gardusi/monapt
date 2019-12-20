import { Option, Option_ } from './option';
import { Some } from './some';

/**
 * None is a singleton class that represents emptiness.  It signals that a value that may not exist
 * doesn't exist.
 */
/* tslint:disable:class-name */
class None_<A> implements Option_<A> {
/* tslint:enable:class-name */
  static get INSTANCE(): None_<never> {
    return new None_<never>();
  }

  private constructor() {
    return;
  }

  isDefined(): this is Some<A> {
    return false;
  }

  isEmpty(): this is None_<A> {
    return true;
  }

  // tslint:disable-next-line: no-any
  equals(other: Option<any>): boolean {
    return (other instanceof None_);
  }

  filter(predicate: (value: A) => boolean): Option<A> {
    return this;
  }

  filterNot(predicate: (value: A) => boolean): Option<A> {
    return this;
  }

  flatMap<B>(flatMapper: (value: A) => Option<B>): Option<B> {
    return None_.INSTANCE;
  }

  foreach(run: (value: A) => void): void {
    return;
  }

  getOrElse(defaultValue: () => A): A {
    return defaultValue();
  }

  map<B>(mapper: (value: A) => B): Option<B> {
    return None_.INSTANCE;
  }

  match<B>(matcher: { Some: (a: A) => B, None: () => B }): B {
    return matcher.None();
  }

  orElse(this: None_<A>, alternative: () => Option<A>): Option<A> {
    return alternative();
  }
}

const instance: None_<never> = None_.INSTANCE;

export { None_, instance as None };
