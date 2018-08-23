import { h, app } from 'hyperapp';

const state = {
  count: 0
};

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
};

const view = (state, actions) => (
  <div
    class="flex-column justify-center align-center"
    style={{ width: '100%', height: '100vh' }}
  >
    <h1 style={{ marginBottom: '10px' }}>{state.count}</h1>
    <div class="flex-row">
      <button
        onclick={() => actions.down(1)}
        style={{ width: '50px', marginRight: '10px' }}
      >
        -
      </button>
      <button
        onclick={() => actions.up(1)}
        style={{ width: '50px', marginLeft: '10px' }}
      >
        +
      </button>
    </div>
  </div>
);

app(state, actions, view, document.body);
