/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { Context } from '../routeContext';
export default function useRouteContext() {
    const context = React.useContext(Context);
    if (!context) {
        throw new Error('Unexpected: no ianaio route context found');
    }
    return context;
}

