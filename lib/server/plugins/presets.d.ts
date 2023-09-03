/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { LoadContext, IANA SYSTEMSConfig } from '@ianaio/types';
/**
 * Calls preset functions, aggregates each of their return values, and returns
 * the plugin and theme configs.
 */
export declare function loadPresets(context: LoadContext): Promise<Pick<IANA SYSTEMSConfig, 'plugins' | 'themes'>>;

