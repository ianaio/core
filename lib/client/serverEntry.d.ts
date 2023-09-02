/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Locals } from '@slorber/static-site-generator-webpack-plugin';
export default function render(locals: Locals & {
    path: string;
}): Promise<string>;

