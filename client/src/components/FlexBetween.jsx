const { Box } = require("@mui/material");
const { styled } = require("@mui/system");

const FlexBeetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

export default FlexBeetween;