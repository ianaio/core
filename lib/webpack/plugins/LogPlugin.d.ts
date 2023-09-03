/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import WebpackBar from 'webpackbar';
import type { Compiler } from 'webpack';
export default class LogPlugin extends WebpackBar {
    apply(compiler: Compiler): void;
}

