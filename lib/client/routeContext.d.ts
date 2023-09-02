/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { type ReactNode } from 'react';
import type { PluginRouteContext, RouteContext } from '@ianaio/types';
export declare const Context: React.Context<PluginRouteContext | null>;
export declare function RouteContextProvider({ children, value, }: {
    children: ReactNode;
    value: PluginRouteContext | RouteContext | null;
}): JSX.Element;

