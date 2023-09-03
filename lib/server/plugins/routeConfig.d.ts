/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { type ApplyTrailingSlashParams } from '@ianaio/utils-common';
import type { RouteConfig } from '@ianaio/types';
/** Recursively applies trailing slash config to all nested routes. */
export declare function applyRouteTrailingSlash(route: RouteConfig, params: ApplyTrailingSlashParams): RouteConfig;
export declare function sortConfig(routeConfigs: RouteConfig[], baseUrl?: string): void;

