import {
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
  EACH,
} from '../constants/index.js';

export class LottoRenderer {
  targetElement;

  constructor(targetElement) {
    this.targetElement = targetElement;
  }

  renderMoneyForm() {
    const moneyForm = this.targetElement.querySelector('.money-form');

    moneyForm.innerHTML = `<label class="mb-2 d-inline-block"
    >구입할 금액을 입력해주세요.
  </label>
  <div class="d-flex">
    <input
      id="inputMoney"
      type="number"
      class="money-input w-100 mr-2 pl-2"
      placeholder="구입 금액"
      autofocus
    />
    <button class="money-input-button btn btn-cyan">확인</button>
  </div>`;
  }

  renderTickets(tickets, isShowTickets) {
    const ticketSection = this.targetElement.querySelector('.ticket-section');

    ticketSection.innerHTML = `
    <div class="d-flex">
      <label class="ticket-notice flex-auto my-0">총 ${
        tickets.length
      }${EACH}를 구매하였습니다.</label>
      <div class="ticket-toggle-button flex-auto d-flex justify-end pr-1">
        <label class="switch">
          <input type="checkbox" data-purpose="toggleButton" ${
            isShowTickets ? 'checked' : ''
          }/>
          <span class="text-base font-normal">번호보기</span>
        </label>
      </div>
    </div>
    <div class="${
      isShowTickets ? 'd-flex flex-col flex-wrap' : 'd-flex flex-wrap'
    }">
      ${
        isShowTickets
          ? tickets
              .map(
                (ticket) => `<div>
                          <span class="ticket mx-1 text-4xl">🎟️ </span>
                          <span class="ticket-numbers">${ticket
                            .getNumbers()
                            .join(', ')}</span>
                            </div>`
              )
              .join(' ')
          : tickets
              .map(() => `<span class="ticket mx-1 text-4xl">🎟️ </span>`)
              .join(' ')
      }
    </div>
    `;
  }

  removeTickets() {
    const ticketSection = this.targetElement.querySelector('.ticket-section');

    ticketSection.innerHTML = '';
  }

  renderWinningNumberInputs() {
    const winningNumberForm = this.targetElement.querySelector(
      '.winning-number-form'
    );

    winningNumberForm.innerHTML = `<label class="flex-auto d-inline-block mb-3"
    >지난 주 당첨번호 6${EACH}와 보너스 넘버 1${EACH}를 입력해주세요.</label
  >
  <div class="d-flex">
    <div>
      <h4 class="mt-0 mb-3 text-center">당첨 번호</h4>
      <div>
        <input
          type="number"
          class="winning-number mx-1 text-center"
        />
        <input
          type="number"
          class="winning-number mx-1 text-center"
        />
        <input
          type="number"
          class="winning-number mx-1 text-center"
        />
        <input
          type="number"
          class="winning-number mx-1 text-center"
        />
        <input
          type="number"
          class="winning-number mx-1 text-center"
        />
        <input
          type="number"
          class="winning-number mx-1 text-center"
        />
      </div>
    </div>
    <div class="bonus-number-container flex-grow">
      <h4 class="mt-0 mb-3 text-center">보너스 번호</h4>
      <div class="d-flex justify-center">
        <input type="number" class="bonus-number text-center" />
      </div>
    </div>
  </div>
  <button
    class="open-result-modal-button mt-5 btn btn-cyan w-100"
  >
    결과 확인하기
  </button>`;
  }

  removeWinningNumberInputs() {
    const winningNumberForm = this.targetElement.querySelector(
      '.winning-number-form'
    );

    winningNumberForm.innerHTML = '';
  }

  renderModal(sameCounts, rateOfReturn) {
    const modalDiv = this.targetElement.querySelector('.modal');

    modalDiv.classList.add('open');

    modalDiv.innerHTML = `
    <div class="modal-inner p-10">
      <div class="modal-close">
        <svg viewbox="0 0 40 40" data-purpose="closeModal">
          <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" data-purpose="closeModal" />
        </svg>
      </div>

      <h2 class="text-center">🏆 당첨 통계 🏆</h2>
      <div class="d-flex justify-center">
        <table class="result-table border-collapse border border-black">
          <thead>
            <tr class="text-center">
              <th class="p-3">일치 갯수</th>
              <th class="p-3">당첨금</th>
              <th class="p-3">당첨 갯수</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center">
              <td class="p-3">${FIFTH_PLACE}${EACH}</td>
              <td class="p-3">${FIFTH_PLACE_RETURN.toLocaleString()}</td>
              <td class="winning-count p-3">${sameCounts.get(
                FIFTH_PLACE
              )}${EACH}</td>
            </tr>
            <tr class="text-center">
              <td class="p-3">${FOURTH_PLACE}${EACH}</td>
              <td class="p-3">${FOURTH_PLACE_RETURN.toLocaleString()}</td>
              <td class="winning-count p-3">${sameCounts.get(
                FOURTH_PLACE
              )}${EACH}</td>
            </tr>
            <tr class="text-center">
              <td class="p-3">${THIRD_PLACE}${EACH}</td>
              <td class="p-3">${THIRD_PLACE_RETURN.toLocaleString()}</td>
              <td class="winning-count p-3">${sameCounts.get(
                THIRD_PLACE
              )}${EACH}</td>
            </tr>
            <tr class="text-center">
              <td class="p-3">${THIRD_PLACE}${EACH} + 보너스볼</td>
              <td class="p-3">${SECOND_PLACE_RETURN.toLocaleString()}</td>
              <td class="winning-count p-3">${sameCounts.get(
                SECOND_PLACE
              )}${EACH}</td>
            </tr>
            <tr class="text-center">
              <td class="p-3">${FIRST_PLACE}${EACH}</td>
              <td class="p-3">${FIRST_PLACE_RETURN.toLocaleString()}</td>
              <td class="winning-count p-3">${sameCounts.get(
                FIRST_PLACE
              )}${EACH}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="rate-of-return text-center font-bold">당신의 총 수익률은 ${rateOfReturn}% 입니다.</p>
      <div class="d-flex justify-center mt-5">
        <button type="button" class="restart-button btn btn-cyan" data-purpose="restart">다시 시작하기</button>
      </div>
    </div>`;
  }

  removeModal() {
    const modalDiv = this.targetElement.querySelector('.modal');
    modalDiv.innerHTML = '';

    modalDiv.classList.remove('open');
  }
}
