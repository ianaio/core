/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { RouteConfig, ReportingSeverity } from '@ianaio/types';
export declare function handleBrokenLinks({ allCollectedLinks, onBrokenLinks, routes, baseUrl, outDir, }: {
    allCollectedLinks: {
        [location: string]: string[];
    };
    onBrokenLinks: ReportingSeverity;
    routes: RouteConfig[];
    baseUrl: string;
    outDir: string;
}): Promise<void>;

