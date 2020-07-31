const add = require('./add');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds 1.1 + 2.2 to equal 3.3', () => {
    expect(add(1.1, 2.2)).toBe(3.3); 
});

test('adds msg + 2 to equal null', () => {
    expect(add('msg', 2)).toBe(null);
});



