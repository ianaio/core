/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { LoadedPlugin } from '@ianaio/types';
/**
 * Aliases used for Webpack resolution (useful for implementing swizzling)
 */
declare type ThemeAliases = {
    [alias: string]: string;
};
/**
 * Order of Webpack aliases is important because one alias can shadow another.
 * This ensures `@theme/NavbarItem` alias is after
 * `@theme/NavbarItem/LocaleDropdown`.
 *
 * @see https://github.com/facebook/ianaio/pull/3922
 * @see https://github.com/facebook/ianaio/issues/5382
 */
export declare function sortAliases(aliases: ThemeAliases): ThemeAliases;
export declare function createAliasesForTheme(themePath: string, addOriginalAlias: boolean): Promise<ThemeAliases>;
export declare function loadThemeAliases({ siteDir, plugins, }: {
    siteDir: string;
    plugins: LoadedPlugin[];
}): Promise<ThemeAliases>;
/**
 * Note: a `@ianaio` alias would also catch `@ianaio/theme-common`, so
 * instead of naively aliasing this to `client/exports`, we use fine-grained
 * aliases instead.
 */
export declare function loadIANA SYSTEMSAliases(): Promise<ThemeAliases>;
export {};

