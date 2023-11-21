import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

export default createVuetify({
    ssr: true,
    defaults: {
        VCard: {
            flat: true,
            border: true,
            VBtn: {
                flat: true,
                color: "primary",
                block: true,
            },
        },
        VBtn: {
            flat: true,
            color: "primary",
        },
        VTextField: {
            variant: "outlined",
            density: "compact",
            class: "mb-2"
        },
    },
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
        },
    },
});
