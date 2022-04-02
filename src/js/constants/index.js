const TITLE_SELECTOR = '.title';
const MONEY_INPUT_SELECTOR = '.money-input';
const MONEY_INPUT_BUTTON_SELECTOR = '.money-input-button';
const TICKET_SELECTOR = '.ticket';
const TICKET_NOTICE_SELECTOR = '.ticket-notice';
const TICKET_NUMBERS_SELECTOR = '.ticket-numbers';
const TICKET_TOGGLE_BUTTON_SELECTOR = '.ticket-toggle-button';
const WINNING_NUMBER_SELECTOR = '.winning-number';
const BONUS_NUMBER_SELECTOR = '.bonus-number';
const OPEN_RESULT_MODAL_BUTTON_SELECTOR = '.open-result-modal-button';

const PRICE = 1000;
const MAX_NUMBER = 45;
const MIN_NUMBER = 1;
const NUMBER_AMOUNT = 6;
const UPPER_LIMIT_MONEY = 100000;
const LOWER_LIMIT_MONEY = 1000;
const MIN_WINNING_COUNT = 3;
const NOT_DIVISIBLE_MONEY_BY_THOUSAND_TEXT =
  '로또 구입 금액을 1,000 단위로 입력해 주세요.';
const NOT_UPPER_THAN_LOWER_LIMIT = '값은 1000 이상이어야 합니다.';
const NOT_LOWER_THAN_UPPER_LIMIT = '값은 100000 이하여야 합니다.';
const NOT_ALL_NUMBERS_INPUT =
  '당첨 번호 및 보너스 번호가 모두 입력되어야 합니다.';

const NOT_ALL_NUMBERS_UPPER_THAN_MIN_NUMBER =
  '당첨 번호 및 보너스 번호의 값은 1이상이어야 합니다.';
const NOT_ALL_NUMBERS_LOWER_THAN_MAX_NUMBER =
  '당첨 번호 및 보너스 번호의 값은 1이상이어야 합니다.';
const FIRST_PLACE = 6;
const SECOND_PLACE = '5+bonus';
const THIRD_PLACE = 5;
const FOURTH_PLACE = 4;
const FIFTH_PLACE = 3;
const FIRST_PLACE_RETURN = 2000000000;
const SECOND_PLACE_RETURN = 30000000;
const THIRD_PLACE_RETURN = 1500000;
const FOURTH_PLACE_RETURN = 50000;
const FIFTH_PLACE_RETURN = 5000;
const WINNING_BOUNS_NUMBER_COUNT = 7;
const WINNING_MIN_NUMBER = 1;
const WINNING_MAX_NUMBER = 45;

export {
  TITLE_SELECTOR,
  MONEY_INPUT_SELECTOR,
  MONEY_INPUT_BUTTON_SELECTOR,
  TICKET_SELECTOR,
  TICKET_NOTICE_SELECTOR,
  TICKET_NUMBERS_SELECTOR,
  TICKET_TOGGLE_BUTTON_SELECTOR,
  WINNING_NUMBER_SELECTOR,
  BONUS_NUMBER_SELECTOR,
  OPEN_RESULT_MODAL_BUTTON_SELECTOR,
  PRICE,
  MAX_NUMBER,
  MIN_NUMBER,
  NUMBER_AMOUNT,
  UPPER_LIMIT_MONEY,
  LOWER_LIMIT_MONEY,
  MIN_WINNING_COUNT,
  NOT_LOWER_THAN_UPPER_LIMIT,
  NOT_DIVISIBLE_MONEY_BY_THOUSAND_TEXT,
  NOT_UPPER_THAN_LOWER_LIMIT,
  FIRST_PLACE,
  SECOND_PLACE,
  THIRD_PLACE,
  FOURTH_PLACE,
  FIFTH_PLACE,
  FIRST_PLACE_RETURN,
  SECOND_PLACE_RETURN,
  THIRD_PLACE_RETURN,
  FOURTH_PLACE_RETURN,
  FIFTH_PLACE_RETURN,
  NOT_ALL_NUMBERS_INPUT,
  WINNING_BOUNS_NUMBER_COUNT,
  NOT_ALL_NUMBERS_UPPER_THAN_MIN_NUMBER,
  WINNING_MIN_NUMBER,
  WINNING_MAX_NUMBER,
  NOT_ALL_NUMBERS_LOWER_THAN_MAX_NUMBER,
};
