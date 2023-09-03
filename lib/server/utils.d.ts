/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Globby } from '@ianaio/utils';
import type { RouteConfig } from '@ianaio/types';
export declare function getAllFinalRoutes(routeConfig: RouteConfig[]): RouteConfig[];
export declare function safeGlobby(patterns: string[], options?: Globby.GlobbyOptions): Promise<string[]>;

