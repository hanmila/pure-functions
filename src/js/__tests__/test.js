import { showHealth } from '../app.js';

test('return healthy', () => {
    expect(showHealth({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('return wounded', () => {
    expect(showHealth({ name: 'Боец', health: 40})).toBe('wounded');
});

test('return critical', () => {
    expect(showHealth({ name: 'Плут', health: 10})).toBe('critical');
})
