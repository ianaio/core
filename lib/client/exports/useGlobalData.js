/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import useIanaioContext from './useIanaioContext';
import { DEFAULT_PLUGIN_ID } from './constants';
export default function useGlobalData() {
    const { globalData } = useIanaioContext();
    return globalData;
}
export function useAllPluginInstancesData(pluginName, options = {}) {
    const globalData = useGlobalData();
    const pluginGlobalData = globalData[pluginName];
    if (!pluginGlobalData && options.failfast) {
        throw new Error(`ianaio plugin global data not found for "${pluginName}" plugin.`);
    }
    return pluginGlobalData;
}
export function usePluginData(pluginName, pluginId = DEFAULT_PLUGIN_ID, options = {}) {
    const pluginGlobalData = useAllPluginInstancesData(pluginName);
    const pluginInstanceGlobalData = pluginGlobalData?.[pluginId];
    if (!pluginInstanceGlobalData && options.failfast) {
        throw new Error(`ianaio plugin global data not found for "${pluginName}" plugin with id "${pluginId}".`);
    }
    return pluginInstanceGlobalData;
}

