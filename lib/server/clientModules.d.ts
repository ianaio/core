/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { LoadedPlugin } from '@ianaio/types';
/**
 * Runs the `getClientModules` lifecycle. The returned file paths are all
 * absolute.
 */
export declare function loadClientModules(plugins: LoadedPlugin[]): string[];

