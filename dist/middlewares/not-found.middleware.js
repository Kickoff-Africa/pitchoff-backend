export function notFound(req, res) {
    return res.status(404).json({ message: `Route ${req.method} ${req.url} not found` });
}
//# sourceMappingURL=not-found.middleware.js.map