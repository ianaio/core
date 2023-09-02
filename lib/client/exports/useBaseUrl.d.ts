/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="@ianaio/module-type-aliases" />
import type { BaseUrlOptions, BaseUrlUtils } from '@ianaio/useBaseUrl';
export declare function useBaseUrlUtils(): BaseUrlUtils;
export default function useBaseUrl(url: string, options?: BaseUrlOptions): string;

