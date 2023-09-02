/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { type ReactElement } from 'react';
import type { ClientModule } from '@ianaio/types';
import type { Location } from 'history';
export declare function dispatchLifecycleAction<K extends keyof ClientModule>(lifecycleAction: K, ...args: Parameters<NonNullable<ClientModule[K]>>): () => void;
declare function ClientLifecyclesDispatcher({ children, location, previousLocation, }: {
    children: ReactElement;
    location: Location;
    previousLocation: Location | null;
}): JSX.Element;
export default ClientLifecyclesDispatcher;

