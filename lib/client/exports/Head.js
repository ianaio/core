/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function Head(props) {
    return <Helmet {...props}/>;
}

