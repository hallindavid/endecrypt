Alpine.data('app', () => ({
    input: '',
    output: '',
    ciphers: [],
    new_cipher_input: '',
    new_cipher_output: '',
    add_cipher() {
        this.open = !this.open;
    },
    run_endecrypt() {
        this.output = this.input;
    },
    remove_cipher(index) {

    }
}))