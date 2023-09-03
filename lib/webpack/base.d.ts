/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Configuration } from 'webpack';
import type { Props } from '@ianaio/types';
export declare const clientDir: string;
export declare function excludeJS(modulePath: string): boolean;
export declare function createBaseConfig(props: Props, isServer: boolean, minify?: boolean): Promise<Configuration>;

