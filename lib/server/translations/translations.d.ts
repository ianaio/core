/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { TranslationFileContent, TranslationFile, CodeTranslations, InitializedPlugin } from '@ianaio/types';
export declare type WriteTranslationsOptions = {
    override?: boolean;
    messagePrefix?: string;
};
declare type TranslationContext = {
    localizationDir: string;
};
export declare function readCodeTranslationFileContent(context: TranslationContext): Promise<TranslationFileContent | undefined>;
export declare function writeCodeTranslations(context: TranslationContext, content: TranslationFileContent, options: WriteTranslationsOptions): Promise<void>;
export declare function writePluginTranslations({ localizationDir, plugin, translationFile, options, }: TranslationContext & {
    plugin: InitializedPlugin;
    translationFile: TranslationFile;
    options?: WriteTranslationsOptions;
}): Promise<void>;
export declare function localizePluginTranslationFile({ localizationDir, plugin, translationFile, }: TranslationContext & {
    plugin: InitializedPlugin;
    translationFile: TranslationFile;
}): Promise<TranslationFile>;
export declare function getPluginsDefaultCodeTranslationMessages(plugins: InitializedPlugin[]): Promise<CodeTranslations>;
export declare function applyDefaultCodeTranslations({ extractedCodeTranslations, defaultCodeMessages, }: {
    extractedCodeTranslations: TranslationFileContent;
    defaultCodeMessages: CodeTranslations;
}): TranslationFileContent;
export {};

