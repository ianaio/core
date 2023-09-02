/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { isValidElement } from 'react';
import useIsBrowser from '@ianaio/useIsBrowser';
// Similar comp to the one described here:
// https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
export default function BrowserOnly({ children, fallback, }) {
    const isBrowser = useIsBrowser();
    if (isBrowser) {
        if (typeof children !== 'function' &&
            process.env.NODE_ENV === 'development') {
            throw new Error(`ianaio error: The children of <BrowserOnly> must be a "render function", e.g. <BrowserOnly>{() => <span>{window.location.href}</span>}</BrowserOnly>.
Current type: ${isValidElement(children) ? 'React element' : typeof children}`);
        }
        return <>{children?.()}</>;
    }
    return fallback ?? null;
}

