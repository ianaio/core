/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
declare global {
    const __webpack_require__: {
        gca: (name: string) => string;
    };
    interface Navigator {
        connection?: {
            effectiveType: string;
            saveData: boolean;
        };
    }
}
declare const _default: Readonly<{
    prefetch(routePath: string): false | Promise<void[]>;
    preload(routePath: string): false | Promise<void[]>;
}>;
export default _default;

