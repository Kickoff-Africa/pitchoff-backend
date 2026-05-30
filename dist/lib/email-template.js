export function renderEmailTemplate(htmlBody, variables) {
    return Object.entries(variables).reduce((content, [key, value]) => content.replaceAll(new RegExp(`\\{\\{${key}\\}\\}`, "g"), value), htmlBody);
}
//# sourceMappingURL=email-template.js.map