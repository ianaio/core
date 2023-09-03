/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
export declare type HostPortOptions = {
    host?: string;
    port?: string;
};
export declare function getHostPort(options: HostPortOptions): Promise<{
    host: string;
    port: number | null;
}>;

