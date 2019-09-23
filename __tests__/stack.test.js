import makeStack from '../src/stack';

const stack = makeStack;

test("stack's main flow", () => {
    stack.push('one');
    stack.push('two');
    expect(stack.pop()).toEqual('two');
    expect(stack.pop()).toEqual('one');
});

test('isEmpty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push('two');
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
});

test('pop in empty stack', () => {
    expect(() => stack.pop()).toThrow();
});

