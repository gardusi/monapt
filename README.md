# Type Safe Monapt

[![npm version](https://badge.fury.io/js/type-safe-monapt.svg)](http://badge.fury.io/js/monapt)

Monapt helps you better manage `null`, `undefined`, exceptions, and other mildly interesting
phenomena.  It handles them through the
[`Option`](http://danielwestheide.com/blog/2012/12/19/the-neophytes-guide-to-scala-part-5-the-option-type.html),
[`Try`](http://danielwestheide.com/blog/2012/12/26/the-neophytes-guide-to-scala-part-6-error-handling-with-try.html),
and [`Future`](http://danielwestheide.com/blog/2013/01/09/the-neophytes-guide-to-scala-part-8-welcome-to-the-future.html)
abstractions.

## Setup

```bash
$ npm install type-safe-monapt
```

## APIs

### Usage

```typescript
import { Option } from 'type-safe-monapt';

Option(1)
  .map((x) => x * 2)
  .getOrElse(() => 4);
```

You can also take a look at the [tests](https://github.com/gardusi/monapt/tree/master/test) to get
a feel for how to use them.

## Credits

This repo couldn't have been possible without [jiaweihli/monapt](https://github.com/jiaweihli/monapt).
I'm merely adding types to Monapt so reading data is implemented correctly and we have feedback at compile time.
