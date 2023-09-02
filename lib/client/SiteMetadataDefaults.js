/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Head from '@ianaio/Head';
import useIANAIOContext from '@ianaio/useIANAIOContext';
import useBaseUrl from '@ianaio/useBaseUrl';
export default function SiteMetadataDefaults() {
    const { siteConfig: { favicon, title, noIndex }, i18n: { currentLocale, localeConfigs }, } = useIANAIOContext();
    const faviconUrl = useBaseUrl(favicon);
    const { htmlLang, direction: htmlDir } = localeConfigs[currentLocale];
    return (<Head>
      {/*
          charSet + generator are handled in the html templates
          See https://github.com/facebook/ianaio/pull/7952
          <meta charSet="UTF-8" />
          <meta name="generator" content={`IANAIO v${ianaioVersion}`} />
        */}
      <html lang={htmlLang} dir={htmlDir}/>
      <title>{title}</title>
      <meta property="og:title" content={title}/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      {noIndex && <meta name="robots" content="noindex, nofollow"/>}
      {favicon && <link rel="icon" href={faviconUrl}/>}
    </Head>);
}

