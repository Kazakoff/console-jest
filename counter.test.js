const createCounter = require('./counter');
 const beg = 100;
 const cnt1 = createCounter(beg);

describe('counter test', () => {
test('create', () => {
     expect(cnt1.get()).toBe(beg);
});
test('increment', () => {
    const step =3;
    cnt1.increment(step);
     expect(cnt1.get()).toBe(beg+step);
})
})
;