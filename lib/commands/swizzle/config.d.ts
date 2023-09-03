/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { SwizzleConfig } from '@ianaio/types';
import type { SwizzlePlugin } from './common';
export declare function normalizeSwizzleConfig(unsafeSwizzleConfig: unknown): SwizzleConfig;
export declare function getThemeSwizzleConfig(themeName: string, plugins: SwizzlePlugin[]): SwizzleConfig;

