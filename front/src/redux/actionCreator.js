export const CLICK_CELL = 'CLICK_CELL';
export const CLICK_TEXT = 'CLICK_TEXT';

export function clickCellActionCreator(position) {
   return {
      type: CLICK_CELL,
      position: position
   }
}

export function clickTextActionCreator() {
   return {
      type: CLICK_TEXT
   }
}