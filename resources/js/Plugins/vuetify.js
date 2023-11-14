import "vuetify/styles";
import { createVuetify } from "vuetify";

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
        },
    },
});
