/// <reference types="Cypress" />

describe('로또 테스트', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('첫 시작시 화면은 타이틀, 금액 입력 안내문, 금액 입력창과 제출 버튼으로 이루어져 있다.', () => {});

  it('로또 구입 금액이 제출되면, 금액에 해당하는 로또(1,000원 당 1개)들을 발급해야 한다.', () => {});

  it('로또 구입 금액이 제출되면 당첨 번호 입력 안내문, 당첨 번호 6개와 보너스 넘버 1개에 대한 각각의 입력창, 제출 버튼이 만들어진다.', () => {});

  it('로또 티켓 발급 후 다시 로또 구입 금액이 제출되면 로또 티켓들을 초기화하고 새롭게 발급한다.', () => {});

  it('제출된 로또 구입 금액이 1,000원 단위가 아니면 경고 alert를 출력한다.', () => {});

  it('제출된 로또 구입 금액이 1,000원을 넘지 않으면 경고 tooltip을 출력한다.', () => {});

  it('제출된 로또 구입 금액이 숫자가 아니면 경고 tooltip을 출력하고 input의 value를 초기화한다.', () => {});

  it('번호보기 기능을 활성화하면 발급된 각 로또들의 번호를 보여준다.', () => {});

  it('번호보기 기능으로 보여지는 발급된 각 로또들의 번호는 6개이다.', () => {});
});
