/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { LoadedPlugin, PluginVersionInformation, SiteMetadata } from '@ianaio/types';
export declare function getPluginVersion(pluginPath: string, siteDir: string): Promise<PluginVersionInformation>;
export declare function loadSiteMetadata({ plugins, siteDir, }: {
    plugins: LoadedPlugin[];
    siteDir: string;
}): Promise<SiteMetadata>;

