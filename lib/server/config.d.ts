/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { LoadContext } from '@ianaio/types';
export declare function loadSiteConfig({ siteDir, customConfigFilePath, }: {
    siteDir: string;
    customConfigFilePath?: string;
}): Promise<Pick<LoadContext, 'siteConfig' | 'siteConfigPath'>>;

