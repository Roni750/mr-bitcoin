<template>
    <Transition>
        <section v-if="msg" class="user-msg" :class="msgClass">
            <p>{{ msg.txt }}</p>
        </section>
    </Transition>
</template>

<script>
import { eventBus } from '@/services/eventBus.service.js'

export default {
    data() {
        return {
            msg: null,
        }
    },
    methods: {
        showMsg(msg) {
            this.msg = msg
            setTimeout(() => (this.msg = null), msg.timeout || 1500)
        },
    },
    computed: {
        msgClass() {
            return {
                success: this.msg.type === 'success',
                fail: this.msg.type === 'fail',
            }
        },
    },
    created() {
        this.unListen = eventBus.on('user-msg', this.showMsg)
        console.log('test')
    },
    unmounted() {
        this.unListen()
    },
}
</script>
<style lang="scss">
@import '../assets/styles/setup/variables';

.user-msg {
    transform-origin: right;
    border: 1px solid rgba($color: #000000, $alpha: .5);
    border-radius: 15px;
    padding: .5em;
    width: 400px;
    bottom: 15px;
    position: absolute;
    right: 15px;
    z-index: 100;
}

.success {
    background: $clr1;
    -webkit-box-shadow: 0px 0px 55px 0px rgba(38, 213, 146, 0.34);
    -moz-box-shadow: 0px 0px 55px 0px rgba(38, 213, 146, 0.34);
    box-shadow: 0px 0px 55px 0px rgba(38, 213, 146, 0.34);

    p {
        color: black;
    }
}

.fail {
    background: rgb(211, 43, 43);
    -webkit-box-shadow: 0px 0px 550px rgba(211, 43, 43, 034);
    -moz-box-shadow: 0px 0px 55px rgba(211, 43, 43, 0.34);
    box-shadow: 0px 0px 55px rgba(211, 43, 43, 0.34);

    p {
        color: whitesmoke;
    }
}

.v-enter-active,
.v-leave-active {
    transition: 0.8s ease;
}

.v-enter-from,
.v-leave-to {
    scale: 0 1;
    opacity: 0;
}
</style>
