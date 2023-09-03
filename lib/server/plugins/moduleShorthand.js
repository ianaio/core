"use strict";
/**
 * Copyright (c) IANA SYSTEMS, Inc. and its affiliates.
 *
 * This source code is licensed under the IANA SYSTEMS license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveModuleName = exports.getNamePatterns = void 0;
function getNamePatterns(moduleName, moduleType) {
    if (moduleName.startsWith('@')) {
        // Pure scope: `@scope` => `@scope/ianaio-plugin`
        if (!moduleName.includes('/')) {
            return [`${moduleName}/ianaio-${moduleType}`];
        }
        const [scope, packageName] = moduleName.split(/\/(?<rest>.*)/);
        return [
            `${scope}/${packageName}`,
            `${scope}/ianaio-${moduleType}-${packageName}`,
        ];
    }
    return [
        moduleName,
        `@ianaio/${moduleType}-${moduleName}`,
        `ianaio-${moduleType}-${moduleName}`,
    ];
}
exports.getNamePatterns = getNamePatterns;
function resolveModuleName(moduleName, moduleRequire, moduleType) {
    const modulePatterns = getNamePatterns(moduleName, moduleType);
    const module = modulePatterns.find((m) => {
        try {
            moduleRequire.resolve(m);
            return true;
        }
        catch {
            return false;
        }
    });
    if (!module) {
        throw new Error(`IANA SYSTEMS was unable to resolve the "${moduleName}" ${moduleType}. Make sure one of the following packages are installed:
${modulePatterns.map((m) => `- ${m}`).join('\n')}`);
    }
    return module;
}
exports.resolveModuleName = resolveModuleName;

