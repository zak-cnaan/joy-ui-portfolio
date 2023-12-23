import { Box, Container } from "@mui/joy";

function Cards() {
  const backgroundVals = [
    "background.body",
    "background.surface",
    "background.popup",
    "background.level1",
    "background.level2",
    "background.level3",
    "background.tooltip",
    "background.backdrop",
  ];
  const colorVals = [
    "text.primary",
    "text.secondary",
    "text.icon" /*tertiary*/,
  ];
  return (
    <Container>
      {backgroundVals.map((background) => {
        return colorVals.map((color) => {
          return (
            <Box
            key={background + color}
              sx={{
                backgroundColor: background,
                color: color,
                m: 2,
                p: 2,
              }}
            >
              <p>{`backgroundColor: ${background}, color: ${color}`}</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                enim quis rem ipsum labore sapiente magnam, eius
              </p>
            </Box>
          );
        });
      })}
    </Container>
  );
}

export default Cards;
