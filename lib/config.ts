import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Explorar participación ciudadana",
    prompt: "¿Qué ha expresado la ciudadanía en los procesos participativos sobre los temas prioritarios del estado?",
    icon: "lightbulb",
  },
];

export const PLACEHOLDER_INPUT = "Pregunta, analiza o propone...";

export const GREETING = "La inteligencia colectiva de Querétaro, a tu alcance.";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
