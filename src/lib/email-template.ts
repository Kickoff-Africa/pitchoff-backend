export function renderEmailTemplate(
  htmlBody: string,
  variables: Record<string, string>
) {
  return Object.entries(variables).reduce(
    (content, [key, value]) =>
      content.replaceAll(new RegExp(`\\{\\{${key}\\}\\}`, "g"), value),
    htmlBody
  )
}
