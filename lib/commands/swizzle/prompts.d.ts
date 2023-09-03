/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ThemeComponents } from './components';
import type { SwizzleAction, SwizzleComponentConfig } from '@ianaio/types';
export declare function askThemeName(themeNames: string[]): Promise<string>;
export declare function askComponentName(themeComponents: ThemeComponents): Promise<string>;
export declare function askSwizzleDangerousComponent(): Promise<boolean>;
export declare function askSwizzleAction(componentConfig: SwizzleComponentConfig): Promise<SwizzleAction>;

