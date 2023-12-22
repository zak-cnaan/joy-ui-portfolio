import { Box, Container } from "@mui/joy";

function Theming() {
  const bgs = [
    "body",
    "surface",
    "popup",
    "level1",
    "level2",
    "level3",
    "tooltip",
    "backdrop",
  ];

  //--joy-palette-text-tertiary

  const colors = [
    "text.primary",
    "text.secondary",
    "text.icon",
    //   "common.white", "common.black", "var(--joy-palette-text-tertiary)"
  ];
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {bgs.map((bg) => {
        return (
          <div key={bg}>
            {colors.map((c) => {
              return (
                <Box
                  key={c + bg}
                  sx={{
                    backgroundColor: `background.${bg}`,
                    color: c,
                    p:2,
                    m:1
                    // fontSize: 'xs',
                    // p:2,
                    // m:0.5,
                    // borderBottom:1
                  }}
                >
                  <div>{`background.${bg}`}</div>
                  <div>{`${c}`}</div>
                </Box>
              );
            })}
          </div>
        );
      })}
    </Container>
  );
}

export default Theming;
