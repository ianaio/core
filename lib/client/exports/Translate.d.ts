/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="@ianaio/module-type-aliases" />
/// <reference types="react" />
import { type InterpolateValues } from '@ianaio/Interpolate';
import type { TranslateParam, TranslateProps } from '@ianaio/Translate';
export declare function translate<Str extends string>({ message, id }: TranslateParam<Str>, values?: InterpolateValues<Str, string | number>): string;
export default function Translate<Str extends string>({ children, id, values, }: TranslateProps<Str>): JSX.Element;

