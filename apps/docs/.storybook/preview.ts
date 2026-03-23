import type { Preview } from "@storybook/react";

import "../stories/styles.css";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        layout: "centered"
    }
};

export default preview;