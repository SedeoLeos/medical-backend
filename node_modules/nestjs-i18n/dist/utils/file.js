"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFiles = exports.getDirectories = exports.isDirectory = exports.filterAsync = exports.mapAsync = exports.exists = void 0;
const promises_1 = require("fs/promises");
const path = require("path");
const exists = async (path) => {
    return !!(await (0, promises_1.stat)(path));
};
exports.exists = exists;
function mapAsync(array, callbackfn) {
    return Promise.all(array.map(callbackfn));
}
exports.mapAsync = mapAsync;
async function filterAsync(array, callbackfn) {
    const filterMap = await mapAsync(array, callbackfn);
    return array.filter((_, index) => filterMap[index]);
}
exports.filterAsync = filterAsync;
const isDirectory = async (source) => (await (0, promises_1.lstat)(source)).isDirectory();
exports.isDirectory = isDirectory;
const getDirectories = async (source) => {
    const dirs = await (0, promises_1.readdir)(source);
    return filterAsync(dirs.map((name) => path.join(source, name)), exports.isDirectory);
};
exports.getDirectories = getDirectories;
const getFiles = async (dirPath, pattern, includeSubfolders) => {
    const dirs = await (0, promises_1.readdir)(dirPath, {
        withFileTypes: true,
    });
    const files = [];
    const deepFiles = [];
    for (const f of dirs) {
        try {
            if (typeof f === 'string') {
                if ((await (0, exports.exists)(path.join(dirPath, f))) && pattern.test(f)) {
                    files.push(f);
                }
            }
            else if (f.isFile() && pattern.test(f.name)) {
                files.push(f);
            }
            else if (includeSubfolders && f.isDirectory()) {
                deepFiles.push(...(await (0, exports.getFiles)(path.join(dirPath, f.name), pattern, includeSubfolders)));
            }
        }
        catch (_a) {
            continue;
        }
    }
    return files
        .map((f) => path.join(dirPath, typeof f === 'string' ? f : f.name))
        .concat(deepFiles);
};
exports.getFiles = getFiles;
//# sourceMappingURL=file.js.map