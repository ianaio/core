/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Props, LoadedPlugin } from '@ianaio/types';
/**
 * Runs the `injectHtmlTags` lifecycle, and aggregates all plugins' tags into
 * directly render-able HTML markup.
 */
export declare function loadHtmlTags(plugins: LoadedPlugin[]): Pick<Props, 'headTags' | 'preBodyTags' | 'postBodyTags'>;

