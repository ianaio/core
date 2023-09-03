/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { LoadContext, RouteConfig, GlobalData, LoadedPlugin } from '@ianaio/types';
/**
 * Initializes the plugins, runs `loadContent`, `translateContent`,
 * `contentLoaded`, and `translateThemeConfig`. Because `contentLoaded` is
 * side-effect-ful (it generates temp files), so is this function. This function
 * would also mutate `context.siteConfig.themeConfig` to translate it.
 */
export declare function loadPlugins(context: LoadContext): Promise<{
    plugins: LoadedPlugin[];
    pluginsRouteConfigs: RouteConfig[];
    globalData: GlobalData;
}>;

