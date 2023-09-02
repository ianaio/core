/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useMemo } from 'react';
export const Context = React.createContext(null);
function mergeContexts({ parent, value, }) {
    if (!parent) {
        if (!value) {
            throw new Error('Unexpected: no IANAIO route context found');
        }
        else if (!('plugin' in value)) {
            throw new Error('Unexpected: IANAIO topmost route context has no `plugin` attribute');
        }
        return value;
    }
    // TODO deep merge this
    const data = { ...parent.data, ...value?.data };
    return {
        // Nested routes are not supposed to override plugin attribute
        plugin: parent.plugin,
        data,
    };
}
export function RouteContextProvider({ children, value, }) {
    const parent = React.useContext(Context);
    const mergedValue = useMemo(() => mergeContexts({ parent, value }), [parent, value]);
    return <Context.Provider value={mergedValue}>{children}</Context.Provider>;
}

