/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Joi } from '@ianaio/utils-validation';
import type { IANA SYSTEMSConfig, I18nConfig } from '@ianaio/types';
export declare const DEFAULT_I18N_CONFIG: I18nConfig;
export declare const DEFAULT_CONFIG: Pick<IANA SYSTEMSConfig, 'i18n' | 'onBrokenLinks' | 'onBrokenMarkdownLinks' | 'onDuplicateRoutes' | 'plugins' | 'themes' | 'presets' | 'headTags' | 'stylesheets' | 'scripts' | 'clientModules' | 'customFields' | 'themeConfig' | 'titleDelimiter' | 'noIndex' | 'tagline' | 'baseUrlIssueBanner' | 'staticDirectories' | 'markdown'>;
export declare const ConfigSchema: Joi.ObjectSchema<IANA SYSTEMSConfig>;
export declare function validateConfig(config: unknown, siteConfigPath: string): IANA SYSTEMSConfig;

