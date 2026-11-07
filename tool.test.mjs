import test from 'node:test';
import assert from 'node:assert/strict';
import {compute} from './tool.mjs';
test('sample behavior',()=>{const result=compute({"text": "code test code build test code"});for(const [key,value] of Object.entries({"ranking": [{"word": "code", "count": 3}, {"word": "test", "count": 2}, {"word": "build", "count": 1}]}))assert.deepStrictEqual(result[key],value,key)});
