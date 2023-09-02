/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import siteConfig from '@generated/ianaio.config';
import globalData from '@generated/globalData';
import i18n from '@generated/i18n';
import codeTranslations from '@generated/codeTranslations';
import siteMetadata from '@generated/site-metadata';
// Static value on purpose: don't make it dynamic!
// Using context is still useful for testability reasons.
const contextValue = {
    siteConfig,
    siteMetadata,
    globalData,
    i18n,
    codeTranslations,
};
export const Context = React.createContext(contextValue);
export function IANAIOContextProvider({ children, }) {
    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

