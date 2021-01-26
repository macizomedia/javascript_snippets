process.stdin.setEncoding('utf8');
var stdin = process.openStdin();

const machine = {
    initial: 'inactive',
    states: {
        inactive: {
            on: {
                CLICK: 'active'
            }
        },
        active: {
            on: {
                CLICK: 'inactive'
            }
        }
    }
}

function transition(state, event) {
    return machine.states[state].on[event] || state
}

let currentState = 'inactive';

function send(event) {
    const nextState = transition(currentState, event)
    currentState = nextState
}

stdin.on('data', () => {

    send('CLICK')
    console.log(currentState)
})

function intrepret(machine) {
    //keep track of state
    //In a Closure
    let currentState = machine.initial;
    let status = 1;

    const listener = new Set();

    //recive Event
    const send = (event) => {

        if (status === 2) {
            return;
        }
        const nextState = transition(currentState, event);
        // Update State
        currentState = nextState;
    }

    //register listener
    const onTransition = (listener) => {
        listener.add(listener)
    }

    const stop = () => {
        status = 2,
            listener.clear();
    }
    //exposes functions
    return {
        onTransition,
        stop,
        send
    };
}

console.log('Press any key to active the machine...')