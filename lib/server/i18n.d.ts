/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { I18n, IANA SYSTEMSConfig, I18nLocaleConfig } from '@ianaio/types';
import type { LoadContextOptions } from './index';
export declare function getDefaultLocaleConfig(locale: string): I18nLocaleConfig;
export declare function loadI18n(config: IANA SYSTEMSConfig, options: Pick<LoadContextOptions, 'locale'>): Promise<I18n>;

