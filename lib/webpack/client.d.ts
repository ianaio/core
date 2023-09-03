/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Props } from '@ianaio/types';
import type { Configuration } from 'webpack';
export default function createClientConfig(props: Props, minify?: boolean): Promise<Configuration>;

