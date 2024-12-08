//   _   _ _   _ _
//  | | | | |_(_) |___
//  | |_| |  _| | (_-<
//   \___/ \__|_|_/__/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains various utility functions.
 * @module
 */

import { classNames } from '../deps.ts';
import { JSX } from 'preact';
import { SignalLike } from '$fresh/src/types.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * This function is a shorthand for `classNames.default(...classNames: any[]): string`
 * @param {any[]} classNames
 * @returns {string}
 */
export const cn = classNames.default;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * @todo [!] Complete documentation
 */
export const o = (
  classes: string | unknown[],
  props?: {
    class?: string | JSX.SignalLike<string | undefined>;
    nostyle?: boolean;
    nostyleAll?: boolean;
  },
  isForwarding?: boolean,
) => {
  if (!props) {
    return;
  } else if (!props.nostyle && !props.nostyleAll) {
    return cn(classes, isForwarding ? null : props.class);
  } else {
    delete props.nostyle, props.nostyleAll;
    return props.class;
  }
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * @todo [!] Complete documentation
 */
export function getDocumentation(relativeUrl: string, fileNames: string[]) {
  const doc: { [key: string]: string } = {};
  const decoder = new TextDecoder('utf-8');
  fileNames.forEach((name) => {
    doc[name] = decoder.decode(Deno.readFileSync(relativeUrl + name + '.md'));
  });
  return doc;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * This function uses an object that stores the default values for an interface `T`. It uses an input
 * object of type Partial<T> with new values to replace matching properties.
 *
 * @param {T} d
 *  Default values for non-optional values in interface `T`.
 *
 * @param {Partial<T>} i
 *  New values recieved with type `Partial<T>`
 *
 * @returns {T}
 *  An object of type `T` that contains the default `d` values and the new input `i` values.
 */
export function apDef<T extends object>(d: T, i: Partial<T>): T {
  if (Object.keys(d).length === 0) {
    throw new Error(
      'Error in applyDefaults(): If there are no default values, this function must be avoided.',
    );
  } else if (Object.keys(i).length === 0) {
    return d;
  }
  return { ...d, ...i };
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * @todo [!] Complete documentation
 */
export const forward = <
  T extends Record<
    string,
    { class?: SignalLike<string | undefined> | string; nostyle?: boolean }
  >,
>(
  classes: Record<keyof T, string | unknown[]>,
  fwd: T,
): T => {
  Object.keys(fwd).forEach((key) => {
    fwd[key].class = o(classes[key], { ...fwd[key] }, true);
  });
  return fwd;
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * This function emulates the behavior of `Array.prototype.map()` in Records. It calls a function
 * passing each entry of the record as an argument.
 *
 * @param {Record<T>} record
 *  The record to be mapped.
 *
 * @param {function} callback
 *  The function that will map the entries of the record.
 *
 * @returns {Record<T>}
 *  A new cord with each entry mapped to the function.
 */
export function rMap<T>(
  record: Record<string, T>,
  callback: (entry: T, key?: string) => T,
): Record<string, T> {
  const newRecord: Record<string, T> | Record<string | number | symbol, never> =
    {};
  Object.keys(record).forEach((key) => {
    newRecord[key] = callback(record[key], key);
  });
  return newRecord;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * This function is a shorthand for the onClick and onKeyDown ("Enter" key) event listeners.
 *
 * @param cb
 *  The function that will be executed when clicking or pressing the "Enter" key.
 *
 * @returns
 *  An object containing the two event listener functions it is meant to be passed as spread attributes
 *  of an element. `<div {...handleInteraction(() => console.log("Interacted"))} />`.
 */
export const handleInteraction = (cb: null | ((ev: Event) => void)) => {
  if (cb === null) {
    return {};
  }
  return {
    onClick: (ev: MouseEvent) => cb(ev),
    onKeyDown: (ev: KeyboardEvent) => {
      if (ev.key === 'Enter') {
        cb(ev);
      }
    },
  };
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Appends a prefix to each Tailwind class in a given string of classes.
 *
 * @param tw_classes - A string containing space-separated Tailwind CSS classes.
 * @param suffix - The string to append to each Tailwind class.
 * @returns A new string where the suffix has been appended to each Tailwind class.
 *
 * @example
 * ```typescript
 * tw_prepend_each("bg-red-500 text-center p-4", "hover:");
 * // Output: "hover:bg-red-500 hover:text-center hover:p-4"
 * ```
 */
export const tw_prepend_each = (
  tw_classes: string | string[],
  prefix: string,
) => {
  if (typeof tw_classes === 'string') {
    if (!tw_classes.trim()) {
      return '';
    }

    tw_classes = tw_classes.split(/\s+/);
  }

  return tw_classes.reduce(
    (result, className) => `${result} ${prefix}${className}`,
    '',
  );
};
