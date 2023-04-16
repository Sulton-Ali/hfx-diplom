import {
  Box,
  Button,
  Container,
  Group,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export function LoginForm() {
  const form = useForm({
    initialValues: {
      login: "",
      password: "",
    },
  });
  return (
    <Box py={120}>
      <Container size="lg">
        <Title
          order={3}
          sx={{
            width: "50%",
            textAlign: "center",
            margin: "0 auto",
            paddingBottom: "40px",
          }}
        >
          RAHBAR XODIMLAR VA MUTAXASISLAR UCHUN KURS O‘QISHI VA BILIMLAR SINOVI
        </Title>
        <Box
          component="form"
          sx={(theme) => ({
            display: "flex",
            justifyContent: "center",
            padding: "40px 20px",
            borderRadius: "16px",
            backgroundColor: theme.colors.gray[2],
          })}
        >
          <Stack
            sx={{
              width: "100%",
              maxWidth: "320px",
            }}
          >
            <TextInput
              label="Login"
              withAsterisk
              {...form.getInputProps("login")}
            />
            <TextInput
              type="password"
              label="Parol"
              withAsterisk
              {...form.getInputProps("password")}
            />
            <Group position="right" py={20}>
              <Button variant="filled" fullWidth>
                Kirish
              </Button>
            </Group>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
