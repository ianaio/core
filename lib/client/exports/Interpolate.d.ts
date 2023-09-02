/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="@ianaio/module-type-aliases" />
import { type ReactNode } from 'react';
import type { InterpolateProps, InterpolateValues } from '@ianaio/Interpolate';
export declare function interpolate<Str extends string>(text: Str, values?: InterpolateValues<Str, string | number>): string;
export declare function interpolate<Str extends string, Value extends ReactNode>(text: Str, values?: InterpolateValues<Str, Value>): ReactNode;
export default function Interpolate<Str extends string>({ children, values, }: InterpolateProps<Str>): JSX.Element;

