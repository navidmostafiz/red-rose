import { CssVarsProvider } from "@mui/joy/styles";
import {
  Button,
  FormControl,
  Input,
  Typography,
  Card,
  Grid,
  List,
  ListItem,
} from "@mui/joy";

function App() {
  return (
    <CssVarsProvider>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={4}>
          <Card variant="outlined" sx={{ maxWidth: 400 }}>
            <Typography align="center" level="h3">
              red*apple
            </Typography>
            <Typography align="center" level="h5">
              name-trait-analysis
            </Typography>
            <FormControl>
              <Input
                // html input attribute
                name="name"
                type="text"
                placeholder="name..."
              />
              <Button variant="solid">SHOW TRAITS</Button>
            </FormControl>
          </Card>
        </Grid>

        <Grid xs={4}>
          <Card variant="outlined" sx={{ maxWidth: 400 }}>
            <Typography align="center" level="h3">
              Good Traits...
            </Typography>
            <List aria-label="basic-list">
              <ListItem>Hello, world!</ListItem>
              <ListItem>Bye bye, world!</ListItem>
            </List>
          </Card>
        </Grid>

        <Grid xs={4}>
          <Card variant="outlined" sx={{ maxWidth: 400 }}>
            <Typography align="center" level="h3">
              Not So Good Traits...
            </Typography>
            <List aria-label="basic-list">
              <ListItem>Hello, world!</ListItem>
              <ListItem>Bye bye, world!</ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </CssVarsProvider>
  );
}

export default App;
