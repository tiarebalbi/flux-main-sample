/*
 * Copyright 2018 Tiarê Balbi Bonamini
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @flow

declare module 'lodash/flow' {
  declare type FN<A,R> = (a: A) => R;
  declare module.exports:
    ((end: void) => (<T>(x: T) => T)) &
    (<A,B>(m1: FN<A,B>, end: void) => FN<A,B>) &
    (<A,B,C>(m1: FN<A,B>, m2: FN<B,C>, end: void) => FN<A,C>) &
    (<A,B,C,D>(m1: FN<A,B>, m2: FN<B,C>, m3: FN<C,D>, end: void) => FN<A,D>) &
    (<A,B,C,D,E>(m1: FN<A,B>, m2: FN<B,C>, m3: FN<C,D>, m4: FN<D,E>, end: void) => FN<A,E>) &
    (<A,B,C,D,E,F>(m1: FN<A,B>, m2: FN<B,C>, m3: FN<C,D>, m4: FN<D,E>, m5: FN<E,F>, end: void) => FN<A,F>) &
    (<A,B,C,D,E,F,G>(m1: FN<A,B>, m2: FN<B,C>, m3: FN<C,D>, m4: FN<D,E>, m5: FN<E,F>, m6: FN<F,G>, end: void) => FN<A,G>) &
    (<A,B,C,D,E,F,G,H>(m1: FN<A,B>, m2: FN<B,C>, m3: FN<C,D>, m4: FN<D,E>, m5: FN<E,F>, m6: FN<F,G>, m7: FN<G,H>, end: void) => FN<A,H>) &
    (<A,B,C,D,E,F,G,H,J>(m1: FN<A,B>, m2: FN<B,C>, m3: FN<C,D>, m4: FN<D,E>, m5: FN<E,F>, m6: FN<F,G>, m7: FN<G,H>, m8: FN<H,J>, end: void) => FN<A,J>) &
    (<A,B,C,D,E,F,G,H,J,K>(m1: FN<A,B>, m2: FN<B,C>, m3: FN<C,D>, m4: FN<D,E>, m5: FN<E,F>, m6: FN<F,G>, m7: FN<G,H>, m8: FN<H,J>, m9: FN<J,K>, end: void) => FN<A,K>) &
    (<A,B,C,D,E,F,G,H,J,K,L>(m1: FN<A,B>, m2: FN<B,C>, m3: FN<C,D>, m4: FN<D,E>, m5: FN<E,F>, m6: FN<F,G>, m7: FN<G,H>, m8: FN<H,J>, m9: FN<J,K>, m10: FN<K,L>, end: void) => FN<A,L>) &
    (<A,R>(...funcs: Array<FN<A,R>>) => FN<A,R>)
}
