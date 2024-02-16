import { EMPTY_LIST_MESSAGE } from '../constants/ui';

describe('Constants', () => {
  describe('EMPTY_LIST_MESSAGE', () => {
    describe('Type checks', () => {
      it('is an object', () => {
        expect(typeof EMPTY_LIST_MESSAGE).toBe('object');
      });

      it('has a title property that is a string', () => {
        expect(typeof EMPTY_LIST_MESSAGE.title).toBe('string');
      });

      it('has an action property that is a string', () => {
        expect(typeof EMPTY_LIST_MESSAGE.action).toBe('string');
      });
    });

    // assuming layout depends on the actual content of the message
    describe('Layout integrity checks', () => {
      it('has a title property that is not too long', () => {
        expect(EMPTY_LIST_MESSAGE.title.length).toBeLessThanOrEqual(50);
      });

      it('has an action property that is not too long', () => {
        expect(EMPTY_LIST_MESSAGE.action.length).toBeLessThanOrEqual(50);
      });
    });
  });
});
