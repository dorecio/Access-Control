import React from "react";
import { Box, Button } from "@mui/material";

const Donacion = () => {
    const url5 =
        process.env.URL_5 || "https://buy.stripe.com/test_9AQg2f6gY9yB26k6oo";
    const url10 =
        process.env.URL_10 || "https://buy.stripe.com/test_bIY17lbBi4eh6mA145";
    const url15 =
        process.env.URL_15 || "https://buy.stripe.com/test_00gg2f7l2h13aCQ28a";

    return (
        <Box m="25px">
            <Box>
                <Box>
                    <Box m="10px">
                        <Button
                            variant="contained"
                            disableElevation
                            href={url5}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Dona 5 Dolares
                        </Button>
                    </Box>
                    <Box m="10px">
                        <Button
                            variant="contained"
                            disableElevation
                            href={url10}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Dona 10 Dolares
                        </Button>
                    </Box>
                    <Box m="10px">
                        <Button
                            variant="contained"
                            disableElevation
                            href={url15}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Dona 15 Dolares
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Donacion;