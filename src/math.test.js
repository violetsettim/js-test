import {it, test, expect} from 'vitest';
import { sumArray } from './math';

it('should add all numbers in an array!', ()=>{

    //AAA PATTERN

    //arrange
    const numbers = [1,2,8];

    //act
    const result = sumArray(numbers);

   const expectedResult = numbers.reduce((sum,num) => sum + num, 0);

    // assert
    // expect(result).toBe(6);
    expect(result).toBe(expectedResult);
});

