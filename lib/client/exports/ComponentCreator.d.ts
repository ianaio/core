/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Loadable from 'react-loadable';
declare global {
    interface NodeRequire {
        resolveWeak: (name: string) => number;
    }
}
export default function ComponentCreator(path: string, hash: string): ReturnType<typeof Loadable>;

